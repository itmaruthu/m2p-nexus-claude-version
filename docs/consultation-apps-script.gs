/**
 * M2P Nexus: "Book a consultation" receiver (Google Apps Script, bound to the follow-up Google Sheet).
 *
 * Each website submission:
 *   1. is checked (required fields, honeypot, minimum time on the form, size limits),
 *   2. is appended as a row to the "Enquiries" sheet, with Status = New for follow-ups,
 *   3. is emailed to NOTIFY_TO, with Reply-To set to the visitor's email when they gave one.
 *
 * Setup: see README.md, "Consultation form". Run setup() once, then Deploy > New deployment > Web app
 * (Execute as: Me, Who has access: Anyone) and put the web app URL in the CONSULT_ENDPOINT repository
 * variable.
 */

const NOTIFY_TO = 'hello@m2pnexus.com';
const SHEET_NAME = 'Enquiries';
const MIN_FORM_MS = 1500; // faster than this is almost certainly a bot

const HEADERS = [
  'Received', 'Name', 'Phone', 'Email', 'Business', 'Industry', 'Looking for', 'Details',
  'Preferred contact', 'Page', 'Status', 'Follow-up date', 'Owner', 'Notes',
];
const STATUSES = ['New', 'Contacted', 'Meeting booked', 'Proposal sent', 'Won', 'Not now', 'Lost'];

/** Run once from the editor: creates the sheet, header row, status dropdown and formatting. */
function setup() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold')
    .setBackground('#172554').setFontColor('#ffffff');
  sheet.setFrozenRows(1);
  const status = sheet.getRange(2, HEADERS.indexOf('Status') + 1, sheet.getMaxRows() - 1, 1);
  status.setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(STATUSES, true).build());
  sheet.getRange(2, HEADERS.indexOf('Follow-up date') + 1, sheet.getMaxRows() - 1, 1)
    .setDataValidation(SpreadsheetApp.newDataValidation().requireDate().build())
    .setNumberFormat('dd mmm yyyy');
  sheet.getRange(2, 1, sheet.getMaxRows() - 1, 1).setNumberFormat('dd mmm yyyy, hh:mm');
  sheet.setColumnWidths(1, HEADERS.length, 160);
  sheet.setColumnWidth(HEADERS.indexOf('Details') + 1, 360);
}

function doPost(e) {
  const p = (e && e.parameter) || {};
  const all = (e && e.parameters) || {};

  // Bots: honeypot filled in, or the form was "completed" impossibly fast. Pretend success.
  if (p.website) return json({ ok: true });
  if (p.elapsed && Number(p.elapsed) < MIN_FORM_MS) return json({ ok: true });

  const name = clean(p.name, 120);
  const phone = clean(p.phone, 30);
  if (!name || !/\d{10}/.test(phone.replace(/\D/g, ''))) return json({ ok: false, error: 'missing' });

  const email = clean(p.email, 160);
  const needs = clean(Array.isArray(all.needs) ? all.needs.join(', ') : p.needs, 400);
  const row = [
    new Date(), name, phone, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : '',
    clean(p.business, 160), clean(p.industry, 80), needs, clean(p.message, 1500),
    clean(p.contact, 30), clean(p.page, 80), 'New', '', '', '',
  ];

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
    sheet.appendRow(row);
  } finally {
    lock.releaseLock();
  }

  const lines = HEADERS.slice(1, 10).map((h, i) => `${h}: ${row[i + 1] || '-'}`);
  MailApp.sendEmail({
    to: NOTIFY_TO,
    subject: `New consultation request: ${name}${row[4] ? ` (${row[4]})` : ''}`,
    body: `${lines.join('\n')}\n\nTrack follow-ups: ${SpreadsheetApp.getActive().getUrl()}`,
    replyTo: row[3] || undefined,
    name: 'M2P Nexus website',
  });

  // Plain non-JavaScript form posts land here: show a readable page instead of JSON.
  if (p.js !== '1' && !p.elapsed) {
    return HtmlService.createHtmlOutput('<p style="font-family:sans-serif">Thank you. We have your details and will get back to you soon.</p>');
  }
  return json({ ok: true });
}

/** Trim, cap length, and neutralise spreadsheet formulas (=, +, -, @ at the start). */
function clean(v, max) {
  let s = String(v == null ? '' : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

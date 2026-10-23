import '@fontsource/kavivanar/400.css';

// The paper-to-digital pair used on Home (hero) and Services (Run your business scene). Illustrations only:
// render them inside an aria-hidden container.

/** Handwritten carbon-copy bill book page, the way many of our customers work today. Illustration only. */
export function PaperBill() {
  const rows = [
    ['தேங்காய் 200 × 18', '3600'],
    ['அரிசி 25 கிலோ', '1350'],
    ['பருப்பு 5 கிலோ', '—', true],
    ['கடலை எண்ணெய் 5 லி', '950'],
    ['சர்க்கரை 10 கிலோ', '450'],
  ];
  return (
    <div className="relative -rotate-2 rounded-sm bg-white shadow-[0_18px_40px_-18px_rgba(23,37,84,0.45)] ring-1 ring-rule">
      <div className="h-3 border-b-2 border-dashed border-rule" />
      <div className="relative px-6 pb-8 pt-4 sm:px-8 font-[family-name:var(--font-hand)] text-[#2B3A8C] text-[15px] sm:text-xl leading-8 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_31px,var(--color-rule)_31px,var(--color-rule)_32px)]">
        <div className="absolute inset-y-0 left-5 sm:left-6 w-px bg-[#E7A9A9]" />
        <div className="absolute inset-y-0 left-6 sm:left-7 w-px bg-[#E7A9A9]" />
        <div className="pl-4 flex justify-between">
          <span>பில் எண் 214</span>
          <span>12/10</span>
        </div>
        <div className="pl-4">பெயர்: ...........................</div>
        {rows.map(([item, amount, struck]) => (
          <div key={item} className={`pl-4 flex justify-between ${struck ? 'line-through decoration-2 opacity-60' : ''}`}>
            <span>{item}</span>
            <span>{amount}</span>
          </div>
        ))}
        <div className="pl-4 flex justify-between">
          <span>மொத்தம்</span>
          <span className="underline decoration-double underline-offset-4">6350</span>
        </div>
      </div>
    </div>
  );
}

/** The same bill as a digital invoice: what changes for the business. Illustration only. */
export function DigitalInvoice() {
  const rows = [
    ['Coconut', 'தேங்காய்', '200 × ₹18', '₹3,600'],
    ['Rice', 'அரிசி', '25 kg', '₹1,350'],
    ['Groundnut oil', 'கடலை எண்ணெய்', '5 L', '₹950'],
    ['Sugar', 'சர்க்கரை', '10 kg', '₹450'],
  ];
  return (
    <div className="animate-slip-in rounded-2xl bg-white p-5 sm:p-6 shadow-[0_30px_60px_-24px_rgba(23,37,84,0.5)] ring-1 ring-ink/10 tabular-nums">
      <div className="flex items-baseline justify-between">
        <p className="font-heading font-bold text-ink text-lg">Invoice 214</p>
        <p className="rounded-full bg-leaf/10 px-2.5 py-0.5 text-sm font-semibold text-leaf">Paid by UPI</p>
      </div>
      <table className="mt-4 w-full text-sm text-body">
        <tbody>
          {rows.map(([en, ta, qty, amount]) => (
            <tr key={en} className="border-t border-rule">
              <td className="py-2 pr-2">
                <span className="block font-medium text-ink">{en}</span>
                <span lang="ta" className="block text-xs">{ta}</span>
              </td>
              <td className="py-2 pr-2 whitespace-nowrap">{qty}</td>
              <td className="py-2 text-right font-medium text-ink whitespace-nowrap">{amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t-2 border-ink">
            <td colSpan={2} className="pt-3 font-semibold text-ink">Total</td>
            <td className="pt-3 text-right font-heading font-bold text-ink text-lg">₹6,350</td>
          </tr>
        </tfoot>
      </table>
      <ul className="mt-4 space-y-1 text-sm text-leaf font-medium">
        <li>Sent to the customer on WhatsApp</li>
        <li>Stock updated automatically</li>
      </ul>
    </div>
  );
}

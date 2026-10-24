// Clients shown in the "Businesses we work with" strip on the Home page. The strip stays hidden while this
// list is empty. Only add a client the founders have confirmed. A logo is optional (put the file in
// src/assets/clients/, trimmed of empty margins, about 240px tall, and import it here); without one the
// name is shown as text.
import liyaTraders from '../assets/clients/liya-traders.webp';
import jrkEngineering from '../assets/clients/jrk-engineering.webp';
import chiccoInteriors from '../assets/clients/chicco-interiors.webp';
import ontwikkelCorp from '../assets/clients/ontwikkel-corp.webp';
import fdgGaskets from '../assets/clients/fdg-gaskets.webp';

export const clients = [
  { name: 'Liya Traders', logo: liyaTraders, width: 335, height: 240 },
  { name: 'JRK Engineering', logo: jrkEngineering, width: 396, height: 240 },
  // Square, finely lettered logo: shown a size up so it reads as clearly as the wide ones.
  { name: 'Chicco Interiors', logo: chiccoInteriors, width: 250, height: 240, large: true },
  // Recruitment services client. White-on-blue original recoloured to its blue on transparent; very wide, so
  // shown shorter.
  { name: 'Ontwikkel Corp Advertising', logo: ontwikkelCorp, width: 801, height: 240, wide: true },
  // Original had a black background; made transparent. About 2:1, so a size between the two.
  { name: 'FDG (Fridge Door Gasket)', logo: fdgGaskets, width: 492, height: 240, medium: true },
];

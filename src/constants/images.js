/* ------------------------------------------------------------------
   Image sources — the client's own photography, served straight from
   src/assets. Every image on the site flows through this file.

   Vite bundles/fingerprints each asset at build time via import.meta.glob,
   so the returned strings are hashed URLs that always resolve. If any
   image ever fails to load, the global image fallback
   (src/utils/imageFallback.js) swaps in an on-brand gradient.
------------------------------------------------------------------- */

// eagerly import every asset; values are the resolved (hashed) URLs
const files = import.meta.glob('../assets/**/*.{png,webp,jpg,jpeg}', {
  eager: true,
  import: 'default',
})

// resolve an asset by a distinctive part of its path (folder-qualified when
// a bare filename would be ambiguous, e.g. "Neckless" exists in Gold & Diamond)
const pick = (needle) => {
  const key = Object.keys(files).find((k) => k.includes(needle))
  if (!key) {
    // eslint-disable-next-line no-console
    console.warn(`[images] asset not found for "${needle}"`)
    return ''
  }
  return files[key]
}

// 3D temple render used in the home hero
export const heroTemple = pick('Bigtemple 3D')

export const IMAGES = {
  // home — four collection cards
  gold: pick('Four Wonders Sections/Gold'),
  silver: pick('Four Wonders Sections/Silver'),
  diamond: pick('Four Wonders Sections/Diamond'),
  gift: pick('Four Wonders Sections/Gift'),

  // home — featured editorial rows
  featured1: pick('03. Gold/01. Bridal'), // The Wedding Collection (bridal)
  featured2: pick('03. Gold/02. Neckless'), // Temple Jewellery
  featured3: pick('01. Home Page/Solitaire'),

  // home — welcome / about split
  welcome1: pick('02. About Us/01'),
  welcome2: pick('02. About Us/02'),

  // heritage timeline (rendered sepia/grayscale in CSS for a vintage feel)
  heritage1947: pick('02. About Us/01'),
  heritage1965: pick('02. About Us/02'),
  heritage1985: pick('02. About Us/MD Image'),
  heritage2000: pick('01. Home Page/Temple Jewellery'),
  heritage2026: pick('01. Home Page/Wedding Collections'),

  // gold savings scheme
  scheme: pick('03. Gold/01. Bridal'),

  // page heroes
  aboutHero: pick('02. About Us/01'),
  goldHero: pick('Four Wonders Sections/Gold'),
  silverHero: pick('Four Wonders Sections/Silver'),
  diamondHero: pick('Four Wonders Sections/Diamond'),
  giftHero: pick('Four Wonders Sections/Gift'),
  chitHero: pick('03. Gold/01. Bridal'),
  contactHero: pick('01. Home Page/Wedding Collections'),

  // shared CTA background
  cta: pick('01. Home Page/Wedding Collections'),
}

// home gallery — the "Moments Worth" wedding set (8 images)
export const galleryImages = [
  pick('Moments Worth Wedding Section/01'),
  pick('Moments Worth Wedding Section/02'),
  pick('Moments Worth Wedding Section/03'),
  pick('Moments Worth Wedding Section/04'),
  pick('Moments Worth Wedding Section/05'),
  pick('Moments Worth Wedding Section/06'),
  pick('Moments Worth Wedding Section/07'),
  pick('Moments Worth Wedding Section/08'),
]

// per-category images for the collection pages (ordered to match each
// page's CATEGORIES list)
export const GOLD_IMAGES = [
  pick('03. Gold/01. Bridal'),
  pick('03. Gold/02. Neckless'),
  pick('03. Gold/03. Bangels'),
  pick('03. Gold/04. Earings'),
  pick('03. Gold/05. Chains'),
  pick('03. Gold/06. Rings'),
  pick('03. Gold/07. Temple Jewellery'),
]

export const SILVER_IMAGES = [
  pick('04. Silver/01. Silver Pooja Items'),
  pick('04. Silver/02. Silver Utensils'),
  pick('04. Silver/03. Silver Gifts'),
  pick('04. Silver/04. Silver Items'),
  pick('04. Silver/05. Silver Coins'),
  pick('04. Silver/06. Childrens Silver Collections'),
]

export const DIAMOND_IMAGES = [
  pick('05. Diamond/01. Diamond Rings'),
  pick('05. Diamond/02. Earings'),
  pick('05. Diamond/03. Neckless'),
  pick('05. Diamond/04. Pendent'),
  pick('05. Diamond/05. Bangels'),
  pick('05. Diamond/06. Bridal Collections'),
]

export const GIFT_IMAGES = [
  pick('06. Gifts/01. Wedding Gifts'),
  pick('06. Gifts/02. Aniversery Gift'),
  pick('06. Gifts/03. Birthday Gifts'),
  pick('06. Gifts/04. Baby Shower'),
  pick('06. Gifts/05. House Warming'),
  pick('06. Gifts/06. Festive Gifts'),
  pick('06. Gifts/07. Corporate gifts'),
  pick('06. Gifts/08. Return Gifts'),
]

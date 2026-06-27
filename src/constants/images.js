/* ------------------------------------------------------------------
   Image sources.

   Real, jewellery-themed photography served from the Unsplash CDN via
   a verified pool of photo IDs (fast, reliable, no API key). Avatars
   come from pravatar. If any URL ever fails to load, the global image
   fallback (src/utils/imageFallback.js) swaps in an on-brand gradient,
   so the layout can never break.

   To use the client's own photography later, just replace the URLs in
   the IMAGES map below — every image on the site flows through here.
------------------------------------------------------------------- */

// verified Unsplash jewellery / luxury photo IDs
const ID = {
  a: '1515562141207-7a88fb7ce338',
  b: '1602173574767-37ac01994b2a',
  c: '1605100804763-247f67b3557e',
  d: '1599643478518-a784e5dc4c8f',
  e: '1611591437281-460bfbe1220a',
  f: '1535632066927-ab7c9ab60908',
  g: '1573408301185-9146fe634ad0',
  h: '1611652022419-a9419f74343d',
  i: '1599459183200-59c7687a0275',
  j: '1617038260897-41a1f14a8ca0',
  k: '1506630448388-4e683c67ddb0',
  l: '1635767798638-3e25273a8236',
  m: '1583937443566-6fe1a1c6e400',
  n: '1551836022-d5d88e9218df',
  o: '1596944924616-7b38e7cfac36',
  p: '1610694955371-d4a3e0ce4b52',
  q: '1606760227091-3dd870d97f1d',
  r: '1589128777073-263566ae5e4d',
  s: '1633934542430-0905ccb5f050',
  t: '1631982690223-8aa4be0a2497',
}

export const img = (id, w = 1200, h = 1500) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

export const IMAGES = {
  hero: img(ID.a, 2000, 2400),
  heroSecondary: img(ID.b, 1000, 1300),

  welcome1: img(ID.c, 1100, 1400),
  welcome2: img(ID.d, 900, 1100),
  welcome3: img(ID.e, 800, 1000),

  // collection cards
  gold: img(ID.f, 1100, 1400),
  silver: img(ID.g, 1100, 1400),
  diamond: img(ID.h, 1100, 1400),
  gift: img(ID.i, 1100, 1400),

  // featured editorial
  featured1: img(ID.j, 1400, 1700),
  featured2: img(ID.k, 1400, 1700),
  featured3: img(ID.l, 1400, 1700),

  // heritage / timeline (rendered sepia/grayscale in CSS for a vintage feel)
  heritage1947: img(ID.m, 1000, 1000),
  heritage1965: img(ID.n, 1000, 1000),
  heritage1985: img(ID.o, 1000, 1000),
  heritage2000: img(ID.p, 1000, 1000),
  heritage2026: img(ID.q, 1000, 1000),

  scheme: img(ID.r, 1400, 1200),

  // page heroes
  aboutHero: img(ID.s, 2000, 1300),
  goldHero: img(ID.f, 2000, 1300),
  silverHero: img(ID.g, 2000, 1300),
  diamondHero: img(ID.h, 2000, 1300),
  giftHero: img(ID.i, 2000, 1300),
  chitHero: img(ID.r, 2000, 1300),
  contactHero: img(ID.t, 2000, 1300),

  cta: img(ID.a, 2000, 1200),
}

export const galleryImages = [
  img(ID.c, 800, 1000),
  img(ID.f, 800, 800),
  img(ID.j, 800, 800),
  img(ID.h, 800, 800),
  img(ID.l, 800, 800),
  img(ID.o, 800, 1000),
  img(ID.q, 800, 800),
  img(ID.s, 800, 800),
]

// faces for testimonials (pravatar is reliable; gradient fallback otherwise)
export const testimonialAvatars = Array.from(
  { length: 5 },
  (_, i) => `https://i.pravatar.cc/200?img=${i * 7 + 11}`,
)

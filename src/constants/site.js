/* ------------------------------------------------------------------
   Central content / data source for the whole site.
------------------------------------------------------------------- */

// logo lives in /public — resolve against the configured base path
export const LOGO = `${import.meta.env.BASE_URL}SCJ%20Logo.png`

export const BRAND = {
  name: 'Siva Chidambaram Pillai',
  short: 'SCP Jewellery',
  initials: 'SCP',
  tagline: 'Jewellery — Est. 1947',
  since: 1947,
  years: 79,
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'care@scpjewellery.com',
  address: ['1526, Thoppil Pillayar Kovil, Rajakrisnapuram', 'South Rampart, Thanjavur, Tamil Nadu 613001'],
  hours: [
    { day: 'Monday – Saturday', time: '10:00 AM – 8:30 PM' },
    { day: 'Sunday', time: '10:30 AM – 2:00 PM' },
  ],
  map: 'https://www.google.com/maps?q=10.7866907,79.1347046&z=17&output=embed',
  mapLink: 'https://maps.app.goo.gl/WHfvdJMogDwTc6Z99',
  social: [
    { label: 'Facebook', icon: 'Facebook', href: 'https://www.facebook.com/sivachidambaramjewellery' },
    { label: 'Instagram', icon: 'Instagram', href: 'https://www.instagram.com/scpjewellery' },
  ],
}

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Gold', to: '/gold', mega: 'gold' },
  { label: 'Silver', to: '/silver', mega: 'silver' },
  { label: 'Diamond', to: '/diamond', mega: 'diamond' },
  { label: 'Gift', to: '/gift' },
  { label: 'Scheme', to: '/chit' },
  { label: 'Contact Us', to: '/contact' },
]

export const MEGA = {
  gold: {
    title: 'Gold Atelier',
    note: 'Hallmarked 916 BIS purity. Hand-finished by master karigars.',
    links: ['Bridal Sets', 'Temple Jewellery', 'Bangles', 'Chains', 'Necklaces', 'Rings', 'Earrings', 'Daily Wear'],
  },
  silver: {
    title: 'Silver House',
    note: 'Pooja articles, gifting and heirloom silverware.',
    links: ['Pooja Articles', 'Silver Coins', 'Gift Items', 'Utensils', 'Idols', 'Home Decor'],
  },
  diamond: {
    title: 'Diamond Vault',
    note: 'IGI / GIA certified solitaires and bridal diamonds.',
    links: ['Engagement Rings', 'Solitaires', 'Bridal Diamond', 'Necklaces', 'Pendants', 'Earrings'],
  },
}

export const COLLECTIONS = [
  {
    key: 'gold',
    title: 'Gold Jewellery',
    sub: 'Hallmarked 916 Heritage',
    desc: 'Bridal grandeur to everyday elegance, struck in pure 22K gold.',
    to: '/gold',
    icon: 'Crown',
    img: 'gold',
  },
  {
    key: 'silver',
    title: 'Silver Collections',
    sub: 'Sacred & Decorative',
    desc: 'Pooja articles, coins and gifting silver of timeless purity.',
    to: '/silver',
    icon: 'Sparkles',
    img: 'silver',
  },
  {
    key: 'diamond',
    title: 'Diamond Jewellery',
    sub: 'Certified Brilliance',
    desc: 'IGI-certified solitaires set to catch every flicker of light.',
    to: '/diamond',
    icon: 'Gem',
    img: 'diamond',
  },
  {
    key: 'gift',
    title: 'Gift Collections',
    sub: 'Moments Worth Keeping',
    desc: 'Curated keepsakes for weddings, births and festivals.',
    to: '/gift',
    icon: 'Gift',
    img: 'gift',
  },
]

export const TIMELINE = [
  {
    year: '1947',
    title: 'The First Spark',
    text: 'Founder Siva Chidambaram Pillai opens a modest goldsmith bench in Thanjavur, the year India found its freedom.',
    img: 'heritage1947',
  },
  {
    year: '1965',
    title: 'A Name of Trust',
    text: 'Two decades of honest karat earn the family a reputation for purity that travels across the southern districts.',
    img: 'heritage1965',
  },
  {
    year: '1985',
    title: 'The Grand Showroom',
    text: 'The flagship showroom opens its doors, marrying temple craftsmanship with a palatial retail experience.',
    img: 'heritage1985',
  },
  {
    year: '2000',
    title: 'A New Generation',
    text: 'The third generation introduces certified diamonds and the AABARANA gold savings scheme for every family.',
    img: 'heritage2000',
  },
  {
    year: '2026',
    title: 'Heritage, Reimagined',
    text: 'Seventy-nine years on, master karigars and modern design studios craft the heirlooms of tomorrow.',
    img: 'heritage2026',
  },
]

export const FEATURES = [
  { icon: 'Landmark', title: '79 Years of Heritage', text: 'An unbroken line of craftsmanship since 1947.' },
  { icon: 'Users', title: 'Trusted by Families', text: 'Adorning four generations across the south.' },
  { icon: 'BadgeCheck', title: 'Purity Assured', text: 'BIS hallmarked gold, certified diamonds.' },
  { icon: 'IndianRupee', title: 'Transparent Pricing', text: 'Live rates, zero hidden making charges.' },
  { icon: 'Gem', title: 'Exclusive Designs', text: 'In-house ateliers, never mass produced.' },
  { icon: 'HandHeart', title: 'Personalized Service', text: 'A dedicated consultant for every occasion.' },
  { icon: 'Hammer', title: 'Premium Craftsmanship', text: 'Hand-finished by master karigars.' },
  { icon: 'Heart', title: 'Customer First', text: 'Lifetime exchange and care promises.' },
]

export const FEATURED = [
  {
    tag: 'Bridal',
    title: 'The Wedding Collection',
    text: 'Regal temple-inspired bridal sets, layered haarams and matha-pattis crafted for the most luminous day of a lifetime.',
    img: 'featured1',
    to: '/gold',
  },
  {
    tag: 'Heritage',
    title: 'Temple Jewellery',
    text: 'Antique nakshi work and deity motifs passed down through generations of devotional craftsmanship.',
    img: 'featured2',
    to: '/gold',
  },
  {
    tag: 'Diamond',
    title: 'Solitaire Stories',
    text: 'Certified solitaires and bridal diamond suites engineered to release maximum fire and brilliance.',
    img: 'featured3',
    to: '/diamond',
  },
]

export const STATS = [
  { value: 79, suffix: '+', label: 'Years of Heritage' },
  { value: 50, suffix: 'K+', label: 'Happy Customers' },
  { value: 1, suffix: 'L+', label: 'Ornaments Crafted' },
  { value: 100, suffix: '%', label: 'Purity Assured' },
]

export const TESTIMONIALS = [
  {
    name: 'Lakshmi Narayanan',
    place: 'Madurai',
    gender: 'female',
    rating: 5,
    text: 'Three generations of my family have bought our wedding jewellery here. The purity and the trust are simply unmatched.',
  },
  {
    name: 'Aravind Krishnan',
    place: 'Chennai',
    gender: 'male',
    rating: 5,
    text: 'The bridal set they crafted for my wife was beyond our imagination. Transparent pricing and flawless finish.',
  },
  {
    name: 'Meenakshi Sundaram',
    place: 'Thanjavur',
    gender: 'female',
    rating: 5,
    text: 'I joined the AABARANA gold scheme years ago. It made owning gold effortless. A truly caring, family-run house.',
  },
  {
    name: 'Priya Venkatesh',
    place: 'Coimbatore',
    gender: 'female',
    rating: 5,
    text: 'Their diamond certification gave us complete confidence. The personal consultant remembered every detail.',
  },
  {
    name: 'Ramesh Subramaniam',
    place: 'Tuticorin',
    gender: 'male',
    rating: 5,
    text: 'Temple jewellery here feels like it carries a soul. Heirloom quality that my daughter will pass on one day.',
  },
]

export const FAQS = [
  {
    q: 'Is all your gold BIS hallmarked?',
    a: 'Yes. Every gold ornament carries a BIS hallmark certifying 916 (22K) purity, with the HUID engraved and detailed on your invoice.',
  },
  {
    q: 'How does the AABARANA gold savings scheme work?',
    a: 'You contribute a fixed amount each month for eleven months. We add a bonus instalment, and at maturity you redeem the full value against any jewellery of your choice at the live gold rate.',
  },
  {
    q: 'Are your diamonds certified?',
    a: 'All solitaires and bridal diamonds are accompanied by IGI or GIA certificates detailing the 4Cs — cut, colour, clarity and carat.',
  },
  {
    q: 'Do you offer lifetime exchange?',
    a: 'Absolutely. Gold ornaments are eligible for lifetime exchange at prevailing rates, and we offer transparent buy-back on hallmarked items.',
  },
  {
    q: 'Can I customise a bridal set?',
    a: 'Yes. Our in-house design atelier works with you from sketch to finished heirloom, including temple and antique custom commissions.',
  },
]

export const CHIT_STEPS = [
  { n: '01', title: 'Enrol in Minutes', text: 'Join AABARANA at the showroom or online and pick your monthly instalment.' },
  { n: '02', title: 'Save Every Month', text: 'Contribute a fixed amount for eleven comfortable months.' },
  { n: '03', title: 'We Add the Bonus', text: 'On your behalf we add a generous bonus instalment at maturity.' },
  { n: '04', title: 'Redeem in Gold', text: 'Convert the matured value into any jewellery at the live rate.' },
]

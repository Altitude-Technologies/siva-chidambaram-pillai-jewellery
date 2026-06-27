/* Per-page category & content data for inner pages. */
import { img } from './images'

const cat = (name, icon, desc) => ({
  name,
  icon,
  desc,
  img: img(`scp-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`, 900, 1100),
})

export const GOLD = {
  hero: {
    eyebrow: 'Pure 916 Hallmarked',
    title: 'The Gold|Atelier',
    intro:
      'Bridal grandeur to everyday grace, struck in 22-karat purity and finished by the hands of master karigars.',
  },
  categories: [
    cat('Bridal Collections', 'Crown', 'Regal sets that crown the most luminous day of a lifetime.'),
    cat('Temple Jewellery', 'Landmark', 'Antique nakshi work and deity motifs of devotional craft.'),
    cat('Daily Wear', 'Sparkles', 'Featherlight pieces designed for everyday elegance.'),
    cat('Bangles', 'CircleDot', 'From slim kankanas to broad bridal kadas.'),
    cat('Chains', 'Repeat', 'Hand-linked chains in timeless and modern weaves.'),
    cat('Necklaces', 'Gem', 'Haarams, chokers and layered statement necklaces.'),
    cat('Rings', 'CircleDot', 'Engagement, casual and ceremonial rings.'),
    cat('Earrings', 'Flower2', 'Jhumkas, studs and chandbalis for every occasion.'),
  ],
}

export const SILVER = {
  hero: {
    eyebrow: 'Sterling & Sacred',
    title: 'The Silver|House',
    intro:
      'Sacred pooja articles, heirloom silverware and thoughtful gifting — crafted in lustrous, certified silver.',
  },
  categories: [
    cat('Pooja Articles', 'Flower2', 'Lamps, kumkum boxes and archana sets for the home shrine.'),
    cat('Silver Idols', 'Landmark', 'Finely cast deities for daily worship and gifting.'),
    cat('Gift Items', 'Gift', 'Keepsakes and trophies for life’s celebrations.'),
    cat('Utensils', 'CircleDot', 'Plates, tumblers and bowls of heirloom quality.'),
    cat('Silver Coins', 'Coins', '999 purity coins for festivals and investment.'),
    cat('Home Decor', 'Sparkles', 'Sculptural pieces that elevate any interior.'),
  ],
}

export const DIAMOND = {
  hero: {
    eyebrow: 'IGI · GIA Certified',
    title: 'The Diamond|Vault',
    intro:
      'Certified solitaires and bridal diamond suites, engineered to release the maximum fire, brilliance and scintillation.',
  },
  categories: [
    cat('Engagement Rings', 'Diamond', 'A promise set in certified brilliance.'),
    cat('Solitaires', 'Gem', 'Hand-picked stones graded on the 4Cs.'),
    cat('Bridal Diamond', 'Crown', 'Coordinated suites for the modern bride.'),
    cat('Necklaces', 'Sparkles', 'Riviere and statement diamond necklaces.'),
    cat('Pendants', 'CircleDot', 'Everyday sparkle in elegant settings.'),
    cat('Earrings', 'Flower2', 'Studs, drops and hoops that catch every light.'),
  ],
}

export const GIFT = {
  hero: {
    eyebrow: 'Moments Worth Keeping',
    title: 'The Gifting|Gallery',
    intro:
      'Curated keepsakes wrapped in heritage — for weddings, new arrivals, festivals and the people who matter most.',
  },
  categories: [
    cat('Wedding Gifts', 'CalendarHeart', 'Coordinated gold and silver for the new couple.'),
    cat('Baby Gifts', 'Baby', 'First gold, bracelets and silver keepsakes.'),
    cat('Festive Gifts', 'PartyPopper', 'Auspicious coins and ornaments for every festival.'),
    cat('Corporate Gifts', 'Building2', 'Bespoke silver mementos and trophies.'),
  ],
}

export const PROMISES = [
  { icon: 'BadgeCheck', title: 'BIS Hallmark', text: 'Every gram certified for 916 purity, with HUID engraved.' },
  { icon: 'ShieldCheck', title: 'Purity Promise', text: 'Independently assayed. What you see is exactly what you get.' },
  { icon: 'Scale', title: 'Transparent Weighing', text: 'Live rate, displayed weight and zero hidden charges.' },
  { icon: 'Repeat', title: 'Lifetime Exchange', text: 'Exchange hallmarked gold at prevailing rates, always.' },
]

export const CARE = [
  { icon: 'Sparkles', title: 'Store with Care', text: 'Keep each piece in its own soft pouch to avoid scratches.' },
  { icon: 'ShieldCheck', title: 'Avoid Chemicals', text: 'Remove jewellery before perfume, swimming or cleaning.' },
  { icon: 'Repeat', title: 'Annual Service', text: 'Bring pieces in yearly for complimentary cleaning and polish.' },
  { icon: 'Award', title: 'Insure Heirlooms', text: 'We provide valuation certificates for insurance cover.' },
]

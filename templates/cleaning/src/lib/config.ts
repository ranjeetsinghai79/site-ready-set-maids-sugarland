import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Ready Set Maids",
    tagline: "Sparkle. Shine. Every Single Time.",
    phone: "(877) 716-8414",
    phoneHref: "tel:+18777168414",
    email: "info@readysetmaids.com",
    address: "123 Main St",
    city: "Austin",
    serviceAreas: ["Austin TX", "Cedar Park TX", "Bee cave TX", "Fort Worth TX", "Grapevine TX", "Georgetown TX", "Irving TX", "Lakeway TX", "Leander TX", "Liberty Hill TX", "Pflugerville TX", "Round Rock TX", "The Woodlands TX", "Argyle TX", "Bartonville TX", "Carrollton TX", "Colleyville TX", "Coppell TX", "Corinth TX", "Dallas TX", "Farmer Branch TX", "Flower Mound TX", "Frisco TX", "Justin TX", "Hebron TX", "Highland Village TX", "Keller TX", "Krum TX", "Las Colinas TX", "Little Elm TX", "Plano TX", "Richardson TX", "Southlake TX", "Atascocita TX", "Conroe TX", "Cypress TX", "Fresno TX", "Friendswood TX", "Houston TX", "Humble TX", "Katy TX", "Kingwood TX", "Pearland TX", "Richmond TX", "Missouri City TX", "Spring TX", "Sugar Land TX"],
    license: "Licensed & Insured",
    since: "2010",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "ember",
    niche: "cleaning",
  },

  services: [
    { icon: "home", title: "House Cleaning", desc: "Enjoy a spotless home with our comprehensive house cleaning services.", urgent: false },
    { icon: "briefcase", title: "Commercial Cleaning", desc: "Maintain a pristine and professional environment for your business.", urgent: false },
    { icon: "clock", title: "Recurring Cleaning", desc: "Schedule regular cleaning to keep your home consistently fresh and tidy.", urgent: false },
    { icon: "truck", title: "Move In Move Out Cleaning", desc: "Ensure a sparkling clean space for your new beginning or a smooth handover.", urgent: false },
    { icon: "sparkles", title: "Deep Cleaning", desc: "Experience a thorough, detailed clean that revitalizes every corner of your home.", urgent: false },
    { icon: "heart", title: "Eco Friendly Cleaning", desc: "Gentle on your home and the planet, using only sustainable cleaning products.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Austin, TX", stars: 5, text: "Ready Set Maids did an incredible job with our deep clean last month. Our home felt brand new! The team was punctual, professional, and paid attention to every detail. It was worth every penny and I've already booked them for recurring service." },
    { name: "Mark T.", location: "Dallas, TX", stars: 5, text: "We used Ready Set Maids for a move-out clean and they exceeded all expectations. The apartment was immaculate, which really helped with getting our deposit back. Their booking process was super easy, and the cleaners were very friendly." },
    { name: "Jessica R.", location: "Houston, TX", stars: 5, text: "I'm so impressed with the eco-friendly cleaning service. My house smells fresh, not like harsh chemicals, and it's sparkling clean. It's great to know I'm getting a top-notch clean while also being mindful of the environment. Highly recommend!" }
  ],

  trustBadges: [
    "Licensed & Insured", "Eco-Friendly Products", "5-Star Rated", "Book in 60 Seconds", "Satisfaction Guaranteed"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 5000, label: "Homes Cleaned", suffix: "+", decimals: 0 },
    { value: 10, label: "Years in Business", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Booking", desc: "Schedule your cleaning in under 60 seconds online." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "No hidden fees, just clear and upfront costs." },
    { icon: "award", title: "Expert Cleaners", desc: "Our team is thoroughly vetted, trained, and insured." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We're not happy until you're absolutely delighted." },
    { icon: "heart", title: "Eco-Friendly Focus", desc: "Safe for your family, pets, and the planet." },
    { icon: "shield-check", title: "Reliable & Secure", desc: "Trustworthy service with consistent quality every time." }
  ],

  formServiceOptions: ["House Cleaning", "Commercial Cleaning", "Recurring Cleaning", "Move In Move Out Cleaning", "Deep Cleaning", "Eco Friendly Cleaning"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!
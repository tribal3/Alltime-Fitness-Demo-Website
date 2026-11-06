import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react'

export type Lang = 'en'

const en = {
  meta: {
    title: 'Alltime Fitness 24/7 — Gym on Kashmir Road, PECHS, Karachi',
    description:
      'Alltime Fitness 24/7 — a 24-hour gym at Plot 54-M, Kashmir Road, Block 2 PECHS, Karachi. Certified trainers, premium equipment and round-the-clock access. Independent website concept by TRIBAL³.',
  },
  nav: {
    home: 'Home',
    about: 'About Us',
    experiences: 'Our Facilities',
    training: 'Training',
    gallery: 'Gallery',
    contact: 'Contact',
  },
  actions: {
    join: 'Join Us',
    call: 'Call Now',
    whatsapp: 'WhatsApp Us',
    directions: 'Get Directions',
    explore: 'Explore Our Gym',
    contact: 'Contact Us',
    retry: 'Open WhatsApp',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    scroll: 'Scroll to explore',
  },
  hero: {
    badge: 'Kashmir Road · Block 2 PECHS, Karachi',
    titleTop: 'Train Anytime.',
    titleAccent: 'Stay Strong.',
    text: 'A 24/7 gym at Plot 54-M, Kashmir Road in Block 2 PECHS — with certified trainers, premium equipment and round-the-clock access for every schedule.',
    accessValue: '24/7 Access',
    accessLabel: 'Open every day',
    optionsValue: 'Certified Trainers',
    optionsLabel: 'Premium equipment',
    locationValue: 'Kashmir Rd, PECHS',
    locationLabel: 'Karachi, Pakistan',
    imageAlt: 'Modern gym training floor with strength and cardio equipment',
  },
  marquee: ['Strength', 'Discipline', 'Consistency', 'Energy'],
  about: {
    eyebrow: 'About Alltime Fitness 24/7',
    index: '01',
    title: 'A 24/7 gym in PECHS, built for real training.',
    text: 'Alltime Fitness 24/7 is a round-the-clock gym at Plot 54-M, Kashmir Road in Block 2 PECHS, Karachi. With premium equipment, certified trainers and a friendly atmosphere, it is a place to build strength, improve fitness and stay consistent — whenever your schedule allows.',
    points: [
      'Open 24 hours, 7 days a week',
      'Certified trainers and premium equipment',
      'Easy to reach on Kashmir Road, Block 2 PECHS',
    ],
    cardTitle: 'Training that fits real life',
    cardText: 'A welcoming floor, practical guidance and access around the clock.',
    imageAlt: 'Training floor at Alltime Fitness 24/7',
    caption: 'Alltime Fitness 24/7 — Kashmir Road, PECHS',
  },
  experiences: {
    eyebrow: 'The Experience',
    index: '02',
    title: 'Two ways to train. One gym.',
    text: 'Pick the training style that fits your goals — both share the same welcoming energy, certified guidance and 24/7 access.',
    strength: {
      label: 'Strength Training',
      tag: 'Strength',
      desc: 'Build and maintain strength with focused resistance training on a well-equipped training floor.',
      tags: ['Free weights & machines', 'Strength & conditioning', 'Open 24/7'],
      cta: 'Ask About Strength Training',
      imageAlt: 'Strength training equipment at Alltime Fitness 24/7',
    },
    functional: {
      label: 'Functional Fitness',
      tag: 'Performance',
      desc: 'Build usable strength, stamina and movement quality with training focused on real-world performance.',
      tags: ['Functional strength', 'Conditioning & stamina', 'For all fitness levels'],
      cta: 'Ask About Functional Fitness',
      imageAlt: 'Functional fitness area at Alltime Fitness 24/7',
    },
    note: 'Presentation copy only. Please contact the gym directly to confirm facilities, access policies and schedules.',
  },
  training: {
    eyebrow: 'Training',
    index: '03',
    title: 'Training for the goals you actually have.',
    text: 'From building strength to improving endurance, find a direction for your training — with certified guidance available around the clock.',
    items: [
      {
        title: 'Strength Training',
        desc: 'Build and maintain strength with focused resistance training.',
        icon: 'dumbbell',
      },
      {
        title: 'Functional Fitness',
        desc: 'Train movement patterns that carry over into everyday performance.',
        icon: 'heart',
      },
      {
        title: 'Cardio & Endurance',
        desc: 'Work on stamina and cardiovascular fitness at your own pace.',
        icon: 'target',
      },
      {
        title: 'Personal Guidance',
        desc: 'Ask about guidance from certified trainers on training safely and consistently.',
        icon: 'compass',
      },
    ],
    note: 'General fitness categories — contact the gym to confirm current programs and availability.',
  },
  gallery: {
    eyebrow: 'Gallery',
    index: '04',
    title: 'Inside the training floor.',
    text: 'A look at the equipment, atmosphere and energy at Alltime Fitness 24/7.',
    note: 'Photographs from Alltime Fitness 24/7’s social media.',
    alts: [
      'Training floor at Alltime Fitness 24/7',
      'Strength equipment at the gym',
      'Free weights and training area',
      'Cardio and conditioning space',
      'Gym interior on Kashmir Road, PECHS',
      'Workout session at Alltime Fitness 24/7',
      'Training equipment on the gym floor',
      'Functional fitness area',
      'Fitness floor at Alltime Fitness 24/7',
    ],
    view: 'View image',
    close: 'Close',
    prev: 'Previous image',
    next: 'Next image',
  },
  why: {
    eyebrow: 'Why Alltime Fitness 24/7',
    index: '05',
    title: 'Built for the long run.',
    text: 'A convenient PECHS location, premium equipment, certified trainers and 24/7 access that fits your schedule.',
    items: [
      {
        title: 'Open 24 hours, 7 days a week',
        desc: 'Train whenever it suits you — early morning, late night or anytime in between.',
      },
      {
        title: 'A convenient PECHS location',
        desc: 'At Plot 54-M, Kashmir Road in Block 2 PECHS, easy to reach from across the city.',
      },
      {
        title: 'Certified trainers and premium equipment',
        desc: 'A well-equipped floor with certified trainers who keep the sessions focused.',
      },
      {
        title: 'A welcoming training atmosphere',
        desc: 'Train in a friendly, focused space with room to move and equipment for every session.',
      },
    ],
    accessValue: '24/7',
    accessLabel: 'Access Hours',
    accessCaption: 'Open 24 hours, every day of the week.',
  },
  hours: {
    eyebrow: 'Opening Hours',
    title: 'Open 24 hours, 7 days a week.',
    text: 'Round-the-clock access at Plot 54-M, Kashmir Road, Block 2 PECHS. A quick call or WhatsApp message is the fastest way to confirm before your first visit.',
  },
  contact: {
    eyebrow: 'Contact',
    index: '06',
    title: 'Come train with us.',
    text: 'Questions about membership, training or 24/7 access? Reach out on WhatsApp or give us a call.',
    labels: {
      address: 'Address',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      directions: 'Directions',
    },
    locationTitle: 'Find us on Kashmir Road, PECHS',
    locationText: 'Plot 54-M, Kashmir Road, Block 2 PECHS, Karachi. Open the listing in Google Maps for turn-by-turn directions.',
    locationChip: 'Landmark',
    form: {
      title: 'Membership Enquiry',
      subtitle: 'Fill in your details and the enquiry opens in WhatsApp, ready to send.',
      name: 'Full Name',
      namePlaceholder: 'Your name',
      phone: 'Phone Number',
      phonePlaceholder: '03XX XXXXXXX',
      interest: 'Interested In',
      interestMembership: 'Gym Membership',
      interestTraining: 'Personal Training',
      message: 'Message',
      messagePlaceholder: 'Tell us what you’re looking for (optional)',
      send: 'Send Enquiry',
      required: '* Required fields',
      errorName: 'Please enter your full name.',
      errorPhone: 'Please enter your phone number.',
      errorPhoneInvalid: 'Please enter a valid phone number.',
      errorInterest: 'Please choose an option.',
      successTitle: 'Your enquiry is ready',
      successText: 'WhatsApp should have opened with your message ready to send. If it didn’t, use the button below.',
      sendAnother: 'Send another enquiry',
      privacy: 'For this demo, your details are not stored — they are only placed into a WhatsApp message.',
    },
  },
  footer: {
    tagline: 'A 24/7 gym on Kashmir Road, Block 2 PECHS — built around showing up and getting stronger.',
    explore: 'Explore',
    contact: 'Contact',
    legal: 'About this site',
    demo: 'Independent website concept by TRIBAL³. All sample content and imagery are for demonstration purposes.',
    notAffiliated: 'Not affiliated with or authorized by Alltime Fitness 24/7.',
    credit: 'Concept & design — TRIBAL³',
  },
  whatsappMessages: {
    general: 'Hello Alltime Fitness 24/7, I found your website and would like to ask about membership.',
    strength: 'Hello Alltime Fitness 24/7, I would like to ask about strength training.',
    functional: 'Hello Alltime Fitness 24/7, I would like to ask about functional fitness training.',
    join: 'Hello Alltime Fitness 24/7, I would like to join. Could you share the available membership options?',
  },
  floatingWhatsapp: 'Chat on WhatsApp',
}

export const copy = { en }
export type Copy = typeof en

interface LanguageContextValue {
  lang: Lang
  dir: 'ltr'
  isRtl: false
  t: Copy
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement
    root.lang = 'en'
    root.dir = 'ltr'
    root.dataset.lang = 'en'
    document.title = copy.en.meta.title

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', copy.en.meta.description)
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang: 'en', dir: 'ltr', isRtl: false, t: copy.en }),
    [],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}

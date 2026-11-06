export const BUSINESS = {
  nameEn: 'ALLTIME FITNESS 24/7',
  phoneDisplay: '0330 0266329',
  phoneHref: 'tel:+923300266329',
  whatsappDisplay: '0330 0266329',
  whatsappNumber: '923300266329',
  addressEn: 'Plot 54-M, Kashmir Rd, Block 2 PECHS, Karachi, Pakistan',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Alltime+Fitness+24%2F7+Plot+54-M+Kashmir+Road+Block+2+PECHS+Karachi',
} as const

export const WHATSAPP_BASE = `https://wa.me/${BUSINESS.whatsappNumber}`

/** Build a WhatsApp deep link with a pre-filled message. */
export const wa = (message: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`

const unsplash = (id: string, width: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`

export const IMAGES = {
  hero: unsplash('1571902943202-507ec2618e8f', 2000),
  about: '/images/gym-about.jpg',
  aboutDetail: '/images/gym-gallery-05.jpg',
  strengthZone: '/images/gym-strength.jpg',
  functional: '/images/gym-functional.jpg',
  strength: unsplash('1584735935682-2f2b69dff9d2', 900),
  cardio: unsplash('1593079831268-3381b0db4a77', 900),
  goals: unsplash('1571019613454-1cb2f99b2d8b', 900),
  guidance: unsplash('1581009146145-b5ef050c2e1e', 900),
  gallery: [
    { id: '/images/gym-gallery-01.jpg', w: 1400 },
    { id: '/images/gym-gallery-02.jpg', w: 1000 },
    { id: '/images/gym-gallery-03.jpg', w: 1000 },
    { id: '/images/gym-gallery-04.jpg', w: 1000 },
    { id: '/images/gym-gallery-05.jpg', w: 1000 },
    { id: '/images/gym-gallery-06.jpg', w: 1000 },
    { id: '/images/gym-gallery-07.jpg', w: 1000 },
    { id: '/images/gym-gallery-08.jpg', w: 1000 },
    { id: '/images/gym-gallery-09.jpg', w: 1000 },
  ],
}

export const galleryImage = (id: string, _width?: number) => id

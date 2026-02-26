export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

// Web app (SignNova) - runs on subdomain e.g. app.signbridge.com
export const WEB_APP_URL = process.env.NEXT_PUBLIC_WEB_APP_URL || 'https://app.signconnect.org/signup'

export const COMPANY = {
  name: 'Sign Bridge',
  tagline: 'Eliminating communication barriers between hearing and non-hearing individuals.',
  product: 'SignNova',
  productDescription: 'Real-time sign language translation for inclusive communication.',
  logoUrl: 'https://g9kbtbs1bu.ufs.sh/f/woziFUfAWTFphaWnBtTgRo0lw2xASz4b17TFjaJQ3DWHeyGs',
} as const

// Hero background - people image (use /images/hero-bg.jpg for local)
export const HERO_BACKGROUND_IMAGE =
  process.env.NEXT_PUBLIC_HERO_BG_IMAGE ||
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=90'

export const SIGN_LANGUAGES = [
  { value: 'asl', label: 'American Sign Language (ASL)' },
  { value: 'bsl', label: 'British Sign Language (BSL)' },
  { value: 'isl', label: 'Irish Sign Language (ISL)' },
  { value: 'lsf', label: 'Langue des Signes Française (LSF)' },
  { value: 'gsl', label: 'German Sign Language (GSL)' },
] as const

export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '#problem', label: 'The Challenge' },
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#impact', label: 'Impact' },
  { href: '#team', label: 'Team' },
] as const

export const DASHBOARD_NAV_ITEMS = [
  { href: '/overview', label: 'Overview', icon: 'LayoutDashboard' },
  { href: '/dictionary', label: 'Dictionary', icon: 'BookOpen' },
  { href: '/learning', label: 'Learning Hub', icon: 'GraduationCap' },
  { href: '/translate', label: 'Translation', icon: 'Languages' },
  { href: '/settings', label: 'Settings', icon: 'Settings' },
] as const

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Tandangwe Horline',
    role: 'Data Analyst',
    bio: 'Bridging communication gaps through technology.',
    image: '/images/team/alex.jpg', // TODO: Add ufs.sh URL when available
    linkedin: 'https://linkedin.com/in/alexchen',
    github: 'https://github.com/alexchen',
    twitter: 'https://twitter.com/alexchen',
  },
  {
    id: 2,
    name: 'Anthony .',
    role: 'Coming Soon',
    bio: 'AI/ML expert in computer vision and NLP.',
    image: 'https://g9kbtbs1bu.ufs.sh/f/woziFUfAWTFpjHPWg5yG1yqe82iAr3KSlLTMOUnHPbkVwEDu',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    github: 'https://github.com/sarahjohnson',
    twitter: 'https://twitter.com/sarahjohnson',
  },
  {
    id: 3,
    name: 'Romaric Lonfonyuy',
    role: 'Head of Product and Lead Developer',
    bio: 'Accessibility-first designer and advocate.',
    image: 'https://g9kbtbs1bu.ufs.sh/f/woziFUfAWTFpkrjS5olQkiO6W3zaBMcnX9Z5f7o24hb1Uqym',
    linkedin: 'https://linkedin.com/in/michaeltorres',
    github: 'https://github.com/michaeltorres',
    twitter: 'https://twitter.com/michaeltorres',
  },
  {
    id: 4,
    name: 'Seli Aveh',
    role: 'Coming Soon',
    bio: 'Building inclusive technology solutions.',
    image: 'https://g9kbtbs1bu.ufs.sh/f/woziFUfAWTFpgMaXr6oWIT2A480Fckpi5f1tNEysvOmQ9r76',
    linkedin: 'https://linkedin.com/in/emilyrodriguez',
    github: 'https://github.com/emilyrodriguez',
    twitter: 'https://twitter.com/emilyrodriguez',
  },
  {
    id: 5,
    name: 'Jorime Clotilde',
    role: 'AI Research Lead',
    bio: 'ML researcher in gesture recognition.',
    image: 'https://g9kbtbs1bu.ufs.sh/f/woziFUfAWTFpQ3x8c1zGtjkfFV7Pw64WHpM3q9O5lxgJYKEh',
    linkedin: 'https://linkedin.com/in/davidkim',
    github: 'https://github.com/davidkim',
    twitter: 'https://twitter.com/davidkim',
  },
  {
    id: 6,
    name: 'Victoria .',
    role: 'Community Manager',
    bio: 'Connecting with Deaf communities worldwide.',
    image: 'https://g9kbtbs1bu.ufs.sh/f/woziFUfAWTFpSO9FbWNt5OD4pn36XJ9G1IWvzmafqige0Nxh',
    linkedin: 'https://linkedin.com/in/lisawang',
    github: 'https://github.com/lisawang',
    twitter: 'https://twitter.com/lisawang',
  },
] as const


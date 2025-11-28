export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

export const SIGN_LANGUAGES = [
  { value: 'asl', label: 'American Sign Language (ASL)' },
  { value: 'bsl', label: 'British Sign Language (BSL)' },
  { value: 'isl', label: 'Irish Sign Language (ISL)' },
  { value: 'lsf', label: 'Langue des Signes Française (LSF)' },
  { value: 'gsl', label: 'German Sign Language (GSL)' },
] as const

export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#team', label: 'Team' },
  { href: '#impact', label: 'Impact' },
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
    name: 'Alex Chen',
    role: 'CEO & Co-Founder',
    bio: 'Passionate about bridging communication gaps. Former accessibility engineer at major tech companies.',
    image: '/images/team/alex.jpg',
    linkedin: 'https://linkedin.com/in/alexchen',
    github: 'https://github.com/alexchen',
    twitter: 'https://twitter.com/alexchen',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'CTO & Co-Founder',
    bio: 'AI/ML expert specializing in computer vision and natural language processing. PhD in Computer Science.',
    image: '/images/team/sarah.jpg',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    github: 'https://github.com/sarahjohnson',
    twitter: 'https://twitter.com/sarahjohnson',
  },
  {
    id: 3,
    name: 'Michael Torres',
    role: 'Head of Product',
    bio: 'Product designer with 10+ years experience in accessibility-first design. Deaf community advocate.',
    image: '/images/team/michael.jpg',
    linkedin: 'https://linkedin.com/in/michaeltorres',
    github: 'https://github.com/michaeltorres',
    twitter: 'https://twitter.com/michaeltorres',
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'Lead Developer',
    bio: 'Full-stack engineer passionate about creating inclusive technology. Sign language interpreter.',
    image: '/images/team/emily.jpg',
    linkedin: 'https://linkedin.com/in/emilyrodriguez',
    github: 'https://github.com/emilyrodriguez',
    twitter: 'https://twitter.com/emilyrodriguez',
  },
  {
    id: 5,
    name: 'David Kim',
    role: 'AI Research Lead',
    bio: 'Machine learning researcher focusing on gesture recognition and 3D animation. Published author.',
    image: '/images/team/david.jpg',
    linkedin: 'https://linkedin.com/in/davidkim',
    github: 'https://github.com/davidkim',
    twitter: 'https://twitter.com/davidkim',
  },
  {
    id: 6,
    name: 'Lisa Wang',
    role: 'Community Manager',
    bio: 'Connecting with Deaf communities worldwide. Ensuring our product serves real needs authentically.',
    image: '/images/team/lisa.jpg',
    linkedin: 'https://linkedin.com/in/lisawang',
    github: 'https://github.com/lisawang',
    twitter: 'https://twitter.com/lisawang',
  },
] as const


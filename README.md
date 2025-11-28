# SignNova Web Application

A next-generation landing page and dashboard for SignNova, a revolutionary sign language translation platform that helps hearing individuals learn visual communication the way Deaf communities naturally do.

## 🚀 Features

### Landing Page
- **Hero Section**: Bold, attention-grabbing headline with animated background
- **Features Showcase**: 10+ interactive feature cards
- **How It Works**: Visual process flow with animations
- **Team Section**: Premium team member cards (6 members)
- **Impact Section**: Statistics and use cases
- **Call-to-Action**: Email signup and multiple CTAs
- **Footer**: Comprehensive links and social media

### Dashboard
- **Overview**: Key metrics, progress tracking, recent activity
- **Dictionary**: Searchable sign language dictionary with filters
- **Learning Hub**: Tutorials, practice modules, achievements
- **Real-Time Translation**: Speech/text to sign language translation
- **Settings**: Profile, preferences, accessibility options
- **Responsive Design**: Mobile-first approach with collapsible sidebar

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **State Management**: React Context + Zustand
- **Forms**: React Hook Form
- **Authentication**: Better Auth (ready for integration)

## 📦 Installation

1. Install dependencies:
```bash
npm install
# or
pnpm install
```

2. Create a `.env.local` file:
```env
MONGODB_URI=your-mongodb-connection-string
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
signnova-web/
├── app/
│   ├── (landing)/          # Landing page routes
│   ├── (auth)/             # Authentication pages
│   ├── (dashboard)/        # Dashboard pages
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── landing/            # Landing page components
│   ├── dashboard/          # Dashboard components
│   ├── ui/                 # Reusable UI components
│   ├── auth/               # Authentication components
│   └── shared/             # Shared components
├── lib/                    # Utilities and API client
├── hooks/                  # Custom React hooks
├── contexts/               # React contexts
└── types/                  # TypeScript type definitions
```

## 🎨 Design System

### Colors
- **Primary**: `#38E078` (vibrant green)
- **Secondary**: `#FFFFFF` (pure white)
- Background gradients and accents derive from these colors

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights for emphasis
- **Body**: 16px minimum for readability

## 🔐 Authentication

The application uses Better Auth for authentication. The auth context is set up and ready for backend integration.

### Protected Routes
- Dashboard routes (`/overview`, `/dictionary`, etc.) require authentication
- Middleware automatically redirects unauthenticated users to `/login`

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

The dashboard sidebar collapses to icons on mobile devices.

## 🚧 Next Steps

1. **Backend Integration**: Connect to Node.js backend API
2. **Better Auth Setup**: Configure MongoDB adapter and social providers
3. **3D Avatar Integration**: Integrate 3D avatar rendering engine
4. **Real-time Features**: WebSocket integration for live translation
5. **Data Fetching**: Replace mock data with real API calls
6. **Image Optimization**: Add team member photos and assets
7. **SEO Optimization**: Complete meta tags and structured data
8. **Testing**: Add unit and integration tests

## 📝 Notes

- All components are built with accessibility in mind (WCAG AA compliant)
- Keyboard navigation is supported throughout
- Loading states and error boundaries are implemented
- Mock data is used for demonstration - replace with real API calls

## 🤝 Contributing

This is a private project. For questions or contributions, please contact the SignNova team.

## 📄 License

Copyright © 2024 SignNova. All rights reserved.

---

Built with ❤️ for Deaf and hearing communities


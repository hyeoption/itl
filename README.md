# ITL CO., LTD. - Professional Logistics Website

A modern, bilingual (English/Korean) logistics company website built with Next.js, featuring responsive design and professional UI components.

## 🌟 Features

### 🌍 Internationalization
- **Bilingual Support**: English and Korean language toggle
- **URL-based Language Routing**: `/?lang=ko` for Korean, `/` for English
- **Persistent Language Selection**: Maintains language across page navigation
- **No Flash Loading**: Instant language detection without English flash

### 📱 Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Interactive Elements**: Hover effects, smooth transitions
- **Accessible**: Proper ARIA labels and keyboard navigation

### 🏢 Business Pages
- **Landing Page**: Hero section, services overview, contact form
- **About Page**: Company introduction, history timeline, management philosophy
- **Services Page**: Detailed service offerings and capabilities
- **Company History**: Interactive timeline of key milestones

### 🎨 Design System
- **Color Scheme**: Professional dark blue primary (#1e3a8a)
- **Typography**: Inter for English, Noto Sans KR for Korean
- **Components**: Reusable UI components with consistent styling
- **Icons**: Lucide React icon library

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ITL
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
ITL/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── globals.css           # Global styles
│   ├── landing.tsx           # Landing page component
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page (renders landing)
├── public/
│   └── images/               # Static images
│       ├── logo_itl.jpg
│       ├── container-ship-aerial.jpg
│       └── ...
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## 🌐 Pages & Features

### Landing Page (`/`)
- **Hero Section**: Company introduction with slideshow
- **Services Overview**: Core logistics services
- **Network Coverage**: Global reach information
- **Contact Form**: Direct inquiry submission
- **Company Stats**: Experience and capabilities

### About Page (`/about`)
- **Company Introduction**: Mission and vision
- **Company History**: Timeline of key milestones
  - 2021.11.15: Company establishment
  - 2022.02.23: International forwarding license
  - 2023.01.03: Freight forwarding registration
  - 2023.01.05: Industry association membership
  - 2023.02.08: Trade association membership
- **Management Philosophy**: Interactive Venn diagram
- **Core Strengths**: Expertise, reliability, innovation

### Services Page (`/services`)
- **Ocean Freight**: FCL/LCL services, cross-trade
- **Project Cargo**: Specialized handling and monitoring
- **Railway Services**: Eurasia rail connections (TCR, TSR, TMGR)

## 🛠 Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library

### Fonts
- **Inter**: Primary font for English content
- **Noto Sans KR**: Korean font with multiple weights

### Development Tools
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: Browser compatibility

## 🌏 Language System

### URL Structure
- English: `/`, `/about`, `/services`
- Korean: `/?lang=ko`, `/about?lang=ko`, `/services?lang=ko`

### Language Detection
- URL parameter takes priority
- Automatic language initialization
- No flash between languages

### Navigation
- Language-aware routing
- Clickable logo returns to home
- Persistent language across pages

## 🎨 Design Guidelines

### Colors
- **Primary**: Dark Blue (#1e3a8a, #1e40af)
- **Accent**: Red (#dc2626) for CTA buttons
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headers**: Bold, professional styling
- **Body Text**: Readable line heights and spacing
- **CTA Text**: Semibold for emphasis

### Components
- **Buttons**: Consistent padding and hover states
- **Cards**: Subtle borders and shadows
- **Navigation**: Sticky header with backdrop blur

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `.next` folder and static assets
3. Configure server to serve the application

## 📞 Company Information

**ITL CO., LTD.**
- **Email**: itl@itlshipping.com
- **Phone**: +82-31-911-5612~4
- **Fax**: +82-31-902-8130
- **Hours**: Mon-Fri 09:00-18:00 KST

### Services
- International logistics and forwarding
- Ocean freight
- Project cargo handling
- Eurasia railway transportation
- Customs clearance and documentation

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Utilities
npm run type-check   # TypeScript type checking
```

## 📝 License

© 2026 ITL Co., Ltd. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ for ITL CO., LTD.**
# HomeTown Marketing Agency Website

A modern, professional website for HomeTown Marketing Agency, a Kansas City-based marketing firm focused on helping small businesses grow.

## 🎯 Project Overview

HomeTown is a marketing agency that specializes in helping Kansas City small businesses overcome their marketing challenges. This website is designed to showcase our services, build trust with potential clients, and convert visitors into consultations.

### Key Features
- **Professional Design**: Clean, modern aesthetic inspired by Aime Leon Dore/Masters Golf Tournament
- **Local Focus**: Strong emphasis on Kansas City roots and community
- **Pain Point Solutions**: Services presented in a problem-solution-outcome format
- **Mobile-First**: Fully responsive design for all devices
- **Performance Optimized**: Built with Next.js for fast loading and SEO

## 🎨 Design System

### Colors
- **Primary Green**: #006847 (HomeTown brand color)
- **Gold Accent**: #D4AF37 (for hover states and highlights)
- **Charcoal**: #2C2C2C (for footer and dark elements)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Spacing
- Generous whitespace with 8px grid system
- Section padding: 80px (py-20)
- Container max-width: 1280px

## 🚀 Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **Deployment**: Optimized for Vercel deployment

## 📁 Project Structure

```
HomeTown2/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # Reusable components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer component
│   ├── HeroSection.tsx    # Home page hero
│   ├── ServicesPreview.tsx # Services overview
│   ├── TestimonialsStats.tsx # Stats and testimonials
│   ├── AboutHero.tsx      # About page hero
│   ├── OurStory.tsx       # Company story
│   ├── OurValues.tsx      # Company values
│   ├── TeamSection.tsx    # Team information
│   ├── ServicesHero.tsx   # Services page hero
│   ├── ServiceDetails.tsx # Detailed service info
│   ├── ServicesCTA.tsx    # Services call-to-action
│   ├── ContactHero.tsx    # Contact page hero
│   ├── ContactForm.tsx    # Contact form
│   └── ContactInfo.tsx    # Contact information
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd HomeTown2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages & Components

### Home Page (`/`)
- Hero section with compelling headline and CTA
- Services preview with 4 key offerings
- Testimonials and KC business statistics
- Pain point highlighting and solutions

### About Page (`/about`)
- Company story and mission
- Team information with local photos
- Company values (Community, Integrity, Growth)
- Kansas City roots and local focus

### Services Page (`/services`)
- Detailed service breakdowns
- Pain Point → Solution → Outcome format
- Feature lists for each service
- Call-to-action for consultation

### Contact Page (`/contact`)
- Contact form with required fields
- Calendly integration option
- Office location and contact information
- Multiple contact methods

## 🎯 Key Components

### Navigation
- Sticky header with HomeTown branding
- Responsive mobile menu
- CTA button for consultation booking

### Hero Sections
- Full-screen hero with background images
- Compelling headlines and subtext
- Clear call-to-action buttons

### Service Cards
- Icon-based service representation
- Pain point identification
- Solution presentation
- Outcome highlighting

### Contact Form
- Required fields: Name, Business, Email, Phone, Notes
- Form validation and submission handling
- Alternative Calendly booking option

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  hometown: {
    green: '#006847',
    'green-light': '#007a5a',
    'green-dark': '#005a3a',
    gold: '#D4AF37',
    // ... other colors
  }
}
```

### Content
- Update text content in component files
- Replace placeholder images with actual photos
- Modify contact information and office details

### Styling
- Custom CSS classes in `globals.css`
- Component-specific styles in individual files
- Tailwind utility classes for rapid development

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with zero configuration

### Other Platforms
- Build the project: `npm run build`
- Deploy the `out` directory to your hosting provider

## 📊 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for fast loading
- **Responsive Images**: Automatic responsive image generation
- **Lazy Loading**: Images and components load as needed

## 🔍 SEO Features

- **Meta Tags**: Proper title and description tags
- **Semantic HTML**: Proper heading hierarchy and structure
- **Fast Loading**: Optimized for Core Web Vitals
- **Mobile Friendly**: Responsive design for all devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to HomeTown Marketing Agency.

## 📞 Support

For questions or support, contact:
- **Email**: hello@hometownkc.com
- **Phone**: (816) 555-1234
- **Office**: 1234 Main Street, Kansas City, MO 64111

---

**Built with ❤️ for Kansas City small businesses**

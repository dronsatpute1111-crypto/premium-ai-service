# Premium AI Service Website

A modern, premium AI service website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern, Apple-like design
- 🎨 Beautiful animations with Framer Motion
- 📱 Fully responsive design
- 🎯 High-performance with Next.js
- 💨 Smooth scrolling and interactions
- 🌙 Dark mode optimized
- ⚡ Fast loading speeds

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dronsatpute1111-crypto/premium-ai-service.git
cd premium-ai-service
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features section
│   ├── Pricing.tsx         # Pricing section
│   ├── CTA.tsx             # Call-to-action
│   └── Footer.tsx          # Footer
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Project dependencies
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```js
colors: {
  primary: '#000000',
  secondary: '#FFFFFF',
  accent: '#0071E3',
  dark: '#1D1D1D',
  light: '#F5F5F7',
}
```

### Content

- Update the company name in `components/Navbar.tsx`
- Modify features in `components/Features.tsx`
- Adjust pricing plans in `components/Pricing.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- Netlify
- AWS Amplify
- DigitalOcean App Platform

## License

MIT License - feel free to use this project for personal and commercial purposes.

## Support

For questions or issues, please open a GitHub issue.

# Praveen Stephen D - Portfolio Website

[![GitHub Repo](https://img.shields.io/github/stars/Stephen13-05/Stephen-Portfolio?style=social)](https://github.com/Stephen13-05/Stephen-Portfolio)

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark/light theme support, and particle effects.

**Live Demo:** [View Portfolio](https://github.com/Stephen13-05/Stephen-Portfolio)

## 🚀 Features

- **Responsive Design**: Optimized for both mobile and desktop
- **Dark/Light Theme**: Smooth animated theme transitions
- **Interactive Animations**: Framer Motion for smooth page transitions
- **Particle Effects**: Interactive particle background on homepage
- **Modern UI**: Clean, professional design with hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **Particles**: React TSParticles
- **Icons**: Lucide React
- **Build Tool**: Vite
- **UI Components**: Custom shadcn/ui components

## 📱 Pages

- **Home**: Hero section with particle background and CTA buttons
- **About**: Personal information and education timeline
- **Projects**: Interactive project cards with tech stack and links
- **Experience**: Professional timeline with role descriptions
- **Skills**: Skill categories with progress bars and certifications
- **Contact**: Contact information, social links, and resume download

## 🎨 Design Features

- Smooth page transitions
- Interactive hover effects
- Animated skill progress bars
- Timeline components for education/experience
- Gradient backgrounds and glass effects
- Responsive grid layouts
- Custom theme system

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Stephen13-05/Stephen-Portfolio.git
cd Stephen-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navigation.tsx  # Navigation bar
│   └── ParticleBackground.tsx
├── contexts/           # React contexts
│   └── ThemeContext.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
└── styles/             # Global styles
```

## 🎯 Customization

### Updating Personal Information

1. **Contact Information**: Update contact details in `src/pages/Contact.tsx`
2. **Projects**: Modify project data in `src/pages/Projects.tsx`
3. **Experience**: Update work experience in `src/pages/Experience.tsx`
4. **Skills**: Modify skills and certifications in `src/pages/Skills.tsx`
5. **About**: Update personal info and education in `src/pages/About.tsx`

### Theme Customization

- Colors and design tokens are defined in `src/index.css`
- Tailwind configuration in `tailwind.config.ts`
- Custom animations and utilities in the CSS files

### Adding New Pages

1. Create new component in `src/pages/`
2. Add route to `src/App.tsx`
3. Update navigation in `src/components/Navigation.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- Email: praveenstephend@gmail.com
- GitHub: [github.com/Stephen13-05](https://github.com/Stephen13-05)
- LinkedIn: [linkedin.com/in/praveen-stephen-d](https://linkedin.com/in/praveen-stephen-d)

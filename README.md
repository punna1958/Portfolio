# Puneet Yadav - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with dark mode support and a timeline-based experience section.

## 🚀 Features

- **Responsive Design**: Optimized for all screen sizes
- **Dark/Light Mode**: Automatic theme switching based on system preferences
- **Interactive Timeline**: Professional experience displayed in a LinkedIn-style timeline
- **Company Links**: Direct links to companies' websites and LinkedIn profiles
- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Custom Fonts**: Uses Geist Font family for modern typography
- **Performance Optimized**: Fast loading and optimal image handling

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 📦 Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
└── public/
    ├── profile.jpg
    ├── favicon.ico
    └── other assets...
```

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/punna1958/portfolio.git
```

2. **Install dependencies**
```bash
cd portfolio
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 🎨 Customization

### Colors
The project uses a custom color scheme with royal blue accents. Colors can be modified in:
```css
/* globals.css */
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #111111;
    --foreground: #ededed;
  }
}
```

### Content
Update your information in:
- `components/Hero.tsx` for personal info
- `components/Experience.tsx` for work history
- `components/Projects.tsx` for project showcase
- `components/Skills.tsx` for technical skills

## 🌐 Deployment

The site is deployed on Vercel. For deployment:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Follow the deployment steps
4. Your site will be live!

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Optimized images using Next.js Image component
- Lazy loading of components
- Minimized CSS with Tailwind
- Efficient font loading with next/font

## 🔗 Links

- [Live Demo](https://madewithPuneet.com)
- [GitHub Repository](https://github.com/punna1958/portfolio)
- [LinkedIn](https://www.linkedin.com/in/puneet-yadav-247303265/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Puneet Yadav**
- LinkedIn: [@puneet-yadav-247303265](https://www.linkedin.com/in/puneet-yadav-247303265/)
- GitHub: [@punna1958](https://github.com/punna1958)
- Email: punitips@yahoo.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/punna1958/portfolio/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🌟 Show your support

Give a ⭐️ if you like this project!

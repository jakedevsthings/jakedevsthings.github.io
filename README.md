# Jacob Siau - Portfolio Website

A modern, minimal, dark-themed portfolio website built with Vite, React, and Tailwind CSS. All content is sourced directly from my resume to ensure accuracy and consistency.

## 🚀 Live Site

Visit the live portfolio at: [https://jakedevsthings.github.io/](https://jakedevsthings.github.io/)

## 🛠️ Tech Stack

- **Frontend**: Modern React with responsive design
- **Styling**: Component-based CSS framework
- **Animations**: Smooth transitions and interactions
- **Build**: Optimized static site generation
- **Deployment**: Automated CI/CD pipeline

## 🎨 Design Features

- **Dark Theme**: Modern dark design inspired by Modern websites
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth transitions and scroll-based animations
- **Accessibility**: Semantic HTML and keyboard navigation
- **Performance**: Optimized for fast loading and smooth interactions

```

## 🚀 Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/jakedevsthings/jakedevsthings.github.io.git
   cd jakedevsthings.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) to view in browser.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

### Manual Deployment Setup

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Set source to "GitHub Actions"

2. **Configure Base Path**
   - The `vite.config.js` is already configured with the correct base path
   - Routes use basename for GitHub Pages compatibility

3. **Deploy**
   - Push to main branch triggers automatic deployment
   - Or manually run the "Deploy to GitHub Pages" action

### GitHub Actions Workflow

The deployment workflow (`.github/workflows/deploy.yml`):
- Triggers on push to main branch
- Installs dependencies and builds the project
- Deploys to GitHub Pages automatically

## 📋 Deployment Checklist

- [x] **Add resume PDF**: ✅ `SIAU_JACOB_RESUME_2025_06_01.pdf` added to `public/` directory with working download functionality
- [x] **Configure download links**: ✅ Fixed download paths for GitHub Pages compatibility
- [ ] Update contact information in `src/data/portfolio.js`
- [ ] Test all routes and links
- [ ] Verify responsive design on mobile
- [ ] Check that animations work smoothly
- [ ] Validate metadata and SEO tags

## 🔧 Customization

### Adding New Sections

1. Create new page component in `src/pages/`
2. Add route to `src/App.jsx`
3. Add navigation item to `src/components/Layout.jsx`
4. Update content in `src/data/portfolio.js`

### Styling Customization

- Colors and themes are defined in `src/index.css`
- Uses CSS custom properties for consistent theming
- Tailwind utilities for component styling
- Framer Motion for animations

### Content Updates

All content updates should be made in `src/data/portfolio.js` to maintain consistency and make future updates easier.

## 🤝 Contributing

This is a personal portfolio site, but if you spot bugs or have suggestions:

1. Open an issue describing the problem or suggestion
2. Fork the repository and create a feature branch
3. Make your changes and test thoroughly
4. Submit a pull request with a clear description

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

Jacob Siau - [jacob.e.siau@gmail.com](mailto:jacob.e.siau@gmail.com)

LinkedIn: [linkedin.com/in/jacob-siau](https://linkedin.com/in/jacob-siau)

---

Built with ❤️ using React, Tailwind CSS, and modern web technologies.

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

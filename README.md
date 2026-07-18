# John Doe - Portfolio Website

A responsive personal portfolio website built with HTML, CSS, and vanilla JavaScript. Showcases projects, skills, and provides a way for visitors to get in touch.

## 🔗 Live Demo

[View Live Site](https://<your-username>.github.io/<repository-name>/)

## ✨ Features

- **Responsive Navigation** — Sticky navbar with a mobile-friendly hamburger menu
- **Hero Section** — Introduction with a call-to-action button that smooth-scrolls to Projects
- **About Section** — Overview with highlighted skill cards (Frontend Development, Responsive Design, User Experience)
- **Projects Showcase** — Grid layout of featured projects with hover animations
- **Skills Section** — Animated progress bars that trigger on scroll
- **Contact Form** — Client-side validation with success/error messaging
- **Scroll Animations** — Project cards and skill bars animate into view using the Intersection Observer API
- **Active Nav Highlighting** — Navigation links highlight based on scroll position
- **Fully Responsive** — Optimized layouts for tablet and mobile screens

## 🛠️ Built With

- **HTML5** — Semantic markup
- **CSS3** — Custom properties (variables), Flexbox, Grid, media queries
- **JavaScript (Vanilla)** — DOM manipulation, Intersection Observer API, form handling

## 📁 Project Structure

```
├── index.html      # Main HTML structure
├── styles.css       # Styling and responsive design
├── script.js         # Interactivity and animations
└── README.md      # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Just a modern web browser — no build tools or dependencies required.

### Running Locally

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   ```
2. Navigate into the project folder
   ```bash
   cd <repository-name>
   ```
3. Open `index.html` in your browser, or serve it locally:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using VS Code Live Server extension
   ```

## 🌐 Deployment

This site is deployed with **GitHub Pages**:

1. Push your code to the `main` branch
2. Go to repository **Settings → Pages**
3. Under **Source**, select the `main` branch and save
4. Your site will be live at `https://<your-username>.github.io/<repository-name>/`

## 📝 Customization

To personalize this portfolio for yourself:

- Update the name, title, and bio in `index.html`
- Replace placeholder project images (`via.placeholder.com`) with real screenshots
- Update project links in the `.project-link` anchor tags
- Adjust skill percentages in the `.skill-progress` elements
- Update social media links in the footer
- Customize colors via the CSS variables in `:root` in `styles.css`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).


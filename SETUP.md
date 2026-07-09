# Portfolio Setup & Customization Guide

Welcome to your modern portfolio! This guide will help you customize every aspect of your portfolio to make it uniquely yours.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── html/
│   │   └── index.html          # Main HTML file
│   ├── styles/
│   │   └── main.css            # All styles (organized by section)
│   ├── scripts/
│   │   └── main.js             # JavaScript (theme, forms, animations)
│   └── assets/
│       └── images/             # Place your images here
├── index.html                  # Root file (points to src/html/index.html)
├── package.json
└── SETUP.md                    # This file
```

## 🎨 Quick Customization Guide

### 1. Personal Information

**File:** `src/html/index.html`

Replace these placeholders:
- **Line 43:** Change `"Hi, I'm <span class="highlight">Your Name</span>"` to your name
- **Line 44:** Update graduation info if needed (already says "Computer Science Graduate from Jimma University")
- **Line 179:** Change `"Your Name"` in footer to your name
- **Line 47:** Update the hero description about yourself

### 2. Add Your Profile Image

**File:** `src/html/index.html` (Line 57)

```html
<img src="../assets/images/profile.jpg" alt="Profile picture" id="profileImage">
```

**Steps:**
1. Add your profile image to `src/assets/images/` folder
2. Name it `profile.jpg` (or rename the HTML reference)
3. For best results: use a square image, 300x300px minimum, PNG or JPG format

### 3. Update Project Information

**File:** `src/html/index.html` (Lines 110-160)

For each project card, update:
- **Project Title:** Change "Project Name One", "Project Name Two", etc.
- **Description:** Write what your project does
- **Technologies:** Update the tags (React, Node.js, etc.)
- **GitHub Link:** Replace `https://github.com/yourusername/project1` with your actual GitHub URL
- **Live Demo Link:** Replace `https://project1-live-demo.com` with your project's live URL
- **Project Image:** Each project has an image placeholder

### 4. Add Project Images

**Files:** `src/assets/images/project1.jpg`, `project2.jpg`, `project3.jpg`

**Steps:**
1. Generate or take screenshots of your projects
2. Place them in `src/assets/images/` folder
3. Recommended size: 800x600px or similar aspect ratio
4. The images will automatically scale to fit

**NOTE:** The Live button (🚀 icon) is already added next to the GitHub button!

### 5. Update Contact Information

**File:** `src/html/index.html` (Lines 164-177)

Replace:
- **Email:** `your.email@example.com` → Your actual email
- **LinkedIn:** `https://linkedin.com/in/yourprofile` → Your LinkedIn URL
- **GitHub:** `https://github.com/yourusername` → Your GitHub profile
- **Twitter:** `https://twitter.com/yourhandle` → Your Twitter handle

### 6. Customize Skills

**File:** `src/html/index.html` (Lines 104-111)

Edit or add skills in the About section:
```html
<div class="skill-tag">JavaScript</div>
<div class="skill-tag">React</div>
<!-- Add more skills as needed -->
```

## 🎯 Advanced Customization

### Change Color Scheme

**File:** `src/styles/main.css` (Lines 7-20)

```css
:root {
    --primary: #6366f1;           /* Main color - currently Indigo */
    --secondary: #ec4899;         /* Accent color - currently Pink */
    --accent: #14b8a6;            /* Additional accent - currently Teal */
}
```

**Popular Color Combinations:**
- **Blue & Purple:** primary: `#3b82f6`, secondary: `#8b5cf6`
- **Green & Teal:** primary: `#10b981`, secondary: `#14b8a6`
- **Orange & Red:** primary: `#f97316`, secondary: `#ef4444`
- **Purple & Pink:** primary: `#a855f7`, secondary: `#ec4899`

### Customize Font Size

**File:** `src/styles/main.css` (Lines 83-88)

Adjust the heading sizes:
```css
h1 { font-size: 3rem; }      /* Hero title */
h2 { font-size: 2.25rem; }   /* Section titles */
h3 { font-size: 1.5rem; }    /* Project titles */
```

### Modify Spacing

**File:** `src/styles/main.css` (Lines 21-33)

Adjust the `--spacing-*` variables to make sections more/less compact:
```css
--spacing-md: 1rem;      /* Medium spacing */
--spacing-lg: 1.5rem;    /* Large spacing */
--spacing-xl: 2rem;      /* Extra large spacing */
```

### Add More Projects

**File:** `src/html/index.html` (Add after line 156)

Copy this template:
```html
<div class="project-card">
    <div class="project-image">
        <img src="../assets/images/project4.jpg" alt="Project 4" id="project4Image">
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Your project description here.</p>
        <div class="project-tags">
            <span class="tag">Technology1</span>
            <span class="tag">Technology2</span>
        </div>
        <div class="project-links">
            <a href="https://github.com/yourusername/project" class="link-btn github-btn" target="_blank">
                <span class="icon">🔗</span> GitHub
            </a>
            <a href="https://your-live-url.com" class="link-btn live-btn" target="_blank">
                <span class="icon">🚀</span> Live
            </a>
        </div>
    </div>
</div>
```

## 🌓 Features Included

✅ **Dark/Light Theme** - Click the sun/moon icon in the navbar
✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
✅ **Smooth Animations** - Hover effects and scroll animations
✅ **Modern Design** - Clean, professional aesthetic
✅ **Form Handling** - Contact form ready (integrate with your backend)
✅ **GitHub & Live Buttons** - Every project has both links
✅ **Sticky Navigation** - Easy access to all sections

## 📋 Image References (Where to Add Pictures)

### Profile Image
- **Location in HTML:** `src/html/index.html` line 57
- **Folder:** `src/assets/images/`
- **Filename:** `profile.jpg`
- **Size:** 300x300px (square)
- **Format:** JPG or PNG

### Project Images
- **Location in HTML:** 
  - `src/html/index.html` line 120 (project1)
  - `src/html/index.html` line 140 (project2)
  - `src/html/index.html` line 160 (project3)
- **Folder:** `src/assets/images/`
- **Filenames:** `project1.jpg`, `project2.jpg`, `project3.jpg`
- **Size:** 800x600px (or similar aspect ratio)
- **Format:** JPG or PNG

## 🚀 Deployment

### Option 1: Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select `main` branch and `/ (root)` folder
4. Save

### Option 3: Other Hosting
Use any static hosting service (Netlify, Firebase Hosting, etc.)

## 📞 Contact Form Integration

The contact form is set up but doesn't send emails yet. To enable it:

**Option 1: Using Formspree (easiest)**
1. Visit https://formspree.io
2. Create an account and get your form endpoint
3. In `src/scripts/main.js`, update the form submission to send data to Formspree

**Option 2: Using your own backend**
1. Set up a backend endpoint
2. Update `src/scripts/main.js` to send data to your endpoint

**Option 3: Using email service**
- Mailgun, SendGrid, or similar services

## ✨ Tips for Success

1. **Add high-quality project images** - This makes the biggest visual difference
2. **Write compelling project descriptions** - Explain the problem and solution
3. **Keep contact info updated** - Make it easy for recruiters to reach you
4. **Use the Live buttons** - Link to working demos of your projects
5. **Update regularly** - Add new projects as you build them
6. **Customize colors** - Make it match your personal brand

## 🐛 Troubleshooting

**Images not showing?**
- Check the file paths in HTML
- Ensure images are in `src/assets/images/` folder
- Check browser console for errors (F12)

**Theme not switching?**
- Clear browser cache
- Check JavaScript console for errors

**Form not working?**
- Add backend integration (see Contact Form Integration above)
- Check browser console for errors

## 📝 Additional Resources

- **Colors:** https://colorhunt.co
- **Images:** https://unsplash.com, https://pexels.com
- **Icons:** Built-in emoji icons (can replace with Font Awesome)
- **Fonts:** System fonts (can add Google Fonts if desired)

---

**Need help?** Review the inline comments in the HTML, CSS, and JavaScript files for detailed explanations of each section.

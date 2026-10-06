# GV3D Print — GitHub Pages Website

A responsive static commercial website for GV3D Print.

## Publish on GitHub Pages

1. Create a GitHub account if you don't already have one.
2. Create a **public repository** named:
   `gv3dprint.github.io`
   (The repository name must match your GitHub username if you want the root URL.)
3. Upload `index.html`, `style.css`, `script.js`, and the `assets` folder.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select `main` and `/ (root)`, then Save.
7. Your website will appear at:
   `https://YOUR-GITHUB-USERNAME.github.io/`

## Before publishing

Open `script.js` and change:

`const WHATSAPP_NUMBER = "919XXXXXXXXX";`

to your real WhatsApp number using country code and digits only.

Example:
`const WHATSAPP_NUMBER = "919876543210";`

Also replace the sample product names, descriptions and prices in `index.html`.

## Images

The supplied version uses lightweight CSS product visuals so it works immediately.
For a real store, replace each `.product-image` block with your product photos.

## Important

GitHub Pages hosts the website but does not provide:
- payment processing
- shopping cart/database
- stock management
- order fulfilment
- domain ownership

For a small starting business, WhatsApp + UPI/payment link + GitHub Pages is a simple low-cost setup.

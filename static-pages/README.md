# React + Vite

This project serves a static page. Specifically, a resume that serves the client a couple static assets.

# Deploy a React JS App from a Subdirectory to GitHub Pages
Visit the page [here].(https://cesardgm.github.io/react19/)

## Prerequisites
- Node.js (v18+ recommended) and npm
- Git (v2.34.1+)
- A GitHub account
- A React app (created with Vite, Created React App, etc.)

## Step 1: Project Setup
### 1.1 Repository Structure
Assume the project has this structure:
```
react19/  
├── static-pages/    # Your React app's source code  
│   ├── src/  
│   ├── public/  
│   ├── vite.config.js  
│   └── ...  
├── other-projects/  # Optional: Other projects in the repo  
└── README.md  
```

### 1.2 Initialize Git (if not done)
```
cd react19  
git init  
git remote add origin git@github.com:{username}/react19.git  
```

## Step 2: Configure Vite
### 2.1 Update `vite.config.js`
Modify the build output directory to target the `static-pages` folder
and set the `base` for asset paths:
```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../static-pages-outDir', // Output to parent's `static-pages-outDir` folder
    emptyOutDir: true,         // Clear old files before building
    assetsDir: "assets" // we won't use canonical `public` folder to serve static assets
  },
  base: '/react19/', // Match your GitHub Pages subpath
});
```

**Why?**
- `outDir: "../static-pages-outDir"` ensures builds go to the `static-pages-outDir` folder.
- `base: "/react19/"` aligns with your GitHub Pages URL (`https://{username}.github.io/react19`).

## Step 3: Configure `package.json`
### 3.1 Add `homepage` and Deployment scripts
```
{
  "name": "react19",
  "version": "1.0.0",
  "homepage": "https://{username}.github.io/react19",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d ../static-pages-outDir",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "gh-pages": "^6.1.0",
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.2.1"
  }
}
```

**Key Changes:**
- `homepage`: Matches your GitHub Pages URL.
- `deploy`: Pushes the `static-pages` folder to the `gh-pages` branch.

## Step 4: Deploy to GitHub Pages
### 4.1 Install `gh-pages`
```
npm install gh-pages --save-dev  
```

### 4.2 Build and Deploy
```
npm run build && npm run deploy  
```

### 4.3 Configure GitHub Pages
1. Go to **Repository Settings > Pages**.
2. Set the **Source** to the `gh-pages` branch and root folder.
3. Save.

**Your app is now live at**:
`https://{username}.github.io/react19`

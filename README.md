# Vitannis - Fiduciary Insurance Advisory

This project is a high-end insurance advisory web application built with React, Vite, and Tailwind CSS.

## Deployment to Netlify

To deploy this site to Netlify via GitHub, follow these steps:

1. **Push to GitHub**: Ensure all files (including `package.json`, `vite.config.ts`, `index.html`, and the `src` files) are pushed to your GitHub repository.
2. **Connect to Netlify**:
   - Log in to [Netlify](https://www.netlify.com/).
   - Click **"Add new site"** > **"Import an existing project"**.
   - Select **GitHub** and authorize Netlify to access your repository.
   - Select the repository for this project.
3. **Configure Build Settings**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. **Environment Variables**:
   - If you are using the Gemini AI features, add your `GEMINI_API_KEY` in the Netlify dashboard under **Site settings** > **Environment variables**.
5. **Deploy**: Click **"Deploy site"**.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `index.html`: Entry point.
- `index.tsx`: React mounting point.
- `App.tsx`: Main application component.
- `pages/`: Individual page components.
- `components/`: Reusable UI components.
- `index.css`: Global styles and Tailwind configuration.

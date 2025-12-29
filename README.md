# Chitra Raman Website

A devotional storytelling website showcasing handmade doll depictions of Vaishnavite culture, including Tiruppavai, Varanam Ayiram, Divya Desam stories, and festival scenes.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository or extract the files
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deployment to Vercel

### Option 1: Git-based Deployment (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will auto-detect Next.js and configure settings
5. Click "Deploy"

### Option 2: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Run in project directory:
```bash
vercel
```

3. Follow the prompts to deploy

## Project Structure

```
chitra-raman-website/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── creations/
│   │   ├── felicitation/
│   │   ├── services/
│   │   ├── videos/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ContactForm.tsx
│   │   ├── FilterButtons.tsx
│   │   ├── Footer.tsx
│   │   ├── GalleryCard.tsx
│   │   ├── Navigation.tsx
│   │   ├── SectionTitle.tsx
│   │   └── VideoCard.tsx
│   └── data/
│       ├── awards.ts
│       ├── gallery.ts
│       ├── services.ts
│       └── videos.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Pages

- **Home** (`/`) - Hero section, featured series, featured videos
- **About** (`/about`) - Bio, journey, milestones, what she creates
- **Creations** (`/creations`) - Gallery with category filters
- **Videos** (`/videos`) - All YouTube videos with category filters
- **Felicitation** (`/felicitation`) - Awards and media features
- **Services** (`/services`) - Available services and how to engage
- **Contact** (`/contact`) - Contact form and information

## Customization

### Adding New Videos

Edit `src/data/videos.ts` and add new video objects to the `videos` array.

### Adding Gallery Items

Edit `src/data/gallery.ts` and add new items to the `galleryItems` array.

### Updating Content

Most content is directly in the page files under `src/app/`. Edit the respective `page.tsx` files to update content.

### Changing Colors

Edit `tailwind.config.js` to modify the color palette. The main colors are:
- `saffron` - Orange tones
- `maroon` - Deep red tones
- `cream` - Warm neutral tones
- `temple` - Gold/copper accent colors

## Contact

- **Email**: chitraraman2008@gmail.com
- **YouTube**: [@chitraraman2008](https://www.youtube.com/@chitraraman2008)
- **Location**: Mumbai, India

## License

All rights reserved © 2025 Chitra Raman

# Uniserved Minimal

A minimal Next.js project with the OEM Services page as the home page.

## Features

- Minimal dependencies (Next.js, React, Tailwind CSS, Lucide Icons, QR Code)
- Same styling guidelines as the original project
- Services page as the home page
- No header/footer for a clean, focused experience

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
uniserved_minimal/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Minimal layout without header/footer
│   │   ├── page.tsx        # Home page (services page content)
│   │   └── globals.css     # Same styling as original
│   └── components/
│       └── oem-service-lifecycle-section.tsx
├── public/
│   ├── oem-collage_02.png
│   ├── framework-oems.svg
│   └── framework-oems-mobile.svg
└── package.json
```

## Dependencies

- **next**: Next.js framework
- **react**: React library
- **lucide-react**: Icons
- **qrcode.react**: QR code generation
- **tailwindcss**: Styling
- **tw-animate-css**: Animation utilities


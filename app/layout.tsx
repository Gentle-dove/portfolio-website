// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
    import '@fortawesome/fontawesome-svg-core/styles.css'; // Import Font Awesome CSS
    config.autoAddCss = false;

export const metadata = {
  title: 'RoyalDev Portfolio',
  description: 'Portfolio of Alozie Royal Chiagozie — Frontend Developer',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}

import React from 'react';
import { Signika } from 'next/font/google';
const signika = Signika({ subsets: ['latin'] });
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='en'>
        <title>N-A-T-G-B</title>
        <body className={signika.className}>
          {children}
        </body>
      </html>
    </>
  );
}

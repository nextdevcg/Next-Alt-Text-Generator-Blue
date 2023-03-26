import React from 'react';
import { Signika } from 'next/font/google';
const signika = Signika({ subsets: ['latin'] });
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='en'>
        <head>
          <title>N-A-T-G-B</title>
          <meta name="application-name" content="Next-Alt-Text-Generator-Blue" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Next-Alt-Text-Generator-Blue" />
          <meta name="description" content="Generate Alt Texts For Multiple Images" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />
          
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />
          
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://next-alt-text-generator-blue.vercel.app/" />
          <meta name="twitter:title" content="Next-Alt-Text-Generator-Blue" />
          <meta name="twitter:description" content="ML Generated Alt Text for Multiple Images" />
          <meta name="twitter:image" content="https://next-alt-text-generator-blue.vercel.app/fb-image.jpg" />
          <meta name="twitter:creator" content="@titasmallick51" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Next-Alt-Text-Generator-Blue" />
          <meta property="og:description" content="Generate Multiple Alt Text, AI Powered" />
          <meta property="og:site_name" content="Next-Alt-Text-Generator" />
          <meta property="og:url" content="https://next-alt-text-generator-blue.vercel.app/" />
          <meta property="og:image" content="https://next-alt-text-generator-blue.vercel.app/fb-image.jpg" />
        </head>
        <body className={signika.className}>
          {children}
        </body>
      </html>
    </>
  );
}

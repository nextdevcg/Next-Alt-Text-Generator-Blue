import Head from 'next/head';
import Link from 'next/link';
import Multiple from '../comp/batchUploader';
import InputComp from '../comp/inputComp';
import styles from '../styles/page.module.css';
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;

export default async function Page() {
  return (
    <div className={styles.main}>
      <Head>
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
      </Head>
      <header className={styles.header}><h1>Next-Alt-Text-Generator-Blue</h1></header>
      <h2 className={styles.description}>
        This is a Project based on Next-Alt-Text-Generator, it extends its
        functionality. <Link href={'https://alt-text-generator.vercel.app/'}>See Original Project. </Link>Or 
        <Link href={'https://vercel.com/templates/next.js/ai-alt-text-generator'}> Deploy on Vercel. </Link> This project uses that as the backbone and extends the facilites like conversion of multiple files and generating alt text by uploading an image. This project is also open source. Here this is the link to the <Link href={'https://github.com/nextdevcg/Next-Alt-Text-Generator-Blue.git'}>Github Repo</Link>.<br></br>
        <u>How does it work?</u><br></br>
          <li>It takes the user input as URL OR</li>
          <li>It takes multiple Images as input and uploads it to <Link href={'https://file.io/'}>File.io</Link></li>
          <li>It takes the return URL and makes an API call</li>
          <li>The backend API call requests the Vercel Alt Text Generator</li>
          <li>The Vercel Alt Text Generator uses ML modal from Salesforce called BLIP on Replicate to generate relevant alt text for images</li>
          <li>It shows the result to the frontend</li>
          <li>Fetch request from the alt text generator deletes the File.io image which is essentially a feature of the file.io free plan</li>
          <li>No file is kept on the database</li><br></br>
          Fill free to use it in your project. Respect to the original creators.<br></br>
          <Link href={'https://extend-alt-text.vercel.app/'}>Extend Alt Text</Link> further enhances this project.
      </h2>
      <main className={styles.grid}>
      <section className={styles.card}>
      <InputComp />
      </section>
      <hr className={styles.line}></hr>
      <section className={styles.card}>
      <Multiple />
      </section>
      </main>
      <footer className={styles.footer}>Developed by: Amit Sen and Titas Mallick | India | {currentDate}</footer>
    </div>
  );
}

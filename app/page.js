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

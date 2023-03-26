'use client';
import imageCompression from 'browser-image-compression';
import { useState } from 'react';
import styles from '../styles/page.module.css'

var urlSet = [];
var filenameSet = [];

const Multiple = () => {
  //CALL FUNCTION FOR EACH
  let x = 0;
  //HANDLE CLICK
  let [incomingAlt, setIncomingAlt] = useState(null);
  let [loading, setLoading] = useState('Your data will be here...');

  

  const buttonHandler = async () => {
    let arrD = [];
    for (let i = 0; i < urlSet.length; i++) {
      // console.log(x++, urlSet[i]);
      const getData = await pullTheData(urlSet[i]);
      if (getData) {
        const useData = getData.data;
        arrD.push({ data: useData, fileName: filenameSet[i] });
        setLoading(`Removed File No. ${i + 1} and Got Data for File No. ${i + 1}`);
      }
    }
    setIncomingAlt(arrD);
    setLoading('');
    urlSet = [];
    filenameSet = [];
  };

  //Function for pulling the data
  const pullTheData = async (individualURL) => {
    const dataFromBackend = await fetch(`/api?${individualURL}`, {
      mode: 'no-cors',
    });
    if (dataFromBackend.ok) {
      const internal = dataFromBackend.json();
      return internal;
    }
  };

  //FILE RESIZER

  // AMIT, PLACE YOUR CODE HERE _________________________

  const fileUploader = async (e) => {
    setIncomingAlt('');

    var filesData = e.target.files;
    var maxImageSizeMB = 0.5;

    setLoading(`${filesData.length + 1} Images selected...`);

    for (let x = 0; x < filesData.length; x++) {
      setLoading(`File No. ${x + 1} being converted...`);

      //RESIZE THE FILES

      const imageFile = filesData[x];
      const imageFileSize = imageFile.size / 1024 / 1024;
      console.log(`originalFile size ${imageFileSize} MB`); // before file compression

      const formData = new FormData();

      const options = {
        maxSizeMB: maxImageSizeMB,
        maxWidthOrHeight: 500,
        useWebWorker: false,
      };

      try {
        if (imageFileSize > maxImageSizeMB) {
          const compressedFile = await imageCompression(imageFile, options); // file compression
          console.log(
            `compressedFile size ${compressedFile.size / 1024 / 1024} MB`,
          ); // after file compression
          formData.append('file', compressedFile, filesData[x].name);
        } else {
          console.log(`compress করার প্রয়োজন নেই `);
          formData.append('file', imageFile, filesData[x].name);
        }
      } catch (error) {
        console.log(error);
      }

      // AMIT, PLACE YOUR CODE HERE _________________________

      await fetch('https://file.io', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log('Success:', result.link);
          urlSet.push(result.link);
          filenameSet.push(filesData[x].name);
          setLoading('Sending Data to File.io...');
        });
    }
    if (filesData.length === urlSet.length && urlSet.length !== 0) {
      buttonHandler();
      setLoading('Requested Backend to generate text...');
    }
  };

  return (
    <>
      <h3>Upload Multiple Images, It will generate you the Texts</h3>
      <label className={styles.button} htmlFor='inputFilesBut'>
        Select Images
      <input
        className={styles.buttonF}
        id='inputFilesBut'
        accept="image/*"
        type={'file'}
        onChange={fileUploader}
        multiple
      ></input>
      </label>
      <textarea className={styles.textArea} readOnly value={incomingAlt ? incomingAlt.map((units) => { return (`File Name: ${units.fileName} \nDescription: ${units.data}\n\n`) }).join("") : loading}>
      </textarea>
    </>
  );
};

export default Multiple;

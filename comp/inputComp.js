'use client';

import { useState } from 'react';
import styles from '../styles/page.module.css'

//DATA BEING FETCHED FROM THE NEXT BACKEND
const fetchFromBackend = async (url) => {
  console.log(url);
  const dataFromBackend = await fetch(`/api?${url}`, { mode: 'no-cors' });
  if (dataFromBackend.ok) {
    const internal = dataFromBackend.json();
    return internal;
  }
};

const InputComp = () => {
  let [urlData, setUrlData] = useState('No URL...');
  let [internalState, setInternalState] = useState('No Data yet...');

  //INPUT FORM HANDLER
  const formHandler = (e) => {
    e.preventDefault();
    let url = e.target.urlInput.value;
    if (url) {
    setUrlData(url);
    callTheDatabase(url);
    }
  };

  //CALLING THE BACKEND FUNCTION
  const callTheDatabase = async (url) => {
    const getData = await fetchFromBackend(url);
    if (getData) {
      const useDta = getData.data;
      setInternalState(useDta);
    } else {
      setInternalState('Problem with backend server...');
    }
  };
  return (
    <>
      <h3>Paste URL of a Single Image to get the data</h3>
      <form onSubmit={formHandler}>
        <input className={styles.input} type="text" id="urlInput" placeholder='Place your URL here...'></input>
        <input className={styles.button} type="submit"></input>
      </form>
      {/* {urlData && <p>URL typed: {urlData}</p>} */}
      <textarea className={styles.textArea} value={`URL: ${urlData}\nDescription:\n${internalState}`} readOnly>
      </textarea>
    </>
  );
};

export default InputComp;

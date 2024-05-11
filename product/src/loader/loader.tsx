import * as React from 'react';
import { useState } from 'react';
import './loader.css';
// https://giphy.com/embed/y1ZBcOGOOtlpC  loader image
export default function Loader() {
  

const [loading, setLoading] = useState(true);

 function userLogin () {

    setLoading(true);

    setTimeout(() => {

          setLoading(false);

    }, 2000)

  }

  return (
    <div>
      <div className = {loading? 'spinner': ''}></div>
      <button onClick={userLogin}>Test</button>
    </div>
  )
  }
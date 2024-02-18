import './App.css'

import React, { useState } from 'react'

function App() {
  const [progress, setProgress] = useState(0);
  const [filled, setFilled] = useState(false);

  const increaseProgress = () =>{
    const newProgress = Math.min(progress + 25 ,100);
    if(newProgress === 100){
      setFilled(true);
    }
    setProgress(newProgress);
  }
  return (
    <div id='main-div'>
      <p>Progress Bar</p>
      <div id='progressBar-div'>
        <div className={`progress-fill ${filled ? 'filled' :""}`} style={{width: `${progress}%`}}>
        </div>
      </div>
      <button onClick={increaseProgress}>Click to increase Progress</button>
    </div>
  )
}

export default App

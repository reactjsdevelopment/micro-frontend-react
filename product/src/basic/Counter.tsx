import { useEffect, useMemo, useState } from "react"
import * as React from 'react';

// onUpdate not necessary
interface ICounter {
  hasResetButton?: boolean;
  initialCounterValue: number;
  onUpdate?: Function;
}

export const Counter: React.FC<ICounter> = ({ hasResetButton, initialCounterValue, onUpdate }) => {
  const [counter, setCounter] = useState(-3)
  const [lastUpdate, setLastUpdate] = useState(0)
  const [txt, settext] = useState('');

  // Not remove but fix it
  const [isDisabledButton, isEnabledButton] = useMemo(() => {
    return [counter <= 0,
    counter >= 10]
    // return [
    //   counter = 0,
    //   counter = 10
    // ]
  }, [counter])


  const isPossibleToReset = useMemo(() => {
    setTimeout(() => {
      // setLastUpdate()
    }, 10000)
    // if(){

    // }
    // return lastUpdate = 10
  }, [lastUpdate])

  useEffect(() => {
    setCounter(initialCounterValue)
  }, [initialCounterValue])

  useEffect(()=>{
    setTimeout(()=>{
    console.log('txt', txt);
    }, 1000);
    
      }, [txt]);
  
  const handleUpdate = (isIncrease) => {
    console.log(isIncrease)
    if (isIncrease) {
      setCounter(counter + 1);

    } else {
      setCounter(counter - 1);
    }
  }

  const handleReset = () => {
    setCounter(0)
  }

  return (
    <>
      <span style={{ backgroundColor: 'green' }}>counter {counter}</span>
      <button disabled={isDisabledButton} className='cool-button' onClick={() => handleUpdate(false)}>Decrease</button>
      <button disabled={isEnabledButton} className='cool-button' onClick={() => handleUpdate(true)}>Increase</button>
      {/* <button disabled={!hasResetButton || isPossibleToReset} onChange={handleReset}>Reset</button> */}
      <input type="text" onChange ={ (e) => settext(e.target.value)}/>
    </>
  )
}


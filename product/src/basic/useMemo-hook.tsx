import * as React from 'react';
import { useMemo, useState } from 'react';

export function UseMemoApp() {

    const [count, setCount] = useState(60);

    const expensiveCount = useMemo(() => {
        return count**2;
    }, [count]) // recompute when count changes.

    
}

export const HeavyCalculate = () => {
const [count,setCount] = useState(0);
const [otherCount,setOtherCount] = useState(0);




const calculate =  (cou) =>{ return cou +3}
const normal = calculate(count);
const result = useMemo(()=>calculate(count),[count])
return (
<div>
  {result}
</div>

)
}

export function Memo() {
  const [memoOne, setMemoOne] = useState(0);
  const incrementMemoOne = () => { setMemoOne(memoOne + 1) }
  const isEven = useMemo(() => { 
    let i = 0;
     while (i < 2000000000) i++ 
     return memoOne % 2 === 0
  },
  [memoOne]);
  
  const square = useMemo(()=> { 
    console.log("squared the number"); for(var i=0; i < 200000000; i++);
    return memoOne * memoOne;
  },
  [memoOne]);

  return (


    <div>
      <div>
        <button className="memo-button" onClick={incrementMemoOne}>
          Memo One - {memoOne}{" "}
        </button>
        <span className="IsEven">{isEven ? "Even" : "Odd"}</span>
      </div>

      <div className="square">{square}</div>
    </div>
  );
}

import * as React from 'react';
import { createContext, useContext } from 'react';

const ans = {
    right: '✅',
    wrong: '❌'
}

const AnsContext = createContext(ans);

export function Exam() {
    return (
        // Any child component inside this component can access the value which is sent.
        <AnsContext.Provider value={ans.right}>
            <RightAns/>
        </AnsContext.Provider>

     
    )
}

function RightAns() {
    // it consumes value from the nearest parent provider.
    const ans = useContext(AnsContext);
    console.log(ans, 'ans')
    return <p>{ans}</p>
    // previously we were required to wrap up inside the AnsContext.Consumer
    // but this useContext hook, get rids that.
}
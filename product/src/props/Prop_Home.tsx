import React from "react"
import PassMultipleProps from './passMultipleProps';
import DynamicComponentName from './dynamicComponentName';
import Test from './prop-drilling/problem';
import TestSolution from './prop-drilling/solution';
import PassChild from './prop-children';

export default function Prop_Home() {
    return (
        <div className="p-5 bg-blue-500 text-white -text-3xl font-bold">
            <div>Props demo</div>

            {/* <PassMultipleProps a="a" b="b"/> */}

            <DynamicComponentName name="dynamicComponent" />

            {/* <Test/>
            <TestSolution/> */}

            {/* <PassChild/> */}
        </div>
    )
}
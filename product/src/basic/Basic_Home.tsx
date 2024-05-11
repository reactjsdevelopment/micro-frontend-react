import React from "react"
import { Counter } from "./Counter"
import MapUsage from "./Map"
import { Parent } from "./Parent_Communication"
import { Ref_Forwarding } from "./Ref_forwarding"


export default function Basic_Home() {
    return (
        <div className="p-5 bg-blue-500 text-white -text-3xl font-bold">
            {/* <Counter hasResetButton={true} initialCounterValue={1} /> */}
            {/* <MapUsage/> */}
            {/* <Parent app='hi'/> */}
            {/* <Ref_Forwarding/> */}
        </div>
    )
}
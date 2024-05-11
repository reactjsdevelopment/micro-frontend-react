import React from "react"
import Loader from "./loader"
import Loader2 from "./loader2"
import Loader3 from "./loader3"

export default function Loader_Home() {
    return (
        <div className="p-5 bg-blue-500 text-white -text-3xl font-bold">
            {/* <p>Loader_Home</p> */}
            <Loader />
            <Loader2 />
            <Loader3 />
        </div>
    )
}
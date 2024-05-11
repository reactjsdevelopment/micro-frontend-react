import React from "react"
import LinkComp from "./route"
import Navbar from "./Navbar"
import Page from "./route-control"
import { SwitchRoute } from "./switch"
import HistoryDemo from "./histroy"

export default function Route_Home() {
    return (
        <div className="p-5 bg-blue-500 text-white -text-3xl font-bold">
            {/* <p>Route_Home</p> */}
            {/* <Navbar /> */}
            {/* <LinkComp /> */}
            {/* <HistoryDemo/> */}
            <SwitchRoute/>
            {/* <Page page="home"/>
            <Page page="services"/> */}
        </div>
    )
}
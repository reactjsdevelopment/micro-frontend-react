import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "product/Header";
import Footer from "product/Footer";

import './index.scss'

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
     <Header />
    <div className="text-3xl mx-auto max-w-6xl">
    <div className="text-center">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
        className="rounded-full w-32 mb-4 mx-auto"
        alt="Avatar"
      />
      <h5 className="text-xl font-medium leading-tight mb-2">John Doe</h5>
      <p className="text-gray-500">Web designer</p>
    </div>
  </div>
  <Footer />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)

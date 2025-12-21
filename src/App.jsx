import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText)

import React from 'react'

function App() {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-3xl text-indigo-300">Hello, gsap</h1>
    </div>
  )
}

export default App

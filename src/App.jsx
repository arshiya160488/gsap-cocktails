import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText)

import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

function App() {
    return (
        <main>
            <Navbar />
            <Hero />
            <div className='h-dvh' bg-black />
        </main>
    )
}

export default App

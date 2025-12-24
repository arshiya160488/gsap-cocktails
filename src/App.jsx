import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText)

import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Cooktails from './Components/Cooktails'

function App() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cooktails />
        </main>
    )
}

export default App

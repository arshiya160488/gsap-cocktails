import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText)

import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Cooktails from './Components/Cooktails'
import About from './Components/About'
import Art from './Components/Art'

function App() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cooktails />
            <About />
            <Art />
        </main>
    )
}

export default App

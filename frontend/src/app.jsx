import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import './index.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Companies from './components/Companies'
import Feature from './components/Feature'
import Testimonial from './components/Testimonial'
import Faqs from './components/Faqs'
import SupportCTA from './components/SupportCTA'
import BlogSection from './components/BlogSection'
import FreeTrialSection from './components/FreeTrialSection'
import FooterMenu from './components/FooterMenu'
import FooterCopyRight from './components/FooterCopyRight'
export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar/>
    <Hero/>
    <Companies/>
     <Feature/>
     <Testimonial/>
     <Faqs/>
     <SupportCTA/>
     <BlogSection/>
     <FreeTrialSection/>
     <FooterMenu/>
     <FooterCopyRight/>
    </>
  )
}

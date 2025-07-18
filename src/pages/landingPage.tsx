import { About } from "../components/ladingPage/about"
import { Courses } from "../components/ladingPage/courses"
import { Footer } from "../components/ladingPage/footer"
import { Hero } from "../components/ladingPage/hero"
import { Navbar } from "../components/ladingPage/navbar"

const LandingPage = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Courses/>
    <Footer/>
         
    </div>
  )
}

export default LandingPage
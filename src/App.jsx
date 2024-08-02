
import FeaturedSection from './components/FeaturedSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Testimonies from './components/Testimonies'
import WorkFlow from './components/WorkFlow'

const App = () => {
  return (
    <div>
     <Navbar/>
     <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      <FeaturedSection/>
      <WorkFlow/>
      <Pricing/>
      <Testimonies/>
      <Footer/>
     </div>
    </div>
  )
}

export default App

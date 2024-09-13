import Arrivals from "./components/arrivals/Arrivals"
import Banner from "./components/Banner"
import Brands from "./components/Brands"
import Community from "./components/Community"
import Footer from "./components/Footer"
import Header from "./components/header/Header"
import Hero from "./components/header/Hero"
import Vouchers from "./components/Vouchers"
import YoungsFavorite from "./components/youngs favorite/YoungsFavorite"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Arrivals />
      <Banner />
      <YoungsFavorite />
      <Vouchers />
      <Community />
      <Footer />
    </>
  )
}

export default App

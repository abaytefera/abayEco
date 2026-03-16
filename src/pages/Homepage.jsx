import Navbar from "../component/Navbar"
import Home from "../component/Hero"
import Footer from "../component/Footer"

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
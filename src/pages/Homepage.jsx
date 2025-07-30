import Navbar from "../component/Navbar"
import Home from "../component/Hero"
import Footer from "../component/Footer"
function HomePage() {
  return (
    <div className="flex   gap-10 flex-col">
<Navbar></Navbar>
<Home></Home>
<Footer></Footer>
    </div>
  )
}

export default HomePage
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/SideBar/Sidebar"
import Footer from "../../components/Footer/Footer"
import Wish from "../../components/WishListContainer/WishListContainer"

export default function Store() {
  return (
    <div className="h-full">

        <div>
            <Navbar/>
        </div>

        <div className='flex min-h-[calc(100vh-5rem)]'>
            <Sidebar /> 
            <Wish />
        </div>

        <div className="block">
            <Footer />
        </div>

        
    </div>
  )
}
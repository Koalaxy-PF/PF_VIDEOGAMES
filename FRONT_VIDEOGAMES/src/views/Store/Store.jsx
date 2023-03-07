import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/SideBar/Sidebar"
import Footer from "../../components/Footer/Footer"
import Sell from "../../components/Sell/Sell"

export default function Store() {
  return (
    <div className="h-full">

        <div>
            <Navbar/>
        </div>

        <div className='flex min-h-[calc(100vh-5rem)]'>
            <Sidebar /> 
            <Sell />
        </div>

        <div className="block">
            <Footer />
        </div>

        
    </div>
  )
}

import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/SideBar/Sidebar"
import Footer from "../../components/Footer/Footer"
import Sell from "../../components/Sell/Sell"
import CreateGame from "../../components/FormCreateGame/FormCreateGame"

export default function Store() {
  return (
    <div className="Store">

        <div>
            <Navbar/>
        </div>

        <div className='flex w-full h-full'>
            <Sidebar /> 
            <CreateGame/>
        </div>

        <div>
            <Footer />
        </div>

        
    </div>
  )
}
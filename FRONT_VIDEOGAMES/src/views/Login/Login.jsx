import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/FormLogin/FormLogin";
import NavBar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";

export default function Login(){
    return(
        <div class='h-full'>
            <div>
               <NavBar/> 
            </div>
            <div class='flex min-height-full  item-center 'style={{backgroundImage: `url('https://www.xtrafondos.com/descargar.php?id=4047&resolucion=3840x2400')`, backgroundSize: 'cover'}} >
            <div className='flex min-h-[calc(100vh-5rem)]'>
               <Sidebar/>
            </div >
                <LoginForm/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

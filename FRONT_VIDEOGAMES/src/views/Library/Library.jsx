import Sidebar from "../../components/SideBar/Sidebar"
import NavBar from "../../components/Navbar/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { GetProductsLibrary } from "../../redux/actions/actions"

export default function Library(){

  const User = useSelector((state) => state.user);
  const Library = useSelector((state) => state.library);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(GetProductsLibrary(User.user.id));
  }, [dispatch])
  
  return (

    <div className="">
                <div>
                    <NavBar/>
                </div>

                <div className="flex  w-full" style={{backgroundImage: `url('https://www.xtrafondos.com/descargar.php?id=4047&resolucion=3840x2400')`, backgroundSize: 'cover'}}>
                  
                    <div className='flex min-h-[calc(100vh-5rem)]'>
                      <Sidebar/>
                    </div>

                    {
                      Library.products?.map((element) => {
                        return(
                          <div className="">
                            <h4 className="text-white">{element.name}</h4>
                          </div>
                        )
                      })
                    }


                </div>
    </div>
  )        
}

import Sidebar from "../../components/SideBar/Sidebar"
import NavBar from "../../components/Navbar/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { GetProductsLibrary } from "../../redux/actions/actions"
import Card from "../../components/Carrucel/Card"

export default function Library(){

  const User = useSelector((state) => state.user);
  const Library = useSelector((state) => state.library);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(GetProductsLibrary(User.user.id));
  }, [dispatch])

  function vaciar(objeto){

    if(objeto = {}){
      objeto;
    }

    for(propiedad in objeto){
      vaciar(delete objeto[propiedad]);
    }
  }
  
  return (

    <div className="">
                <div>
                    <NavBar/>
                </div>

                <div className="flex w-full" style={{backgroundImage: `url('https://www.xtrafondos.com/descargar.php?id=4047&resolucion=3840x2400')`, backgroundSize: 'cover'}}>
                  
                <div className='flex min-h-[calc(100vh-5rem)]'>
                      <Sidebar/>
                    </div>

                <div className="w-full">

                  <h1 className="text-4xl text-white ml-5 mt-5 mb-10">LIBRARY</h1>


                    <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mx-10 mt-5 mb-4 h-48">
                      {
                        Library.productlibraries?.map((element) => {
                          return(
                            <div class="w-full max-w-sm bg-gray-100 shadow-xl shadow-slate-700 mb-1 dark:bg-[#17202A] duration-300">

                            
                                <img className=" h-[150px] w-full object-cover " src={element.img} alt="product image" />
                            
                        
                            <div class="px-2 pb-4 mt-2">
                        
                                <div>   
                                    <h5 class="ml-1 text-xl font-bold tracking-tight text-gray-900 dark:text-slate-100">{element.name}</h5>   
                                </div>

                                <div className='mt-3 w-full flex text-blue-600'>
                {
                    element.product.genre?.map((el) => {
                        return(
                            <div className='mb-4 text-[0.7rem] rounded-full bg-gray-300 mr-1 px-4 py-2 font-semibold'>{el} </div>
                        )
                    })
                }
            </div>
                                
                        
                               
                            </div>
                        </div>
                          )})
                        }
                </div>
                </div>
                        </div>
    </div>
  )        
}

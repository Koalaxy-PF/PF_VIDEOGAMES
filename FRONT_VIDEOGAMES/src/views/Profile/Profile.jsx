import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { GetOrderByID } from "../../redux/actions/actions";

export default function Profile(){

    const dispatch = useDispatch()
    const User = useSelector((state) => state.user)
    const Order = useSelector((state) => state.order)

    useEffect(() => {
        dispatch(GetOrderByID(User.user.id));
    }, [dispatch])
    
  return (
    <div class="bg-cover bg-no-repeat h-screen" style={{backgroundImage: `url('https://www.xtrafondos.com/descargar.php?id=4047&resolucion=3840x2400')`, backgroundSize: 'cover'}}>
        
        <div>
            <NavBar />
        </div>

        <div className="p-6 sm:p-12 text-gray-100">

	<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
		<img src={User.user.img} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start
         shadow-xl shadow-slate-700" />

		<div className="flex flex-col text-slate-100">
			<h4 className="text-lg font-semibold text-center md:text-left">{User.user.name} {User.user.last_name}</h4>
            <h4>{User.user.username}</h4>
            <h4>{User.user.email}</h4>
            <h4>{User.user.date}</h4>
		</div>
	    </div>
    </div>


        <div className=" py-10 h-screen">

        {
            Order?.length === 0 ?

            <div>
                <h1 className="text-4xl text-center text-slate-100">NO HAY ÓRDENES DE COMPRA</h1>
            </div>

            :
            
            <div className="flex justify-center items-center">
            <table className="shadow-2xl font-[Poppins] border-2 border-slate-900 w-6/12">
                <thead className="text-white ">
                    <tr>
                        <th className="py-3 bg-slate-600 ">ID</th>
                        <th className="py-3 bg-slate-600">USERNAME</th>
                        <th className="py-3 bg-slate-600 ">NAME</th>
                        <th className="py-3 bg-slate-600 ">DATE</th>
                        <th className="py-3 bg-slate-600">ITEMS</th>
                        <th className="py-3 bg-slate-600">AMOUNT</th>
                    </tr>
                </thead>

                <tbody className="text-cyan-900 text-center">
                    {
                        Order?.map((element) => {
                            return (
                                <tr className="bg-slate-200 cursor-pointer duration-300">
                                <td className="py-3 px-6">{element.id}</td>
                                <td className="py-3 px-6">{element.user.username}</td>
                                <td className="py-3 px-6">{element.user.name} {element.user.last_name}</td>
                                <td className="py-3 px-6">{element.createdAt.split('T')[0]}</td>
                                <td className="py-3 px-6">{element.products.length}</td>
                                <td className="py-3 px-6">${element.total}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        }
        </div>


        
			
						
        

      

      


    </div>
  )
}
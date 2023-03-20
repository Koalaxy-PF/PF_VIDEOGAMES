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
    <div>
        
        <div>
            <NavBar />
        </div>

        <div className="bg-slate-900 flex justify-center items-center h-screen">
            <table className="shadow-2xl font-[Poppins] border-2 border-cyan-200 w-6/12">
                <thead className="text-white ">
                    <tr>
                        <th className="py-3 bg-cyan-800 ">ID</th>
                        <th className="py-3 bg-cyan-800">USERNAME</th>
                        <th className="py-3 bg-cyan-800 ">NAME</th>
                        <th className="py-3 bg-cyan-800 ">DATE</th>
                        <th className="py-3 bg-cyan-800">ITEMS</th>
                        <th className="py-3 bg-cyan-800 ">AMOUNT</th>
                    </tr>
                </thead>

                <tbody className="text-cyan-900 text-center">
                    {
                        Order?.map((element) => {
                            return (
                            <tr className="bg-cyan-200 cursor-pointer duration-300">
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

        
			
						
        

      

      


    </div>
  )
}
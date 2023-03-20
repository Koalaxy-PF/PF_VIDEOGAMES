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


    </div>
  )
}

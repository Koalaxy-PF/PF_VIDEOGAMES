import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";
import { Clean, GetGameById, GetReviews, PostWishList, AddReview} from "../../redux/actions/actions";
import FavIcon from "../../assets/icons/corazon.png"
import CartIcon from "../../assets/icons/carrito-de-compras.png"
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

export default function Details(){
    
    let {id} = useParams();
    const dispatch = useDispatch();

    const vgDetail = useSelector((state) => state.details);
    const User = useSelector((state) => state.user);
    
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [text, setText] = useState('');
    const stars = Array(5).fill(0)
    
    const handleClick = value => {
        setCurrentValue(value)
    }
    
    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    }
    
    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }
    
    function addWishList(e){
        PostWishList(id)
    }
    
    function handleOnChange(event) {
        setText(event.target.value);
    }
    
    const handleSubmit = () => {
        
        if(currentValue === 0){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You must select a rating',
            })
        }

        if(text.length === 0){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You must write a comment',
            })
        }

        if(Object.keys(User).length === 0){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to be validated to be able to qualify',
            })
        }

        // AQUÍ YA SABEMOS QUE EL USUARIO ESTÁ VALIDADO, HIZO UN COMENTARIO Y UNA CALIFICACIÓN DE ESTRELLAS.

        const obj = {
            userId: User.user.id,
            productId: vgDetail.id, 
            calification: currentValue, 
            comment: text,
        }

        dispatch(AddReview(obj))
    }

    useEffect(() => {
        dispatch(GetGameById(id))
        return () => {
            dispatch(Clean(dispatch))
        }
    }, [dispatch, id]);

    return(
        <div>

            <div className="w-full">
                <NavBar />
            </div>
            
            <div className="flex w-full flex-row" style={{backgroundImage: `url('https://www.xtrafondos.com/descargar.php?id=4047&resolucion=3840x2400')`, backgroundSize: 'cover'}}>

                <div className='flex min-h-[calc(100vh-5rem)]'>
                      <Sidebar/>
                    </div>

                <div className='w-full'>

                    <div className="flex w-full">

                        <div className="w-1/2 h-250">
                            <img className='w-4/5 m-10 rounded-md shadow-md' src={vgDetail.img} alt="img not found" ></img>
                        </div>

                        <div className="flex items-start w-1/2  h-[340px] flex-col flex-nowrap justify-start m-10">    
                            <div className='flex flex-col justify-start bg-white rounded-md shadow-md w-5/6 h-full'>

                                <div className="m-5">
                                    <h1 className='text-4xl font-extrabold text-gray-900 ml-0 ' > {vgDetail.name} </h1>
                                    <a> {vgDetail.calification}/5 </a> <ion-icon name="star-outline"></ion-icon>

                             
                                    <div className="flex flex-row gap-x-2">
                                        {vgDetail.genre?.map((genre) =>{
                                            return(
                                                <div className="bg-gray-700 rounded-xl">
                                                    <a className="m-3 text-white font-medium text-center">{genre}</a>
                                                </div>
                                            )})}
                                    </div>
                                </div>

                                <div className="h-24 mx-5 overflow-hidden text-ellipsis whitespace-pre-line">
                                    <p className="h-16 text-xs text-justify"> {vgDetail.description} </p>
                                </div>

                                <div className="mt-8 mb-5 flex flex-row justif-start gap-x-2">
                                    {
                                        vgDetail.discount > 0 ? 
                                            <div className="bg-gray-500 rounded-md w-48 h-12 ml-5 text-center text-xl flex items-center justify-around ">
                                                <a className="text-white font-semibold">BUY: </a>
                                                <a className="text-yellow-400">${vgDetail.price - (vgDetail.price * vgDetail.discount/100)}</a>
                                                <a className="line-through text-gray-300">${vgDetail.price} </a>
                                            </div>
                                    : 
                                    <div className="bg-gray-500 rounded-md w-48 h-12 ml-5 text-center text-xl flex items-center justify-around ">
                                        <a className="text-white font-semibold">PRICE: </a>
                                        <a className="text-yellow-400">${vgDetail.price} </a>
                                    </div>
                                }
                                <button onClick={(e) => addWishList(id)}>
                                    <div className="bg-gray-500 rounded-md w-12 h-12 flex items-center justify-center">
                                        <img className="w-3/5" src={FavIcon}></img>
                                    </div>
                                </button>
                                
                                <div className="bg-gray-500 rounded-md w-12 h-12 flex items-center justify-center">
                                    <img className="w-3/5" src={CartIcon}></img>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    </div>


                    {/* REVIEWS */}

                    <div className="flex flex-col mx-auto max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100">
	                    <div className="flex flex-col items-center w-full">
		                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>

		                    <div className="flex flex-col items-center py-6 space-y-3">

			                    <span className="text-center">How was your experience?</span>

                                    <div className="flex flex-row">
                                        {stars.map((_, index) => {
                                            return (
                                                <FaStar
                                                    key={index}
                                                    size={24}
                                                    onClick={() => handleClick(index + 1)}
                                                    onMouseOver={() => handleMouseOver(index + 1)}
                                                    onMouseLeave={handleMouseLeave}
                                                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                                    style={{
                                                        marginRight: 10,
                                                        cursor: "pointer"
                                                    }}
                                                />
                                            )})}
                                    </div>	
		                    </div>

		                    <div className="flex flex-col w-full">
			                    <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
                                value={text} onChange={handleOnChange}></textarea>
			                        <button type="button" onClick={() => handleSubmit()} className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-violet-400">Submit</button>
		                    </div>
	                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
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

    const User = useSelector((state) => state.user);
    const vgDetail = useSelector((state) => state.details);
    const Reviews = useSelector((state) => state.reviews)
    
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
            name: User.user.name,
            last_name: User.user.last_name,
            img: User.user.img,
            productId: vgDetail.id, 
            calification: currentValue, 
            comment: text,
        }

        dispatch(AddReview(obj)).then((resp) => {
            console.log(resp)
            return Swal.fire({
                icon: 'success',
                title: 'Congratulations!',
                text: resp.data.message,
            }).then(() => {
                dispatch(GetReviews(id));
            })
        }).catch((err) => {  // corrección aquí
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: err.response.data.message
            })
        })
    }
            
    useEffect(() => {
       
        dispatch(GetGameById(id)).then(() => {
                dispatch(GetReviews(id))
        })

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

                    {
                        Reviews?.map((element) => {
                            return (
                                <div className="container flex flex-col w-full max-w-lg p-6 mb-3 ml-8 divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
	                                <div className="flex justify-between p-4">
		                                <div className="flex space-x-4">
			<div>
				<img src={element.img} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold text-xl mt-3">{element.name} {element.last_name}</h4>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-500">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold">{element.calification}</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-400">
		{element.comment}
	</div>
</div>
                            )
                        })
                    }

                    <div className="flex flex-col mx-auto mb-5 max-w-xl p-8 shadow-sm rounded-xl lg:p-10 bg-slate-900 text-gray-100">
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
			                    <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-slate-100 bg-gray-700"
                                value={text} onChange={handleOnChange}></textarea>
			                        <button type="button" onClick={() => handleSubmit()} className="py-4  my-4 font-semibold rounded-md text-black bg-amber-400
                                    hover:bg-amber-500">Submit</button>
		                    </div>
	                    </div>
                    </div>

                </div>
            </div>
                    <div className='w-full'>
                        <Footer/>
                    </div>
        </div>
    )
}
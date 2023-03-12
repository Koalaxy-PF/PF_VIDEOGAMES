import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";
import { Clean, GetGameById, PostWishList } from "../../redux/actions/actions";
import FavIcon from "../../assets/icons/corazon.png"
import CartIcon from "../../assets/icons/carrito-de-compras.png"

const Details = () => {
    
    let {id} = useParams();

    const dispatch = useDispatch();
    const vgDetail = useSelector((state) => state.details);

    function addWishList(e){
        PostWishList(id)
      }

    useEffect(() => {
        dispatch(GetGameById(id))
        return () => {
            dispatch(Clean(dispatch))
        }
    }, [dispatch, id]);

    

    return(
        <div>
            <div>
                <NavBar />
            </div>
            
            <div className='flex w-full h-full'>
                <Sidebar />
            {
                
                vgDetail ? 
                <div className='flex flex-row bg-gray-100 w-screen h-full justify-start'>
                    <div className="w-1/2 h-250">
                        <img className='w-4/5 m-10 rounded-md shadow-md' src={vgDetail.img} alt="img not found" ></img>
                    </div>
                    <div className="flex items-start w-1/2 h-250 flex-col flex-nowrap justify-start m-10">    
                        <div className='flex flex-col justify-start bg-white rounded-md shadow-md w-5/6 h-full'>
                            <div className="m-5">
                                <h1 className='text-4xl font-extrabold text-gray-900 ml-0 ' > {vgDetail.name} </h1>
                                <a> {vgDetail.calification}/5 </a> <ion-icon name="star-outline"></ion-icon>

                                {/* <a>
                                    {
                                        
                                        vgDetail.genre?.map((e) => {
                                            return(
                                                <p> {e} </p>
                                                )
                                            })
                                        }
                                    </a> */}
                                <div  className="flex flex-row gap-x-2">
                                {vgDetail.genre?.map((genre) =>{
                                    return(
                                        <div className="bg-gray-700 rounded-xl">
                                            <a className="m-3 text-white font-medium text-center">{genre}</a>
                                        </div>
                                    )
                                    
                                })}
                                </div>
                                {/* <h1>Company: {vgDetail.company} </h1>
                                <h1>Release date: {vgDetail.released} </h1>
                            <h1 className="font-semibold" > Description:  </h1> */}


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
                                    <div>
                                        <a> {vgDetail.price} </a>
                                    </div>
                                }
                                <div className="bg-gray-500 rounded-md w-12 h-12 flex items-center justify-center">
                                    <img className="w-3/5" src={FavIcon}></img>
                                </div>
                                <div className="bg-gray-500 rounded-md w-12 h-12 flex items-center justify-center">
                                    <img className="w-3/5" src={CartIcon}></img>
                                </div>
                            </div>
                            <div>
                                <button onClick={(e) => addWishList(id)}>Add to Wish List</button>
                            </div>
                        </div>
                    {/* <div className=" ">
                        <h1 className="flex flex-col flex-wrap ml-0 text-3xl">Normal Price:  ${vgDetail.price} </h1>
                        {
                            vgDetail.discount > 0 ? <h1>Discount: {vgDetail.discount}% <h1>Discount Price: {vgDetail.price - (vgDetail.price * vgDetail.discount/100)} </h1></h1>
                            : <div></div>
                        }
                        <h1> Stock: {vgDetail.stock} </h1>
                        <h1 className="font-semibold">Requeriments:  </h1>
                        <p> {vgDetail.MinRequirements} </p>
                        <p> {vgDetail.RecommendRequirements} </p>


                    </div> */}
                    </div>
                </div> : 
                    <div>
                        <h1>Loading</h1>
                    </div>
            }
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )

}

export default Details;
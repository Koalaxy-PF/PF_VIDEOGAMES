import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";
import { Clean, GetGameById } from "../../redux/actions/actions";
const Details = () => {
    
    let {id} = useParams();

    const dispatch = useDispatch();
    const vgDetail = useSelector((state) => state.details);

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
                <div className='flex flex-col bg-gray-300 w-screen h-full justify-start'>
                    <img className='w-screen h-screen' src={vgDetail.img} alt="img not found" ></img>
                    <div className="flex items-start flex-row flex-nowrap justify-start mt-10">    
                        <div className='flex justify-start w-1/2 ml-10'>
                            <div>
                                <h1 className='text-2xl ml-0' > {vgDetail.name} </h1>
                                <a> {vgDetail.calification}/5 </a>
                                {/* <a>
                                    {
                                        
                                        vgDetail.genre?.map((e) => {
                                            return(
                                                <p> {e} </p>
                                                )
                                            })
                                        }
                                    </a> */}
                                <a> {vgDetail.genre} </a>
                                <h1>Company: {vgDetail.company} </h1>
                                <h1>Release date: {vgDetail.released} </h1>
                                <h1 className="font-semibold" > Description:  </h1>
                                <p> {vgDetail.description} </p>



                            </div>
                        </div>
                    <div className="w-1/2 ">
                        <h1 className="flex flex-col flex-wrap w-200 ml-0 text-3xl">Normal Price:  ${vgDetail.price} </h1>
                        {
                            vgDetail.discount > 0 ? <h1>Discount: {vgDetail.discount}% <h1>Discount Price: {vgDetail.price - (vgDetail.price * vgDetail.discount/100)} </h1></h1>
                            : <div></div>
                        }
                        <h1> Stock: {vgDetail.stock} </h1>
                        <h1 className="font-semibold">Requeriments:  </h1>
                        <p> {vgDetail.MinRequirements} </p>
                        <p> {vgDetail.RecommendRequirements} </p>


                    </div>
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
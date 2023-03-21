import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddReview, GetReviews } from "../../redux/actions/actions";
import Swal from 'sweetalert2'

export default function Reviews({id}){

    const arrReview = useSelector((state) => state.Reviews);
    const User = useSelector((state) => state.user);
    const dispatch = useDispatch();

    console.log(arrReview, 'rv');

    const initialState = {
        userId: "",
        productId: id,
        comment: "",
        calification: 0
    }

    const [review, setReview] = useState(initialState)

    const obj = {
        userId: User.user.id,
        productId: id
    }

    useEffect(() =>{
    dispatch(GetReviews(obj))
    if(User.user.id){
        setReview({
            ...review,
            userId: User.user.id
        })
    }
    },[])

    const handleClick = (e) => {
        setReview({
            ...review,
            calification: e.target.value
        })
    };

    const handleOnChange = (e) => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        })
    };

    const successAlert = () => {
        Swal.fire({
            title: 'Review created successfully',
            confirmButtonText: "Ok",
            timer: 3000,
            icon: "success"
        });
      }

    
      
        const calificationAlert = () => {
          Swal.fire({
              title: 'The calification field is required',
              confirmButtonText: "Ok",
              timer: 3000,
              icon: "error"
          });
        }
        const commentAlert = () => {
          Swal.fire({
              title: 'The comment field is required',
              confirmButtonText: "Ok",
              timer: 3000,
              icon: "error"
          });
        }
        const userIdAlert = () => {
          Swal.fire({
              title: 'You must log in',
              confirmButtonText: "Ok",
              timer: 3000,
              icon: "error"
          });
        }

    const handleSubmit = () => {
        if(!review.calification) return calificationAlert()
        if(!review.comment) return commentAlert()
        if(!review.userId) return userIdAlert()
        dispatch(AddReview(review))
        successAlert()
        setReview({...initialState})
        
    }

    return(
        <div>
            {
                        arrReview ? 
                        <div>
                            {
                                arrReview?.map((review) =>{
                                    return(
                                        <div >
                                            <a>{review.calification}/5<ion-icon name="star-outline"></ion-icon> </a>
                                            <h1>{review.comment} </h1>
                                        </div>
                                    )
                                })
                            }
                            <div className="grid justify-start content-center">
                            <div className="w-full h-[300px] rounded bg-white shadow-md m-10 grid gap-y-2 ">
                                <h1 className=" ml-2 mt-2 text-lg font-semibold">We want to know your opinion about this game...</h1>
                                <div className="grid grid-cols-5 w-full">
                                <label className="col-span-5 ml-2">Let a calification:</label>
                                <label className="ml-2">
                                    <input onClick={(e) => handleClick(e)} type='radio' name='calification' value='1'></input>
                                    1
                                </label>
                                <label className="col-span-1">
                                    <input onClick={(e) => handleClick(e)} type='radio' name='calification' value='2'></input>
                                    2
                                </label>
                                <label className="col-span-1">
                                    <input onClick={(e) => handleClick(e)} type='radio' name='calification' value='3'></input>
                                    3
                                </label>
                                <label className="col-span-1">
                                    <input onClick={(e) => handleClick(e)} type='radio' name='calification' value='4'></input>
                                    4
                                </label>
                                <label className="col-span-1">
                                    <input onClick={(e) => handleClick(e)} type='radio' name='calification' value='5'></input>
                                    5
                                </label>
                                </div>
                                <div className="w-full grid grid-cols-3">

                                <label className="col-span-1 ml-2">Let a comment:</label>
                                <input type='text' name="comment" value={review.comment} onChange={handleOnChange} className='bg-gray-100 text-left col-span-2 mr-2 rounded border-gray-500 border-2'></input>
                                </div>
                                <button type="button" onClick={handleSubmit} className='bg-gray-100 border-2 border-gray-500 w-20 h-10 mt-5 rounded justify-self-center' >Submit</button>
                            </div>
                        </div>
                        </div>
                        : <div className="grid justify-start content-center">
                            <div>
                                <h1>This product has no reviews yet</h1>
                            </div>
                            <div className="w-full h-[300px] rounded bg-white shadow-md m-10 grid gap-y-2 ">
                                <h1 className=" ml-2 mt-2 text-lg font-semibold">We want to know your opinion about this game...</h1>
                                <div className="grid grid-cols-5 w-full">
                                <label className="col-span-5 ml-2">Let a calification:</label>
                                <label className="ml-2">
                                    <input onClick={(e) => handleClick(e)} type='radio' name='calification' value='1'></input>
                                    1
                                </label>
                                <label className="col-span-1">
                                    <input onClick={(e) => handleClick(e)} type='radio' name='calification' value='2'></input>
                                    2
                                </label>
                                <label className="col-span-1">
                                    <input onClick={(e) => handleClick(e)} type='radio' name='calification' value='3'></input>
                                    3
                                </label>
                                <label className="col-span-1">
                                    <input onClick={(e) => handleClick(e)} type='radio' name='calification' value='4'></input>
                                    4
                                </label>
                                <label className="col-span-1">
                                    <input onClick={(e) => handleClick(e)} type='radio' name='calification' value='5'></input>
                                    5
                                </label>
                                </div>
                                <div className="w-full grid grid-cols-3">

                                <label className="col-span-1 ml-2">Let a comment:</label>
                                <input type='text' name="comment" value={review.comment} onChange={handleOnChange} className='bg-gray-100 text-left col-span-2 mr-2 rounded border-gray-500 border-2'></input>
                                </div>
                                <button type="button" onClick={handleSubmit} className='bg-gray-100 border-2 border-gray-500 w-20 h-10 mt-5 rounded justify-self-center' >Submit</button>
                            </div>
                        </div>
                    }
        </div>
    )
}
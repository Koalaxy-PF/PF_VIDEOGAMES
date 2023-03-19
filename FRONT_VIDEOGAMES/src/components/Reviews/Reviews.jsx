import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetReviews } from "../../redux/actions/actions";

export default function Reviews(id){

    const arrReview = useSelector((state) => state.reviews);
    const User = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const obj = {
        userId: User.user.id,
        productId: id
    }

    useEffect(() =>{
    dispatch(GetReviews(obj))
    },[])

    return(
        <div>
            {
                        arrReview ? 
                        <div>
                            <div>
                                <label>Let a calification</label>
                                <label>
                                    <input type='radio' name='calification' value='1'></input>
                                    1
                                </label>
                                <label>
                                    <input type='radio' name='calification' value='2'></input>
                                    2
                                </label>
                                <label>
                                    <input type='radio' name='calification' value='3'></input>
                                    3
                                </label>
                                <label>
                                    <input type='radio' name='calification' value='4'></input>
                                    4
                                </label>
                                <label>
                                    <input type='radio' name='calification' value='5'></input>
                                    5
                                </label>
                                <label>Let a comment</label>
                                <input type='text' name="comment" ></input>
                            </div>
                            {
                                arrReview?.map((review) =>{
                                    return(
                                        <div>
                                            <a>{review.calification}/5<ion-icon name="star-outline"></ion-icon> </a>
                                            <h1> {review.comment} </h1>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        : <div>
                            <div>
                                <label>Let a calification</label>
                                <label>
                                    <input type='radio' name='calification' value='1'></input>
                                    1
                                </label>
                                <label>
                                    <input type='radio' name='calification' value='2'></input>
                                    2
                                </label>
                                <label>
                                    <input type='radio' name='calification' value='3'></input>
                                    3
                                </label>
                                <label>
                                    <input type='radio' name='calification' value='4'></input>
                                    4
                                </label>
                                <label>
                                    <input type='radio' name='calification' value='5'></input>
                                    5
                                </label>
                                <label>Let a comment</label>
                                <input type='text' name="comment" ></input>
                            </div>
                        </div>
                    }
        </div>
    )
}
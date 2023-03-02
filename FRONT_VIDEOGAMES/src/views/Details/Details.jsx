import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Clean, GetGameById } from "../../redux/actions/actions";
const Detail = () => {
    
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

        </div>
    )

}

export default Detail;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterCompany, FilterGenres, GetGenres, TidyPrice, TidyReleased } from "../../redux/actions/actions";

const Filter = ({setCurrentPage, setOrder}) => {
    
    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.Genres);
    
    useEffect(() => {
        dispatch(GetGenres())
    }, []);

    const handleOrderName = (e) => {
        dispatch(TidyAlphabetically(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value)
    }
    
    const handleFilterGenre = (e) => {
        dispatch(FilterGenres(e.target.value));
        setCurrentPage(1);
    }

    const handleFilterCompany = (e) => {
        dispatch(FilterCompany(e.target.value));
        setCurrentPage(1);
    }

    const handleOrderReleased = (e) => {
        dispatch(TidyReleased(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }

    const handleOrderPrice = (e) => {
        dispatch(TidyPrice(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value)
    }

    return(
        <div>
            <div>
                <h3>Order by:</h3>
                <label>Alphabetically</label>
                <select onChange={e => {handleOrderName(e)}} >
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </select>
                <label>Price</label>
                <select onChange={e => {handleOrderPrice(e)}} >
                    <option value='min'>Min - Max</option>
                    <option value='max'>Max - Min</option>
                </select>
            </div>
            <div>
                <h3>Filter by:</h3>
                <label>Genre</label>
                <select onChange={e => {handleFilterGenre(e)}}>
                    <option value='all'>ALL</option>
                    {
                        allGenres?.map((e, k) => {
                            return(
                                <option key={k} value={e} > {e} </option>
                            )
                        })
                    }
                </select>
                {/* <label>Company</label>
                <select onChange={e => {handleFilterCompany(e)}}></select> */}

            </div>
        </div>
    )

}

export default Filter;
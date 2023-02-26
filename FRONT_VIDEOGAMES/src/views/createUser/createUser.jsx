import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';


export default function createUser(){
    const dispatch = useDispatch();
    const history = useHistory();

    const [error, setError] = useState({});


const [input, setInput] = useState({
    uername: '',
    email: '',
    banned: '',
    password: '',
    image: '',
    date: '',
    description: '',
    genre: [],
});

function handleInputChange(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
}


const genre = ['male', 'female', ]

return(
    <div>
        <label>Genre</label>
        <select name="genre" required onCgange = {(e) => handleInputChange(e)}>
            <option value="">Select genre</option>
            {
                genre.map(genre => (
                    <option value={genre} key={genre}>{genre}</option>
                ))
            }
        </select>
    </div>
);


};
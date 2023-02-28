import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import {Link} from "react-router-dom";
//import validate from "./validators.jsx";
import img from '../../assets/create/ImgForm.jpeg'

export default function CreateUser() {
 // const dispatch = useDispatch();
  //const history = useHistory();

  //const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    username: "",
    email: "",
    banned: false, //ver xq esta como booleano
    password: "",
    image: "",
    date: "",
    description: "",
    genre: [],
  });
  
  //history.push("/home");
/* 
  useEffect(() => {

    
  }, []); */

  function handleInputChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }



  const genre = ['male', 'female']


  return (
    <div>
     {/*  <div>
        <Link to="/home">
          <button>BACKOALA</button>
        </Link>
      </div> */}
      <div class='justify-center border-solid border-2 border-black m-auto text-center bg mx-20' >
        <h1 class='mb-10'>Create User</h1>
        <img class='justify-center m-auto relative bottom-8 h-85' src={img} alt="" />
        <form class=' relative bottom-60 bg-[#5E9FA3] justify-center w-[525px] m-auto p-[10px] pb-40'>
          <div class='my-4 mr-20 grid grid-cols-2'>
            <label class='text-slate-900'>Username: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md text-right w-[250px]'
              key="username"
              type="text"
              name="username"
              value={input.username}
            >

            </input>
          </div>

          <div class='my-4  mr-20 grid grid-cols-2' >
            <label class=''>Email: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md text-right w-[250px]'
              key="email"
              type="text"
              name="email"
              value={input.email}
            />
          </div>

          <div class='my-4  mr-20 grid grid-cols-2'>
            <label>Password: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md text-right w-[250px]'
              key="password"
              type="password"
              name="password"
              value={input.password}
            />
          </div>

          <div class='my-4  mr-20 grid grid-cols-2'>
            <label>Image: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md text-right w-[250px]'
              key="image"
              type="text"
              name="image"
              value={input.image}
            />
          </div>

          <div class='my-4  mr-20 grid grid-cols-2'>
            <label>Date: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md w-[250px] text-center'
              key="date"
              type="date"
              name="date"
              value={input.date}
            />
          </div>

          <div class='my-4 mr-20 grid grid-cols-2'>
            <label>Description: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md  w-[250px]'
              key="description"
              type="text"
              name="description"
              value={input.description}
            />
          </div>

          <div class='my-4  mr-20 grid grid-cols-2'>
            <label>Genre</label>
            <select name="genre" class='rounded-md w-[250px] text-center' required onChange = {
              (e) => handleInputChange(e)}>
                <option value="">Select Genre</option>
                {
                  genre.map(genre => (
                    <option value={genre} key={genre}>{genre}</option>
                  ))
                }
              </select>
          </div>
        </form>
      </div>
    </div>
  );
};


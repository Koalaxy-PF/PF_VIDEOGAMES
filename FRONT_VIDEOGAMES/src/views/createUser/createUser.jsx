import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import {Link} from "react-router-dom";
//import validate from "./validators.jsx";

export default function CreateUser() {
 // const dispatch = useDispatch();
  //const history = useHistory();

  //const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    username: "",
    email: "",
    banned: "", //ver xq esta como booleano
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
      <div>
        <h1>Create User</h1>
        <form>
          <div class='my-4'>
            <label>Username: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='border-solid border-2 border-black rounded-md'
              key="username"
              type="text"
              name="username"
              value={input.username}
            >

            </input>
          </div>

          <div class='my-4' >
            <label>Email: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='border-solid border-2 border-black rounded-md'
              key="email"
              type="text"
              name="email"
              value={input.email}
            />
          </div>

          <div class='my-4'>
            <label>Password: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='border-solid border-2 border-black rounded-md'
              key="password"
              type="password"
              name="password"
              value={input.password}
            />
          </div>

          <div class='my-4'>
            <label>Image: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='border-solid border-2 border-black rounded-md'
              key="image"
              type="text"
              name="image"
              value={input.image}
            />
          </div>

          <div class='my-4'>
            <label>Date: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='border-solid border-2 border-black rounded-md'
              key="date"
              type="date"
              name="date"
              value={input.date}
            />
          </div>

          <div class='my-4'>
            <label>Description: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='border-solid border-2 border-black rounded-md'
              key="description"
              type="text"
              name="description"
              value={input.description}
            />
          </div>

          <div class='my-4'>
            <label>Genre</label>
            <select name="genre" class='border-solid border-2 border-black rounded-md' required onChange = {
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


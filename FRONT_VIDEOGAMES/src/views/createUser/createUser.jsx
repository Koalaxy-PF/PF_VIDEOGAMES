import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import validate from "./validators.jsx";

export default function CreateUser() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState({});

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

  useEffect(() => {

    
  }, []);

  function handleInputChange(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    if(input.username && input.email && input.password && input.image && input.date && input.description && input.genre){
        dispatch(createUser(input));
        setInput({
            username: "",
            email: "",
            password: "",
            image: "",
            date: "",
            description: "",
            genre: [],
        });
    }
  };

  const genre = ['male', 'female']

  return (
    <div>
      <div>
        <Link to="/home">
          <button>BACKOALA</button>
        </Link>
      </div>
      <div>
        <h1>Create User</h1>
        <form>
          <div>
            <label>Username: </label>{" "}
            <input
              key="username"
              type="text"
              name="username"
              value={input.username}
            ></input>
          </div>

          <div>
            <label>Email: </label>{" "}
            <input
              key="email"
              type="text"
              name="email"
              value={input.email}
            ></input>
          </div>

          <div>
            <label>Password: </label>{" "}
            <input
              key="password"
              type="password"
              name="password"
              value={input.password}
            ></input>
          </div>

          <div>
            <label>Image: </label>{" "}
            <input
              key="image"
              type="text"
              name="image"
              value={input.image}
            ></input>
          </div>

          <div>
            <label>Date: </label>{" "}
            <input
              key="date"
              type="date"
              name="date"
              value={input.date}
            ></input>
          </div>

          <div>
            <label>Description: </label>{" "}
            <input
              key="description"
              type="text"
              name="description"
              value={input.description}
            ></input>
          </div>

          <div>
            <label>Genre</label>
            <select name="genre" required onChange={
                (e) => handleInputChange(e)}>
                    <option value="">Select Genre</option>
                    {
                        genre.map(genre => (
                            <option value={genre} key={genre}>{genre}</option>
                        ))
                    }
                </select>
          </div>

          <div>
            <button type="submit">Create User</button>
          </div>

        </form>
      </div>
    </div>
  );
};


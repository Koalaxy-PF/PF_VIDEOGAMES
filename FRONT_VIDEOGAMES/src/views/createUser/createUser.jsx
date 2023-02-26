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

        </form>
      </div>
    </div>
  );
}

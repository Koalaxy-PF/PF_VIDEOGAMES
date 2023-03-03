import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import {Link} from "react-router-dom";
//import validate from "./validators.jsx";
import img from '../../assets/create/KoalaForm2.png'
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";

export default function CreateGame() {
 // const dispatch = useDispatch();
  //const history = useHistory();

  //const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    stock: "",
    price: "",
    password: "",
    img: "",
    comments: "",
    calification: "",
    company:"",
    released: "",
    minRequeriments: "",
    recommendRequeriments: "",
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



  const genre = ['action', 'adventure', 'shooter']


  return (
    <div>
        <div>
            <NavBar/>
        </div>

        <div>
            <Sidebar/>
        </div>
     {/*  <div>
        <Link to="/home">
          <button>BACKOALA</button>
        </Link>
      </div> */}
      <div class='justify-center border-solid border-2 border-black m-auto text-center bg mx-20 ml-[100px] relative bottom-[600px]' >
        <h1 class='text-5xl pt-[50px] bg-[#5E9FA3] mx-[380px] py-[50px] mt-[20px] rounded-lg text-white relative right-[20px]'>Create Game</h1>
        <img class='justify-center m-auto relative bottom-[100px] h-85 z-10 w-[800px] ' src={img} alt="" />
        <form class=' relative bottom-[220px] right-[17px] bg-[#5E9FA3] justify-center w-[530px] m-auto pt-[100px] pb-40 '>
          <div class='my-4 mr-20 grid grid-cols-2'>
            <label class='text-white'><ion-icon name="home-outline"></ion-icon></label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md text-left w-[250px]' placeholder="Name"
              key="name"
              type="text"
              name="name"
              value={input.name}
            >

            </input>
          </div>

          <div class='my-4  mr-20 grid grid-cols-2' >
            <label class='text-white'>Price: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md text-left w-[250px]'
              key="price"
              type="text"
              name="price"
              value={input.price}
            />
          </div>

          <div class='my-4  mr-20 grid grid-cols-2'>
            <label class='text-white'>Stock: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md text-left w-[250px]'
              key="stock"
              type="number"
              name="stock"
              value={input.stock}
            />
          </div>

          <div class='my-4  mr-20 grid grid-cols-2'>
            <label class='text-white'>Img: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md text-left w-[250px]'
              key="img"
              type="text"
              name="img"
              value={input.img}
            />
          </div>

          <div class='my-4  mr-20 grid grid-cols-2'>
            <label class='text-white'>Comments: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md text-left w-[250px]'
              key="comments"
              type="text"
              name="comments"
              value={input.comments}
            />
          </div>

          <div class='my-4  mr-20 grid grid-cols-2'>
            <label class='text-white'>Calification: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md text-left w-[250px]'
              key="calification"
              type="number"
              name="calification"
              value={input.calification}
            />
          </div>

          <div class='my-4  mr-20 grid grid-cols-2'>
            <label class='text-white'>Company: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md text-left w-[250px]'
              key="company"
              type="text"
              name="company"
              value={input.company}
            />
          </div>

          <div class='my-4  mr-20 grid grid-cols-2'>
            <label class='text-white'>Released: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md w-[250px] text-center'
              key="released"
              type="date"
              name="released"
              value={input.released}
            />
          </div>

          <div class='my-4  mr-20 grid grid-cols-2'>
            <label class='text-white'>Min Requeriments: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md text-left w-[250px]'
              key="minRequeriments"
              type="text"
              name="minRequeriments"
              value={input.minRequeriments}
            />
          </div>

          <div class='my-4  mr-20 grid grid-cols-2'>
            <label class='text-white'>Recomment Requeriments: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md text-left w-[250px]'
              key="recommendRequeriments"
              type="text"
              name="recommendRequeriments"
              value={input.recommendRequeriments}
            />
          </div>

          <div class='my-4 mr-20 grid grid-cols-2'>
            <label class='text-white'>Description: </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md  w-[250px]'
              key="description"
              type="text"
              name="description"
              value={input.description}
            />
          </div>

          <div class='my-4  mr-20 grid grid-cols-2'>
            <label class='text-white'>Genre</label>
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
      <div>
        <Footer/>
      </div>
    </div>
  );
};

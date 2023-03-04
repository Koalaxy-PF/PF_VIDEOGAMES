import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import {Link} from "react-router-dom";
//import validate from "./validators.jsx";
import img from '../../assets/create/KoalaForm2.png'
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";
import { GetGames, PostGame } from "../../redux/actions/actions";
import validate from "./validators";

const validateForm = (input) => {
  const error = {};
  if(!input.name.length) error.name = <h3>Name is required</h3>
  if(!input.price.length) error.price = <h3>Price is required</h3>
  if(!input.img.length) error.img = <h3>Img is required</h3>
  if(!input.comments.length) error.comments = <h3>Comments are required</h3>
  if(!input.calification.length) error.calification = <h3>Calification is required</h3>
  if(!input.company.length) error.company = <h3>Company is required</h3>
  if(!input.released.length) error.released = <h3>Released is required</h3>
  if(!input.minRequeriments.length) error.minRequeriments = <h3>Min requeriments are required</h3>
  if(!input.recommendRequeriments.length) error.recommendRequeriments = <h3>Recommend requriments are required</h3>
  if(!input.description.length) error.description = <h3>Description is required</h3>
  if(!input.genre.length) error.genre = <h3>Genre is required</h3>

  return error;
}

export default function CreateGame() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetGames());
  },[dispatch]);

 /*  const games= useSelector((state) => state.Games);

  function handleSelect(e) {
    if (input.games.includes(e.target.value)) {
      alert("The activity already has that country");
    } else {
      setInput({
        ...input,
        games: [...input.games, e.target.value],
      });
    }
  } */
 // const dispatch = useDispatch();
  //const history = useHistory();

  //const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    stock: "",
    price: "",
    img: "",
    comments: "",
    calification: "",
    company:"",
    released: "",
    minRequeriments: "",
    recommendRequeriments: "",
    description: "",
    genre: "",
  });

  const [error, setError] = useState({});


  
  //history.push("/home");
/* 
  useEffect(() => {

    
  }, []); */

  function handleInputChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

    setError(validateForm({
      ...input,
      [e.target.name]: e.target.value
    }))
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !input.name ||
      !input.stock ||
      !input.price ||
      !input.img ||
      !input.genre
    ) {
      console.log("El input", input);
      return alert("Complete all required fields");
    }
    PostGame(input);
    alert("Game created");
    console.log(input);
    setInput({
      name: "",
      stock: 1,
      price: "",
      img: "",
      genre: [],
    });
  }


  // function handleSubmit(e){
  //   e.preventDefault();
  //   if(input.name && input.price && input.password && input.img && input.comments && input.calification && input.company && input.minRequeriments && input.recommendRequeriments && input.description){
  //     dispatch(PostGame(input));
  //     alert("Game created");
  //     setInput({
  //       name: "",
  //       stock: "",
  //       price: "",
  //       password: "",
  //       img: "",
  //       comments: "",
  //       calification: "",
  //       company:"",
  //       released: "",
  //       minRequeriments: "",
  //       recommendRequeriments: "",
  //       description: "",
  //       genre: "",
  //     });
  //   }
  //   else alert("Please complete all fields")
  // }



  const genre = ['action', 'adventure', 'shooter']


  return (
    <div className="bg-gray-300 w-full">
        <div class='bg-gray-300 flex justify-center text-center'>
            <div class=' relative bg-gray-300 '>
        {/* <h1 class='text-5xl pt-[50px] bg-[#5E9FA3] mx-[380px] py-[50px] mt-[20px] rounded-lg text-white relative right-[20px]'>Create Game</h1> */}
        <img class='justify-center m-auto relative h-85 z-10 w-[600px] top-[20px] ' src={img} alt="" />
        <form onSubmit={(e) => handleSubmit(e)} class=' relative bottom-[60px] bg-[#5E9FA3] justify-center w-[530px] m-auto pt-[55px] pb-20 text-center'>
          <div>
          <div class='my-4 mr-20 flex justify-center'>
            <label class='text-white relative right-[3px] left-[30px]'><ion-icon name="clipboard-outline"></ion-icon></label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md w-[320px] relative left-[35px]' placeholder="Name"
              key="name"
              type="text"
              name="name"
              value={input.name}
            >
            </input>
          </div>

          <div class='flex justify-center'>
          {error.name && <span >{error.name}</span>}
          </div>



          <div class='my-4  flex justify-center' >
            <div class='mr-[10px]'>
            <label class='text-white'><ion-icon name="cash-outline"></ion-icon></label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md text-left w-[150px]' placeholder="Price"
              key="price"
              type="text"
              name="price"
              value={input.price}
            />
            </div>

            <div>
            <label class='text-white'><ion-icon name="grid-outline"></ion-icon></label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md text-left w-[150px]' placeholder="Stock"
              key="stock"
              type="number"
              name="stock"
              value={input.stock}
            />
            </div>


          </div>

          
          <div class='flex justify-center'>
          {error.price && <span >{error.price}</span>}
          </div>

          <div class='my-4 mr-20 flex justify-center'>
            <label class='text-white relative right-[3px] left-[30px]'><ion-icon name="image-outline"></ion-icon> </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md w-[320px] relative left-[35px]' placeholder="Img"
              key="img"
              type="text"
              name="img"
              value={input.img}
            />
          </div>

          <div class='flex justify-center'>
          {error.img && <span >{error.img}</span>}
          </div>

          <div class='my-4 mr-20 flex justify-center'>
            <label class='text-white relative right-[3px] left-[30px]'><ion-icon name="chatbubbles-outline"></ion-icon> </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md w-[320px] relative left-[35px]' placeholder="Comments"
              key="comments"
              type="text"
              name="comments"
              value={input.comments}
            />
          </div>

          <div class='my-4 mr-20 flex justify-center'>
            <label class='text-white relative right-[3px] left-[30px]'><ion-icon name="star-half-outline"></ion-icon></label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md w-[320px] relative left-[35px]' placeholder="Calification"
              key="calification"
              type="number"
              name="calification"
              value={input.calification}
            />
          </div>

          <div class='my-4 mr-20 flex justify-center'>
            <label class='text-white relative right-[3px] left-[30px]'><ion-icon name="business-outline"></ion-icon></label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md w-[320px] relative left-[35px]' placeholder="Company"
              key="company"
              type="text"
              name="company"
              value={input.company}
            />
          </div>

          <div class='my-4 mr-20 flex justify-center'>
            <label class='text-white relative right-[3px] left-[30px]'><ion-icon name="calendar-outline"></ion-icon> </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md w-[320px] relative left-[35px]' placeholder="Released"
              key="released"
              type="date"
              name="released"
              value={input.released}
            />
          </div>

          <div class='my-4 mr-20 flex justify-center'>
            <label class='text-white relative right-[3px] left-[30px]'><ion-icon name="desktop-outline"></ion-icon></label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md w-[320px] relative left-[35px]' placeholder="Min requeriments"
              key="minRequeriments"
              type="text"
              name="minRequeriments"
              value={input.minRequeriments}
            />
          </div>

          <div class='my-4 mr-20 flex justify-center'>
            <label class='text-white relative right-[3px] left-[30px]'><ion-icon name="desktop-outline"></ion-icon> </label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md w-[320px] relative left-[35px]' placeholder="Recommend requeriments"
              key="recommendRequeriments"
              type="text"
              name="recommendRequeriments"
              value={input.recommendRequeriments}
            />
          </div>

          <div class='my-4 mr-20 flex justify-center'>
            <label class='text-white relative right-[3px] left-[30px]'><ion-icon name="reader-outline"></ion-icon></label>{" "}
            <input onChange={(e) => handleInputChange(e)} class='rounded-md w-[320px] relative left-[35px]' placeholder="Description"
              key="description"
              type="text"
              name="description"
              value={input.description}
            />
          </div>

          <div class='my-4 mr-20 flex justify-center'>
            <label class='text-white relative right-[3px] left-[30px]'><ion-icon name="trophy-outline"></ion-icon></label>
            <select name="genre" class='rounded-md w-[320px] relative left-[35px]' required onChange = {
              (e) => handleInputChange(e)}>
                <option value="">Select Genre</option>
                {
                  genre.map(genre => (
                    <option value={genre} key={genre}>{genre}</option>
                  ))
                }
              </select>
          </div>

          <div class='justify-center text-center'>
            <button class='text-white relative top-[40px] hover:text-blue border border-white border-solid p-[10px]' type="submit">Create Game</button>
          </div>
          </div>

        </form>
      </div>
        </div>
     {/*  <div>
        <Link to="/home">
          <button>BACKOALA</button>
        </Link>
      </div> */}


    </div>
  );
};

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
//import {Link} from "react-router-dom";
//import validate from "./validators.jsx";
import img from '../../assets/login/koala_login.jpg'
import Footer from "../../components/Footer/Footer";


// const validateForm = (input) => {
//   const error = {};
//   if(!input.username.length) error.username = <h3>username is required</h3>
//   if(!input.email.length) error.email = <h3>email is required</h3>
//   if(!input.name.length) error.name = <h3>name is required</h3>
//   if(!input.last_name.length) error.last_name = <h3>last name is required</h3>
//   if(!input.password.length) error.password = <h3>password is required</h3>
//   if(!input.img.length) error.img = <h3>img is required</h3>
//   if(!input.date.length) error.date = <h3>date is required</h3>
//   if(!input.description.length) error.description = <h3> description is required</h3>
//   if(!input.genre.length) error.genre = <h3>genre is required</h3>
//   // if(!input.baned.length) error.baned = <h3>baned is required</h3>
//   // if(!input.is_admin.length) error.is_admin = <h3>is admin is required</h3>

//   return error;
// }



export default function CreateUser() {
 const dispatch = useDispatch();
  //const history = useHistory();

  const [error, setErrors] = useState({});

  const { register, formState: { errors }, watch, handleSubmit } = useForm({
    defaultValues: {
        img: 'https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png',
        is_banned: false
    }
});
  // const [input, setInput] = useState({
  //   username: "",
  //   email: "",
  //   name: "",
  //   last_name: "",
  //   banned: false, //ver xq esta como booleano
  //   password: "",
  //   img: "",
  //   date: "",
  //   description: "",
  //   genre: [],
  // });

  
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

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (
  //     !input.username ||
  //     !input.email ||
  //     !input.name ||
  //     !input.last_name ||
  //     !input.password ||
  //     !input.date
  //   ) {
  //     console.log("El input", input);
  //     return alert("Complete all required fields");
  //   }
  //   // PostUser5(input);
  //   alert("User created");
  //   console.log(input);
  //   setInput({
  //     username: "",
  //     email: "",
  //     name: "",
  //     last_name: "",
  //     password: "",
  //     date: "",
  //   });
  // }


  const genre = ['male', 'female']

  const onSubmit = (data) => {
    console.log(data);
}


  return (
    <div >

        <div className="flex">
            <div>
              <img class='w-[750px] ' src={img} alt="" /> 
            </div>

          {/*  <div>
              <Link to="/home">
                <button>BACKOALA</button>
              </Link>
            </div> */}
            <div className="justify-center text-center m-auto" >
              
            
              <form onSubmit={handleSubmit(onSubmit)} class=' relative bottom-[60px] bg-[#5E9FA3] justify-center w-[530px] m-auto pt-[55px] pb-20 text-center border-gray-400 '>
                 <h1 class='text-[30px] mb-[50px] text-white'>Create User</h1>
                <div class='my-4 mr-20 grid grid-cols-2 justify-center'>
                  <label class='text-black '>Username: </label>
                  <input  class='rounded-md w-[250px] relative '    
                    type="text" {...register('username' , {
                    required: true,
                    maxLength: 50,
                    minLength: 3
                    })} />
                      {errors.username?.type === 'required' && <p class='text-red-600'> the user name is required</p>}
                      {errors.username?.type === 'maxLength' && <p class='text-red-600'>the maximum capacity of characters allowed is 50</p>}
                      {errors.username?.type === 'minLength' && <p class='text-red-600'>the minimum capacity of characters allowed is 3</p>}
                </div>

                {/* <div class='flex justify-center'>
                {error.username && <span >{error.username}</span>}
                </div> */}

                <div class='my-4  mr-20 grid grid-cols-2' >
                <label class='text-black '>Email</label>
                      <input type="text" {...register('email', {
                          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                          required: true,
                          maxLength: 50,
                          minLength: 3
                      })} />
                      {errors.email?.type === 'pattern' && <p class='text-red-600'>The email format is incorrect</p>}
                      {errors.email?.type === 'required' && <p class='text-red-600'> the email is required</p>}
                      {errors.email?.type === 'maxLength' && <p class='text-red-600'>the maximum capacity of characters allowed is 50</p>}
                      {errors.email?.type === 'minLength' && <p class='text-red-600'>wrong email</p>}
                </div>

                {/* <div class='flex justify-center'>
                {error.email && <span >{error.email}</span>}
                </div> */}

                <div class='my-4  mr-20 grid grid-cols-2'>
                <label class='text-black '>Name</label>
                      <input type="text" {...register('nombre', {
                          required: true
                      })} />
                </div>

                {/* <div class='flex justify-center'>
                {error.name && <span >{error.name}</span>}
                </div> */}

                <div class='my-4  mr-20 grid grid-cols-2'>
                  <label class='text-black'> Last name: </label>
                  <input  class='rounded-md w-[250px] relative'
                
                    type="text"  {...register('last_name', {
                      required: true,
                  })} />
                  {errors.last_name?.type === 'required' && <p class='text-red-600' >the last name is required</p>}
                </div>
      {/* 
                <div class='flex justify-center'>
                {error.last_name && <span >{error.last_name}</span>}
                </div> */}

                <div class='my-4  mr-20 grid grid-cols-2'>
                  <label class='text-black'>Password: </label>
                  <input  class='rounded-md w-[250px] relative'
              
                  type="password" {...register('password', {
                    required: true,
                })} />
                {errors.password?.type === 'required' && <p class='text-red-600'>the passaword is required</p>}
                </div>

                {/* <div class='flex justify-center'>
                {error.password && <span >{error.password}</span>}
                </div> */}


                <div class='my-4  mr-20 grid grid-cols-2'>
                  <label class='text-black'>Image: </label>
                  <input  class='rounded-md w-[250px] relative'
                
                    type="text"
            
                  />
                </div>

                <div class='my-4  mr-20 grid grid-cols-2'>
                  <label class='text-black'>Date: </label>
                  <input  class='rounded-md w-[250px] relative'
                
                    type="date" {...register('date', {
                      required: true,
                  })} />
                  {errors.date?.type === 'required' && <p class='text-red-600'> the date is required</p>}
                </div>

                {/* <div class='flex justify-center'>
                {error.date && <span >{error.date}</span>}
                </div> */}

                <div class='my-4 mr-20 grid grid-cols-2'>
                  <label class='text-black'>Description: </label>
                  <input  class='rounded-md w-[250px] relative'
              
                    type="text" 

                  />
                </div>

                <div class='my-4  mr-20 grid grid-cols-2'>
                  <label class='text-black'>Genre</label>
                  <select name="genre" class='rounded-md w-[250px] relative' >
                      <option value="">Select Genre</option>
                      {
                        genre.map(genre => (
                          <option value={genre} key={genre}>{genre}</option>
                        ))
                      }
                    </select>
                </div>

                <div class='justify-center text-center'>
                <button class='text-white relative top-[40px] hover:text-blue border border-white border-solid p-[10px]' type="submit">Create User</button>
                </div>
              </form>
            </div>
        </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

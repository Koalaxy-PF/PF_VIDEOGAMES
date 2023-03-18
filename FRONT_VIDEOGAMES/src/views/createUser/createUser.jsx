import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
//import {Link} from "react-router-dom";
import { edadValidator } from "./validators";
import img from '../../assets/login/koala_login.jpg'
import logo from '../../assets/icons/koalaLogo.png';
import Footer from "../../components/Footer/Footer";
import { Register } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import seePassaword from "../../assets/icons/seePassword.png";
import Sidebar from "../../components/SideBar/Sidebar"
import NavBar from "../../components/Navbar/Navbar";


// const validateForm = (input) => {
//   const error = {};
//   // if(!input.username.length) error.username = <h3>username is required</h3>
//   // if(!input.email.length) error.email = <h3>email is required</h3>
//   // if(!input.name.length) error.name = <h3>name is required</h3>
//   // if(!input.last_name.length) error.last_name = <h3>last name is required</h3>
//   // if(!input.password.length) error.password = <h3>password is required</h3>
//   // if(!input.img.length) error.img = <h3>img is required</h3>
//   // if(!input.date.length) error.date = <h3>date is required</h3>
//   // if(!input.description.length) error.description = <h3> description is required</h3>
//   if(!input.genre.length) error.genre = <h3>genre is required</h3>
//   // if(!input.baned.length) error.baned = <h3>baned is required</h3>
//   // if(!input.is_admin.length) error.is_admin = <h3>is admin is required</h3>

//   return error;
// }

export default function CreateUser(){

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [error, setErrors] = useState({});

  const [showPwd, setShowPwd] = useState(false)

  const { register, formState: { errors }, watch, handleSubmit } = useForm({
    defaultValues: {
        img: 'https://i.pinimg.com/736x/0c/4f/72/0c4f72fe65bb7bd9db63ce5021c1371a.jpg',
        is_banned: false,
        description: ""
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
    dispatch(Register(data)).then((response) => {
      Swal.fire({
        title: '¡Buen trabajo!',
        text: response.data.message,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Continuar'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/Login");
      }})})
      .catch((err) => {
        Swal.fire({
          tittle: '¡Ops! Hay un problema',
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Continuar"
        })
      })
    }

  return (
    <div className="h-full">

      <div>
        <NavBar/>
      </div>

      <div className="flex min-height-full  item-center bg-gray-200 ">

        <div className='flex min-h-[calc(100vh-5rem)]'>
        <Sidebar/>
        </div>

        <div className="flex min-height-full justify-center " >


            <div className="hidden lg:block relative h-full'">
              <img class='w-[750px] object-cover' src={img} alt="" /> 
            </div>

            <div className="justify-center flex-1 flex flex-col py-10 px-0 sm:px-8 lg:px-20 sm:py-9 md:py-9  xl:px-24" >

                <div class='text-center lg:text-left flex justify-center'>
                  <img class='h-12 w-auto m-auto lg:m-0' src={logo} alt="" />
                  <h2 class='mt-6 text-3xl font-extrabold text-gray-900'>Create User</h2>
                </div>
              
                <div class='mt-6'>
                <form onSubmit={handleSubmit(onSubmit)} class='space-y-1'>

                  <div class='grid grid-cols-1 lg:grid-cols-2 lg:gap-3'>



                      <div >
                        <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Username: </label>
                        <input  class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  placeholder='Username'  
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

                      <div >
                      <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Email</label>
                            <input type="text" class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  placeholder='Email'  {...register('email', {
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

                      <div >
                      <label class='text-black '>Name</label>
                            <input type="text" class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Name' {...register('name', {
                                required: true
                            })} />
                            {errors.name?.type === 'required' && <p class='text-red-600'> the Name is required</p>}
                      </div>

                      {/* <div class='flex justify-center'>
                      {error.name && <span >{error.name}</span>}
                      </div> */}

                      <div>
                        <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'> Last name: </label>
                        <input  class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Last name'
                      
                          type="text"  {...register('last_name', {
                            required: true,
                        })} />
                        {errors.last_name?.type === 'required' && <p class='text-red-600' >the last name is required</p>}
                      </div>
                  {/* 
                      <div class='flex justify-center'>
                      {error.last_name && <span >{error.last_name}</span>}
                      </div> */}

                      <div >
                        <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Password: </label>

                          <div className="  flex item-center justify-between flex-wrap bg-white mt-2 shadow appearance-none  p-4 rounded w-full py-2 px-3 text-gray-700 leading-tight ">
                              <input  placeholder='Password ' className="  focus:outline-none"
                        
                        type={showPwd ? "text" : "password"} {...register('password', {
                            pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/ ,
                            required: true,
                            maxLength: 16,
                            minLength: 8
                        })} />
                          <a class="block lg:inline-block lg:mt-0 " onClick={() => setShowPwd(!showPwd)}> <img  class= " z-6 inset-y-0 my-auto h-6 active:bg-gray-600 active:rounded-full"src = {seePassaword}/> </a>
                        </div>
                        {errors.password?.type === 'required' && <p class='text-red-600'>the passaword is required</p>}
                        {errors.password?.type === 'pattern' && <p class='text-red-600'>the password at least one digit, at least one lower case and at least one upper case.</p>}
                        {errors.password?.type === 'maxLength' && <p class='text-red-600'>must have a maximum of 16 characters</p>}
                        {errors.password?.type === 'minLength' && <p class='text-red-600'>must contain at least 8 characters</p>}

                      </div>

                      {/* <div class='flex justify-center'>
                      {error.password && <span >{error.password}</span>}
                      </div> */}


                      <div >
                        <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Image: </label>
                        <input  class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='img'
                      
                          type="text"

                        />
                      
                      </div>

                      <div >
                        <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Date: </label>
                        <input  class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='date'
                      
                          type="date" {...register('date', {
                            required: true,
                            validate: edadValidator
                        })} />
                        {errors.date?.type === 'required' && <p class='text-red-600'> the date is required</p>}
                        {errors.date && <p class='text-red-600'>You have to be over 14 years old to register</p>}
                      </div>

                      {/* <div class='flex justify-center'>
                      {error.date && <span >{error.date}</span>}
                      </div> */}

  

                      <div >
                        <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Genre</label>

                        <select name="genre" class='mt-2 shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' {...register('genre', {

                            required: true,
                        })} >
                            <option value="">Select Genre</option>
                            {
                              genre.map(genre => (
                                <option value={genre} key={genre}>{genre}</option>
                              ))
                            }
                    
                          </select>
                          {errors.genre?.type === 'required' && <p class='text-red-600'> the genre is required</p>}
                      </div>



                      </div>

                      <div>
                          <button class='mt-4 w-full py-3 bg-gray-900 text-white' type='submit'>Register</button>
                      </div>

                  </form>
                </div>
            
             
            </div>
        </div>
      </div>
      
      <div>
        <Footer/>
      </div>
    </div>
  );
};
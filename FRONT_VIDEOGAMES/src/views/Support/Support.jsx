import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Register } from "../../redux/actions/actions";
import img from "../../assets/Support/planet.gif";
import logo from "../../assets/icons/koalaLogo.png";
import Footer from "../../components/Footer/Footer";
import Swal from "sweetalert2";
import NavBar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";

export default function Support() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setErrors] = useState({});

  const [showPwd, setShowPwd] = useState(false);

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({
    defaultValues: {
      is_banned: false,
      description: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(Register(data))
      .then((response) => {
        Swal.fire({
          title: "¡Buen trabajo!",
          text: response.data.message,
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Continuar",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/Support");
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          tittle: "¡Ops! Hay un problema",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Continuar",
        });
      });
  };

  return (
    <div className="h-full">
      <div>
        <NavBar />
      </div>

      <div className="flex min-height-full  item-center bg-gray-200 ">
        <div className="flex min-h-[calc(100vh-5rem)]">
          <Sidebar />
        </div>

        <div className="flex min-height-full justify-center item-center">
          <div className="hidden lg:block relative h-full flex-1">
            <img class="mx-20 w-[350px] h-[260px] mt-10" src={img} alt="" />
          </div>

          <div className="justify-center flex-1 flex flex-col py-10 px-0 sm:px-8 lg:px-20 sm:py-9 md:py-9  xl:px-24">
            <div class="text-center lg:text-left flex justify-center">
              <img class="h-14 w-[55px]  m-auto lg:m-0" src={logo} alt="" />
              <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                Contact Us
              </h2>
            </div>

            <div class="mt-6 mx-20">
              <form onSubmit={handleSubmit(onSubmit)} class="space-y-1">
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
                  <div></div>
                </div>

                {/* <div class='flex justify-center'>
                      {error.email && <span >{error.email}</span>}
                      </div> */}

                <div>
                  <label class="text-black ">Name</label>
                  <input
                    type="text"
                    class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Name"
                    {...register("name", {
                      required: true,
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <p class="text-red-600"> the Name is required</p>
                  )}
                </div>

                {/* <div class='flex justify-center'>
                      {error.name && <span >{error.name}</span>}
                      </div> */}
                <div>
                  <label class="block text-sm font-medium text-gray-600 mt-2 lg:mt-0">
                    Email
                  </label>
                  <input
                    type="text"
                    class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                    {...register("email", {
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                      required: true,
                      maxLength: 50,
                      minLength: 3,
                    })}
                  />
                  {errors.email?.type === "pattern" && (
                    <p class="text-red-600">The email format is incorrect</p>
                  )}
                  {errors.email?.type === "required" && (
                    <p class="text-red-600"> the email is required</p>
                  )}
                  {errors.email?.type === "maxLength" && (
                    <p class="text-red-600">
                      the maximum capacity of characters allowed is 50
                    </p>
                  )}
                  {errors.email?.type === "minLength" && (
                    <p class="text-red-600">wrong email</p>
                  )}
                </div>

                <div>
                  {/*   <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'> Last name: </label>
                        <input  class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Last name'
                      
                          type="text"  {...register('last_name', {
                            required: true,
                        })} />
                        {errors.last_name?.type === 'required' && <p class='text-red-600' >the last name is required</p>} */}
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-600 mt-2 lg:mt-0">
                    Description:{" "}
                  </label>
                  <textarea
                    class="mt-4 shadow appearance-none border rounded w-full py-12 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    /*  placeholder="description" */
                    type="textarea"
                    {...register("description", {
                      required: true,
                    })}
                  />
                  {errors.description?.type === "required" && (
                    <p class="text-red-600"> the description is required</p>
                  )}
                </div>

                <div>
                  <button
                    class="mt-4 w-full py-3 bg-gray-900 text-white"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

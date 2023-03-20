import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postSupport, postSupport_OK } from "../../redux/actions/actions";
import img from "../../assets/Support/spae-planet.gif";
import logo from "../../assets/icons/koalaLogo.png";
import Footer from "../../components/Footer/Footer";
import Swal from "sweetalert2";
import NavBar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";

export default function Support() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    dataSupport,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(postSupport(data))
      .then((response) => {
        dispatch(postSupport_OK(response.data)).then(() => {
          Swal.fire({
            title: "¡Thank you for contacting us!",
            text: response.data.message,
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Continue",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/Home");
              console.log(result);
            }
          });
        });
      })
      .catch((err) => {
        Swal.fire({
          tittle: "¡Ops! There is a problem",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Continue",
        });
      });
  };

  return (
    <div className="h-full" >
      <div>
        <NavBar />
      </div>

      <div className="flex min-height-full  item-center bg-gray-200 " style={{backgroundImage: `url('https://www.xtrafondos.com/descargar.php?id=4047&resolucion=3840x2400')`, backgroundSize: 'cover'}}>
        <div className="flex min-h-[calc(100vh-5rem)]">
          <Sidebar />
        </div>

        <div className="flex flex-col justify-center item-center   h-full w-full">


          <div className="flex flex-col justify-center item-center h-full w-[650px] p-40 sm:px-0 lg:flex-none lg:px-0 mx-auto ">
            <div class="text-center lg:text-left flex justify-center">
              <img class="h-14 w-[55px]  m-auto lg:m-0" src={logo} alt="" />
              <h2 class="mt-6 text-3xl font-extrabold text-white">
                Contact Us
              </h2>
            </div>

            <div class="mt-6 mx-20">
              <form onSubmit={handleSubmit(onSubmit)} class="space-y-1">
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
                  <div></div>
                </div>

             

                <div>
                  <label class="block text-sm font-extrabold text-white mt-2 lg:mt-0 ">
                    Name
                  </label>
                  <input
                    type="text"
                    class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Name"
                    {...register("name", {
                      required: true,
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <p class="text-red-500 font-extrabold"> the Name is required</p>
                  )}
                </div>

              
                <div>
                  <label class="block text-sm  font-extrabold mt-2 lg:mt-0 text-white">
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
                    <p class="text-red-500 font-extrabold">The email format is incorrect</p>
                  )}
                  {errors.email?.type === "required" && (
                    <p class="text-red-500 font-extrabold"> the email is required</p>
                  )}
                  {errors.email?.type === "maxLength" && (
                    <p class="text-red-500 font-extrabold">
                      the maximum capacity of characters allowed is 50
                    </p>
                  )}
                  {errors.email?.type === "minLength" && (
                    <p class="text-red-500 font-extrabold">wrong email</p>
                  )}
                </div>

                <div></div>

                <div>
                  <label class="block text-sm font-extrabold text-white mt-2 lg:mt-0">
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
                    <p class="text-red-500 font-extrabold"> the description is required</p>
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

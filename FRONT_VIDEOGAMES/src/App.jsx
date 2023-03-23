import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch} from "react-redux"
import Details from "./views/Details/Details"
import Home from "./views/Home/Home"
import CreateGame from "./views/CreateGame/CreateGame"
import UpdateGame from "./views/UpdateGame/UpdateGame"
import Store from './views/Store/Store'
import AboutUs from "./components/AboutUs/AboutUs"
import ReturnLandingPage from "./views/LandingPage/LandingPage"
import CreateUser from "./views/createUser/createUser"
import Login from "./views/Login/Login"
import QA from "./views/QA/QA"
import { Login_OK } from "../src/redux/actions/actions"
import WishList from "./views/WishList/WishList"
import ShoppingCart from "./views/ShoppingCart/ShoppingCart"
import Dashboard from "./views/Dashboard/Dashboard"
import Library from "./views/Library/Library"
import Support from "./views/Support/Support"
import Games from "./views/Dashboard/Games/Games"
import Profile from "./views/Profile/Profile"
import DashBoardUser from "./views/Dashboard/Users/DashBoardUser"
import Update from "./views/Dashboard/Update/Update"
import FormUpdateGame from "./components/FormUpdateGame/FormUpdateGame"

export default function App(){

  const dispatch = useDispatch();

  useEffect(() => {
    if(window.localStorage.getItem('info-token')){
      dispatch(Login_OK(JSON.parse(window.localStorage.getItem('info-token'))))
    }
  }, [])
  

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ReturnLandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/CreateGame" element={<CreateGame />} />
        <Route exact path="/UpdateGame" element={<UpdateGame />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/QA" element={<QA />} />
        <Route exact path="/products/:id" element={<Details/>} />
        <Route exact path="/CreateUser" element={<CreateUser/>} /> 
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/WishList" element={<WishList />} />
        <Route exact path="/ShoppingCart" element={<ShoppingCart />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Library" element={<Library />} />
        <Route exact path="/Support" element={<Support/>} />
        <Route exact path="/Games" element={<Games/>} />
        <Route exact path="/Profile" element={<Profile/>} />
        <Route exact path="/Dashboard/users" element={<DashBoardUser/>} />
        <Route exact path="/Update/:id" element={<FormUpdateGame/>} />
      </Routes>
    </div>
  );
}

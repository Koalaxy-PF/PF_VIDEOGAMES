import { Route, Routes } from "react-router-dom"
import {GetGames} from "../src/redux/actions/actions"
import { useEffect } from "react"
import {useDispatch} from "react-redux"
import Details from "./views/Details/Details"
import Home from "./views/Home/Home"
import CreateGame from "./views/CreateGame/CreateGame"
import Store from './views/Store/Store'
import AboutUs from "./components/AboutUs/AboutUs"
import ReturnLandingPage from "./views/LandingPage/LandingPage"
import QA from "./components/QA/QA"
import CreateUser from "./views/createUser/createUser"
import Login from "./views/Login/Login"
import WishList from "./views/WishList/WishList"

export default function App(){

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ReturnLandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/CreateGame" element={<CreateGame />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/QA" element={<QA />} />
        <Route exact path="/products/:id" element={<Details/>} />
        <Route exact path="/products/:id" element={<Details/>} /> 
        <Route exact path="/CreateUser" element={<CreateUser/>} /> 
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/WishList" element={<WishList />} />
      </Routes>
    </div>
  );
}

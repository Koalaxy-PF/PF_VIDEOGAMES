import { Route, Routes } from "react-router-dom"
import {GetGames} from "../src/redux/actions/actions"
import { useEffect } from "react"
import {useDispatch} from "react-redux"
import Home from "./views/Home/Home"
import CreateUser from "./views/createUser/createUser"
import CreateGame from "./views/CreateGame/CreateGame"
import Store from './views/Store/Store'
import AboutUs from "./components/AboutUs/AboutUs"
import {GetGames} from "../src/redux/actions/actions"
import ReturnLandingPage from "./views/LandingPage/LandingPage"


export default function App(){

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ReturnLandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/CreateGame" element={<CreateGame />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
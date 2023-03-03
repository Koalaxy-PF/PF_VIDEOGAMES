import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import {useDispatch} from "react-redux"
import Home from "./views/Home/Home";
import CreateUser from "./views/createUser/createUser";
import CreateGame from "./views/CreateGame/CreateGame";
import Details from "./views/Details/Details"
import Home from "./views/Home/Home"
import CreateUser from "./views/createUser/createUser"
import CreateGame from "./views/CreateGame/CreateGame"
import Store from './views/Store/Store'
import {GetGames} from "../src/redux/actions/actions"

export default function App(){



  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/CreateGame" element={<CreateGame />} />
        <Route exact path="/:id" element={<Details/>} /> 
      </Routes>
    </div>
  );
}


import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import Home from "./views/Home/Home";
import CreateUser from "./views/createUser/createUser";
import CreateGame from "./views/CreateGame/CreateGame";

import {GetGames} from "../src/redux/actions/actions"



export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetGames())
  }, [dispatch])


  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/CreateGame" element={<CreateGame />} />
      </Routes>
    </div>
  );
}


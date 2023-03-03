import { Route, Routes } from "react-router-dom";
import { useEffect  , useState } from "react";
import {useDispatch , useSelector} from "react-redux"
import Home from "./views/Home/Home";
import CreateUser from "./views/createUser/createUser";
import CreateGame from "./views/CreateGame/CreateGame";


export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/CreateGame" element={<CreateGame />} />
      </Routes>  
    </div>

    
  );
}


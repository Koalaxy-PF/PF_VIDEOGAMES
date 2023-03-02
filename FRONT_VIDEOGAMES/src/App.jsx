import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import CreateUser from "./views/createUser/createUser";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/CreateGame" element={<CreateUser />} />
      </Routes>
    </div>
  );
}


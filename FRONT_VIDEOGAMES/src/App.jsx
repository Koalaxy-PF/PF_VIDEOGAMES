import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import CreateUser from './views/createUser/createUser'
import Sidebar from './components/SideBar/Sidebar'
import Footer from './components/Footer/Footer'
import CreateGame from './views/CreateGame/CreateGame'

export default function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/CreateGame" element={<CreateGame/>}/>
        </Routes> 
      </div>
  )
}


import './App.css'
import CreateUser from './views/createUser/CreateUser'
import Navbar from "./components/Navbar/Navbar"
import SearchBar from './components/SearchBar/SearchBar'



function App(){

  return (
    <div className="App">
     
    <div>
      <Navbar/>
      <CreateUser/>
    </div>
    </div>
  )
}

export default App

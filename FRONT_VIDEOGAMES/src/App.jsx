import './App.css'
import Navbar from "./components/Navbar/Navbar"
import SearchBar from './components/SearchBar/SearchBar'
import CreateUser from './views/createUser/createUser'


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

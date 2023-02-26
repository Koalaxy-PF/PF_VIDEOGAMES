import './App.css'
import Navbar from "./components/Navbar/Navbar"
import SearchBar from './components/SearchBar/SearchBar'
import CreateUser from './views/createUser/createUser'


function App() {

  return (
    <div className="App">
     
      <h1 class="text-xl font-bold">
        Hello world...
        Soy Juan
        yo Pablo
       
      </h1>
    <div>
      <Navbar/>
      <CreateUser/>
    </div>
   

    </div>
  )
}

export default App

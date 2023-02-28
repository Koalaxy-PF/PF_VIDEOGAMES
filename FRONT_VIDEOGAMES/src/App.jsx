import CreateUser from './views/CreateUser/CreateUser'
import Navbar from "./components/Navbar/Navbar"
import SearchBar from './components/SearchBar/SearchBar'
import Footer from './components/Footer/Footer'
import './App.css'

export default function App(){

  return (
    <div className="App">

      <div>
        <Navbar/>
        <CreateUser/>
        <Footer/>
      </div>
    </div>
  )
}


import './App.css'
import CreateUser from './views/createUser/CreateUser'

function App() {

  return (
    <div className="App" class='justify-center m-auto'>
      <h1 class="text-xl font-bold">
        Hello world...
        Soy Juan
        yo Pablo
      </h1>
      <div class='justify-center m-auto text-center'>
        <CreateUser/>
      </div>
    </div>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ScrollTop from './components/ScrollTop/ScrollTop'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import  store  from "../src/redux/store/store"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
         <ScrollTop/>
         <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)

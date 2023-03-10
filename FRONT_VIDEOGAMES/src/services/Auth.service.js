import axios from 'axios'

const API_URL = "http://localhost:3000/auth/"

class AuthService{

    Register(data){
      return axios.post(API_URL + "register", data);
    }

    Login(data){
      return axios.post(API_URL + "login", data);
    }
  
    Logout(){
      localStorage.removeItem("user");
    }
  
}

export default new AuthService;
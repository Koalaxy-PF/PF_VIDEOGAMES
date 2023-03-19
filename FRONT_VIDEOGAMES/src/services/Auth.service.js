import axios from 'axios'

const API_URL = "http://localhost:3000/auth/"

const API_URL2 = "http://localhost:3000/contactus/create"

class AuthService{

    Register(data){
      return axios.post(API_URL + "register", data);
    }

    Login(data){
      return axios.post(API_URL + "login", data);
    }

    Support(data){
      return axios.post(API_URL2, data);
    }  
}

export default new AuthService;
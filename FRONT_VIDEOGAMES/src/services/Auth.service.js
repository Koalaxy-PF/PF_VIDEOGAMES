import axios from 'axios'

const API_URL = "https://apikoalaxy-production.up.railway.app/auth/"

const API_URL2 = "https://apikoalaxy-production.up.railway.app/contactus/create"

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
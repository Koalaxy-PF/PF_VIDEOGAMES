import axios from 'axios'

const API_URL = "http://localhost:3000/auth/"

class AuthService{
    
    Register(username, name, last_name, email, password, img, date, description, genre){
      return axios.post(API_URL + "register", {username, name, last_name, email, password, img, date, description, genre})
    }

    Login(email, password){
      return axios
        .post(API_URL + "login", { email, password })
        .then((response) => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
  
          return response.data;
        });
    }
  
    Logout(){
      localStorage.removeItem("user");
    }
  
}

export default new AuthService;
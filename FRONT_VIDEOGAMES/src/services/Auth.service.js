import axios from 'axios'

const API_URL = "http://localhost:3000/api/auth/"

class AuthService{
    
    Register(username, name, last_name, email, password, img, date, description, genre){
      return axios.post(API_URL + "signup", {username, name, last_name, email, password, img, date, description, genre})
    }

    Login(email, password){
      return axios
        .post(API_URL + "signin", { email, password })
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
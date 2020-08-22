import axios from 'axios';

const AUTH_API_BASE_URL = 'TODO';

class AuthService {
  login(loginData) {
    console.log(loginData);
    // return axios.post(AUTH_API_BASE_URL, loginData);
  }

  logout(id) {
    return axios.get(AUTH_API_BASE_URL, + id);
  }
}

export default new AuthService();
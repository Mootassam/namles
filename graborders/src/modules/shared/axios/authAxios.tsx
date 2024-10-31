import axios from "axios";
import authToken from "src/modules/auth/authToken";

const authAxios = axios.create({
  // baseURL: 'http://139.162.184.226:8080/api/',
  baseURL: 'http://162.0.222.192:8088/api/',
});

authAxios.interceptors.request.use(async function (options) {
  const token = authToken.get();
  if (token) {
    options.headers["Authorization"] = `Bearer ${token}`;
  }

  return options;
});

export default authAxios;

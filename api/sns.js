import axios from "axios";

let url;
if (__DEV__) {
  url = "http://localhost:4000/api/";
} else {
  url = "prod url";
}

const snsApi = axios.create({
  baseURL: url,
});

export { snsApi };

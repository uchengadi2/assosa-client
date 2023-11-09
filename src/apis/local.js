import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:9010/api/v1", //for the localhost
  baseURL: "https://api.adosa.ng/api/v1", // for production
});

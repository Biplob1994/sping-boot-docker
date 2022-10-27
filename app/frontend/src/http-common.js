import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/spring-boot-data-jpa/api",
  headers: {
    "Content-type": "application/json"
  }
});

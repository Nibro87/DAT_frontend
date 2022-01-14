import axios from "axios";
import  SERVER_URL  from "../settings";



class AuthService {
  

  register(username, email, password) {
    return axios.post(SERVER_URL + "/api/info/signup", {
      username,
      email,
      password
    });
  }

  createTrips(tripname,date,time,location,duration,packinglist){
      return axios.post("http://localhost:8080/CA2_war_exploded/api/trip/createtrip", {
      tripname,
      date,
      time,
      location,
      duration,
      packinglist
  });

 
}

createGuide(guidename,gender,birthyear,profile,image){

  return axios.post("http://localhost:8080/CA2_war_exploded/api/guide/createguide"),{
    guidename,
    gender,
    birthyear,
    profile,
    image,
  }

}



}
export default new AuthService();
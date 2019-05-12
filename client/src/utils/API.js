import axios from "axios";

export default {

// Perform a user find operation
  getUser: (query) => {
    return axios.post("/api/signin", query);
  },
// Perform a user create operation
  createUser: (query) => {
    return axios.post("/api/signup", query);
  },  
// Perform a check of the user's session key
  checkAuth: function(query) {
    console.log("Query in API = " + JSON.stringify(query));
    return axios.post("/api/verify", query);
  },
// Perform a save of the selected deal
  saveDeal: (query) => {
    return axios.post("/api/saveDeal", query);
  },
// Perform a find of deals for this user
  getMyDeals: (email) => {
    console.log("email parm = " + email);
    return axios.get("/api/getMyDeals/" + email);
  },
// Perform a load of the selected saved deal
  loadDeal: (id) => {
    console.log("id parm = " + id);
    return axios.get("/api/loadDeal/" + id);
  },
};

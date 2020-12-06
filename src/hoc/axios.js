import axios from "axios";

const instance = axios.create({
    baseURL: "http://54.193.115.135:5000/api/"
    // baseURL: "http://localhost:5000/api/"
});

// instance.defaults.headers.common['Content-Type'] = "application/json";
// instance.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
// instance.defaults.headers.common['apikey'] = "";

instance.interceptors.request.use(
    request => {
        // request.headers.common['authkey'] = "p3to7Vf2R76pvesGajKnFL4frYwhtc";
        return request;
    },
    error => {
        return Promise.reject(error);
    }
);


instance.interceptors.response.use(
    response => {        
        return response;
    },
    error => {        
        return Promise.reject(error);
    }
);


export default instance;
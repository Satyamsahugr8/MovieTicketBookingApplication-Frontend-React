import axios from 'axios';

const THEATRE_API_BASE_URL= "http://localhost:8081/theatre/all";
const THEATRE_API_POST_URL="http://localhost:8081/theatre/insert";
const THEATRE_API_POST_URL_ONE="http://localhost:8081/theatre";

class TheatreService{

    getTheatres()
    {
        return axios.get(THEATRE_API_BASE_URL);
    }

    addtheatre(theatre)
    {
        return axios.post(THEATRE_API_POST_URL , theatre);
    }

    getTheatreById(theatreId)
    {
        return axios.get(THEATRE_API_POST_URL_ONE +'/'+theatreId);
    }
}

export default new TheatreService()
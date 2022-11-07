import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: { maxResults: 10 },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data
}


// Con el API de Youtube 
/* const BASE_URL = 'https://www.googleapis.com/youtube/v3'

const API_KEY = process.env.REACT_APP_YT_API_KEY

const options = {
    params: { maxResults: 10 }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}&key=${API_KEY}`, options);
    return data
} */
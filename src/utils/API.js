import axios from 'axios';

const API = {
    // store all api call methods
    getRandomDog: () =>  axios.get( "https://dog.ceo/api/breeds/image/random/1"),
    getDogBreedList: () => axios.get("https://dog.ceo/api/breeds/list"),
    getDogImages:(currentBreed) => axios.get(`https://dog.ceo/api/breed/${currentBreed}/images`),
}


export default API;
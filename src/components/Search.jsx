import { useEffect } from "react";
import { useState } from "react";
import "../Search.css";
import API from "../utils/API";
import Alert from "../partials/Alert";

function Search() {
  const [breeds, setBreeds] = useState();
  const [currentBreed, setCurrentBreed] = useState();
  const [currentPictures, setCurrentPictures] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.getDogBreedList();
        setBreeds(response.data.message);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  async function bringPictures() {
    try {
      const response = await API.getDogImages(currentBreed);
      setCurrentPictures(response.data.message);
    } catch (error) {
      console.log(error);
      alert(error.message)
    }
  }

  return (
    <div className="Search">
      <label htmlFor="breed">Dog Breed: </label>
      <input
        type="text"
        list="breeds"
        className="form-control"
        placeholder="Type to search for a breed!"
        onChange={(e) => setCurrentBreed(e.target.value)}
      />
      <datalist id="breeds">
        {breeds &&
          breeds.map((element, index) => (
            <option key={index} value={element}>
              {element}
            </option>
          ))}
      </datalist>
      <button onClick={bringPictures}>Search</button>
      <div className="dog-images">
        {currentPictures &&
          currentPictures.map((element, index) => (
            <img key={index} src={element} alt="dog-pic" />
          ))}
      </div>
    </div>
  );
}

export default Search;

import "../Discover.css";
import { useEffect, useState } from "react";
import Card from "../partials/Card.jsx";
import Alert from "../partials/Alert.jsx";
import API from "../utils/API";

function Discover() {
  const [randomPic, setRandomPic] = useState();
  const [matchCount, setMatchCount] = useState(0);
  const [match, setMatch] = useState(false);

  useEffect(() => {
    loadNextImage();
  }, []);

  const loadNextImage = () => {
    API.getRandomDog()
      .then((response) => {
        setRandomPic(response.data.message[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleBtnClick(isLike = false) {
    if (isLike) {
      const number = Math.floor(Math.random() * 5);
      if (1 == 1) {
        setMatch(true);
        setMatchCount(matchCount + 1);
      } else {
        setMatch(false);
      }
    }
    loadNextImage();
  }

  return (
    <div>
      <h1>Find a new friend!</h1>
      <h2>Thumbs up if you'd like to meet!</h2>
      <Card randomPic={randomPic} handleBtnClick={handleBtnClick} />
      <h2>Made friends with {matchCount} pups so far!</h2>
      <Alert state={match}/>
    </div>
  );
}

export default Discover;

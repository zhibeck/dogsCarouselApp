import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getDogs } from "./dogapi";
import "./styles.css";

const App = () => {
  const [dog, setDog] = useState([]);
  const [dogIndex, setDogIndex] = useState(0);

  useEffect(() => {
    getDogs().then((dogs) => setDog(dogs));
  }, []);

  console.log(getDogs);
  console.log(dog);

  const prevClickHandler = () => {
    setDogIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = dog.length - 1;
        // console.log(index);
      }
      return index;
    });
  };
  const nextClickHandler = () => {
    setDogIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index >= dog.length) {
        index = 0;
      }
      return index;
    });
  };

  if (dog.length === 0) {
    return <div>Loading dogs, please wait...</div>;
  }
  console.log(dog);

  return (
    <>
      <div className="container">
        <img src={dog[dogIndex]?.url} alt="dog" className="dog-image" />
        <div className="dog-text-btn">
          <button onClick={prevClickHandler} className="prev">
            {" "}
            prev{" "}
          </button>
          <h6>{dog[dogIndex]?.title}</h6>
          <button onClick={nextClickHandler} className="next">
            {" "}
            next{" "}
          </button>
        </div>
      </div>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

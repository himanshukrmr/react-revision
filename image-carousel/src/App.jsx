import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [index, setIndex] = useState(0);
  const imageContainer = [
    "https://picsum.photos/200/300?grayscale",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/200/300/?blur",
  ];

  const prevIsDisabled = index === 0;
  const nextIsDisabled = index === imageContainer.length-1;

  const nextFunction = () => {
    setIndex((prev) => {
      return prev + 1;
    });
  };

  const prevFunction = () =>
    setIndex((prev) => {
      return prev - 1;
    });

  return (
    <>
      <div id="carousel-container">
        <div
          id="image-container"
          style={{ transform: `translateX(${-index * 100}%)` }}
        >
          {imageContainer.map((item, index) => (
            <img key={item} src={item} alt="" />
          ))}
        </div>
        <button
          id="prev-button"
          onClick={prevFunction}
          disabled={prevIsDisabled}
        >
          Prev
        </button>
        <button
          id="next-button"
          onClick={nextFunction}
          disabled={nextIsDisabled}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default App;

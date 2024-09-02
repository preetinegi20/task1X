import React from "react";
import { useState, useEffect } from "react";
import Form from "../form/Form";
import properties from "../propertyList/property";
function Homescreen() {
  const [currentIndex, setCurrInd] = useState(0);

  const prev = () => {
    setCurrInd((prevIndex) =>
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrInd((prevIndex) =>
      prevIndex === properties.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrInd(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="home-Container">
        <Form />
        <div className="slider-container">
          <div className="slider">
            {properties.map((property, index) => (
              <div
                className={`indicator ${
                  index === currentIndex ? "active" : "none"
                }`}
                onClick={() => goToSlide(index)}
                style={{ backgroundImage: `url(${property.src})` }}
              >
                <div className="contents">
                  <h5>{property.speci}</h5>
                  <h1>{property.name} </h1>
                  <p>{property.disc}</p>
                  <h2>$ {property.price}</h2>
                  <div className="btn">
                    <button> View Property</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="slider-button">
              <h4 onClick={prev}>⬅️</h4>
              <h4 onClick={next}>➡️</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homescreen;

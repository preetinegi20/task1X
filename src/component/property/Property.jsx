import React from "react";
import properties from "../propertyList/property";
function Property() {
  return (
    <>
      <div className="property-container">
        <div className="mainContainer">
          <h1>Latest Properties</h1>
          <p>get start buy choosing the best one!!</p>
        </div>
        <div className="topContainer">
          {properties.map((property) => (
            <div className="container">
              <img className="img" src={property.src} />
              <h4>Price: {property.price}</h4>
              <h3>{property.name}</h3>
              <p>{property.disc}</p>
              <button>See more</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Property;

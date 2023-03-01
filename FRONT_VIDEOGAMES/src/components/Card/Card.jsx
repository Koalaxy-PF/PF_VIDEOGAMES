import React from "react";


export default function Card({ name, image, price, description }) {
  return (
    <div>
      <img  src={image} alt=" " width={"300px"} height={"200px"} />
      <div>
        <h3>{name}</h3>
        <div>
          <h5>{price}</h5>
          <div>
            <p>
              Description <strong>{description}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
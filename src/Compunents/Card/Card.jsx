/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import course from "../../assets/image/Rectangle 2-1.png";
import "./card.css";
const Card = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="card-container">
        <div className="card w-72 bg-base-100 shadow-xl text-left">
          <figure className="p-4">
            <img src={course} alt="" />
          </figure>
          <div className="card-body m-1 p-1">
            <h2 className="card-title font-bold text-lg">Introduction to C Programming</h2>
            <p className="text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="flex gap-6">
              <h4>Price : 15000</h4>
              <h4> Credit : 1hr</h4>
            </div>
            <div className="card-actions text-center">
              <button className="btn btn-primary bg-blue-600 text-white px-24 py-1 rounded-lg">Select</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

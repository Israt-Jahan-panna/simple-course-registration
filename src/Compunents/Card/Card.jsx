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
        <div className="card w-8 bg-base-100 shadow-xl">
          <figure>
            <img src={course} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Introduction to C Programming</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <h4>Price : 15000</h4>
            <h4>Credit : 1hr</h4>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Select</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

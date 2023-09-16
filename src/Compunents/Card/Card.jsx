/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

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
      
    </div>
  );
};

export default Card;

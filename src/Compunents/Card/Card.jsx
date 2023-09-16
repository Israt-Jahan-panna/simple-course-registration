/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import "./card.css";
const Card = ({selectedCourse , remainng,totalCredits ,totalPrice}) => {
  
  console.log(selectedCourse);
  return (
    <div >
      <div className="card w-64 bg-base-100 shadow-xl my-4">
            <div className="card-body ">
              <h2 className="font-bold text-blue-500">Credit Hour Remaining {remainng} hr</h2>
              <hr />
              <h2 className="card-title font-bold text-xl">Course Name</h2>
              {
                selectedCourse.map((course , index) =>(
                  <h3 key={index}>{index + 1}. {course.Name}</h3>
                ))
              }
             <h3 className="font-medium">Total Credit Hour :{totalCredits}</h3>
             <hr />
             <h3 className="font-semibold">Total Price : {totalPrice}USD</h3>
            </div>
          </div>
    </div>
  );
};

export default Card;

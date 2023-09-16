/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import "./card.css";
const Card = ({selectedCourse}) => {
  
  console.log(selectedCourse);
  return (
    <div >
      <div className="card w-64 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title font-bold text-xl">Course Name</h2>
              {
                selectedCourse.map((course , index) =>(
                  <li key ={course.id}>{course.Name}</li>
                ))
              }
             
            </div>
          </div>
    </div>
  );
};

export default Card;

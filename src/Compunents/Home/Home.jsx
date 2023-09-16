/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import doller from "../../assets/image/doller.png";
import books from "../../assets/image/books.jpg";
import "./Home.css";
import Card from "../Card/Card";

const Home = () => {
  const [allCourse, setAllCourse] = useState([]);
  const [selectedCourse ,setSelectedCourse] = useState([]);
  const [remainng ,setRemaining] = useState(0);
  const [totalCredits , setTotalCredit] = useState(0);
  const [totalPrice , setPrice] = useState(0);


  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);

  const handelSelectCourse = (course) => {
    // setSelectedCourse([...selectedCourse , course]);
    const isExist = selectedCourse.find(item=>item.id== course.id);
    let totalCredits = course.Credit;
    let totalPrice = course.Price ;
    if(isExist){
      return alert('This course is already selected');
    }
    else{
      selectedCourse.forEach((item)=> {
        totalCredits = totalCredits + item.Credit;
        totalPrice = totalPrice + item.Price;
      });
      console.log(totalCredits);
      const totalRemaining = 20 - totalCredits ;
      setTotalCredit(totalCredits);
      setRemaining(totalRemaining);
      setPrice(totalPrice);
      
      // console.log(totalRemaining);
      setSelectedCourse([...selectedCourse , course])
    }
    
  }
  // console.log(allCourse);
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-center mt">Course Registration</h1>
      <div className="container ">
        <div className="card-container flex justify-between">
          <div className="grid grid-cols md:grid-cols-3 gap-2">
            {
              allCourse.map(course => (
                <div key={course.id} className="card w-64 bg-base-100 shadow-xl text-left">
            <figure className="px-4 py-2">
              <img src={course.Image} alt="" />
            </figure>
            <div className="card-body m-1 p-2">
              <h2 className="card-title font-bold text-sm">
              {course.Name}
              </h2>
              <p className="text-gray-600 w-60 h-32">
              {course.Title}
              </p>
              <div className="flex justify-between">
                <p className="flex"><img className="w-4 h-5" src={doller} alt="" />Price:{course.Price}</p>
                <p className="flex"><img className="w-7 h-7" src={books} alt="" /> Credit:{course.Credit} hr</p>
              </div>
              <div className="card-actions text-center">
                <button onClick={() => handelSelectCourse(course)} className="btn btn-primary bg-blue-600 text-white px-24 py-1 my-2 rounded-lg">
                  Select
                </button>
              </div>
            </div>
          </div>
              ))
            }
          </div>
          <Card selectedCourse= {selectedCourse} remainng={remainng} totalCredits={totalCredits} totalPrice={totalPrice}></Card>
        </div>
      </div>
    </div>
  );
};

export default Home;

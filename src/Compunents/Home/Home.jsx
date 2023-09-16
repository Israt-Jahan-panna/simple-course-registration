/* eslint-disable no-unused-vars */
import React from 'react';
import course from "../../assets/image/Rectangle 2-1.png";
import './Home.css'
const Home = () => {
    return (
        <div className='container mx-auto mt-8' >
          <h1 className='text-center mt'>Course Registration</h1>
          <div className="card-container">
        <div className="card w-80 bg-base-100 shadow-xl text-left">
          <figure className="px-4 py-2">
            <img src="https://i.ibb.co/0ssrNm4/Rectangle-2-2.png" alt="" />
          </figure>
          <div className="card-body m-1 p-2">
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
              <button className="btn btn-primary bg-blue-600 text-white px-24 py-1 my-2 rounded-lg">Select</button>
            </div>
          </div>
        </div>
      </div>
        </div>
        
        
    );
};

export default Home;
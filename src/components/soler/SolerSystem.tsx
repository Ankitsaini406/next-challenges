"use client";

import { useEffect, useState } from "react";
import "./soler.css";
export const SolerSystem = () => {
  const [stars, setStars] = useState([
    {
      id: 0,
      top: 0,
      left: 0,
    },
  ]);

  useEffect(() => {
    const numStars = 1000;
    const generateStars = () => {
      const newStars = Array.from({ length: numStars }).map(() => ({
        id: Math.random(),
        top: Math.random() * 100,
        left: Math.random() * 100,
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="soler-box">
        <div className="sun-box">
      <div className="sun-details">
      </div>
        <div className="sun"></div>
        </div>
      {/* <div className="pulto-circle">
        <div className="circle-p">
          <div className="pulto"></div>
        </div>
      </div>
      <div className="earth-circle">
        <div className="circle">
          <div className="earth"></div>
        </div>
      </div> */}
      {stars.map((star) => (
        <div
          className="star"
          key={star.id}
          style={{ top: `${star.top}%`, left: `${star.left}%` }}
        ></div>
      ))}
    </div>
  );
};

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

  const [sunPostion, setSunPostion] = useState([
    {
      top: 0,
      left: 0,
    },
  ]);

  const [showSun, setShowSun] = useState(false);

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

    const suntop = Math.random() * 90;
    const sunleft = Math.random() * 90;

    setSunPostion([{ top: suntop, left: sunleft }]);
    setShowSun(true);
  }, []);

  return (
    <div className="soler-box">
      {showSun && (
        <div className="night">
          <div className="falling-star"></div>
        </div>
      )}
      {/* <div className="sun-box">
      <div className="sun-details">
      </div> */}

      {/* {
        sunPostion.map((sun, index) => (
            showSun ?  <div className="sun" key={index} style={{ top: `${sun.top}%`, left: `${sun.left}%` }}></div> : null
        ))
      } */}

      {/* </div> */}
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
      {/* <div className="changeShap"></div> */}
      {stars.map((star) =>
        showSun ? (
          <div
            className="star"
            key={star.id}
            style={{ top: `${star.top}%`, left: `${star.left}%` }}
          ></div>
        ) : null
      )}
    </div>
  );
};

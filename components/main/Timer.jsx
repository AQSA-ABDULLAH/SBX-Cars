"use client";
import React, { useState, useEffect } from "react";

function Timer() {
  const targetDate = new Date("2025-01-18T16:18:20Z"); // Target date and time

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const formatNumber = (num) => String(num).padStart(2, "0");

    return {
      days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatNumber(Math.floor((difference / (1000 * 60)) % 60)),
      seconds: formatNumber(Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval to prevent memory leaks
  }, []);

  return (
    <div className="">
      <div
        className="flex justify-between items-center text-[12px] tracking-widest"
        style={{ fontWeight: 100 }}
      >
        {/* Days */}
        <div className="flex flex-col items-center">
          <p>{timeLeft.days}</p>
         
        </div>
        {/* Hours */}
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours}</span>
          
        </div>
        {/* Minutes */}
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes}</span>
          
        </div>
        {/* Seconds */}
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds}</span>
          
        </div>
      </div>
    </div>
  );
}

export default Timer;


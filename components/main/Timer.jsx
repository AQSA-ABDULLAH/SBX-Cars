"use client";

import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const targetTime = new Date("2025-01-31T23:59:59").getTime();
    const updateTimer = () => {
      const now = Date.now();
      const difference = targetTime - now;
      setTimeLeft(difference > 0 ? difference : 0);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft === null) return null;

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor((timeLeft / 1000 / 60 / 60) % 24);
  const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);

  return (
    <div>
      {days}:{hours}:{minutes}:{seconds}
    </div>
  );
};

export default Timer;




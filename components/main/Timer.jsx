"use client";

import React, { useEffect, useState } from "react";

const Timer = ({ bidEndTime }) => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const targetTime = new Date(bidEndTime).getTime();
    const updateTimer = () => {
      const now = Date.now();
      const difference = targetTime - now;
      setTimeLeft(difference > 0 ? difference : 0);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [bidEndTime]);

  if (timeLeft === null) return null;

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor((timeLeft / 1000 / 60 / 60) % 24);
  const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);

  return (
    <div>
      {days >= 1 ? ( // Show days only if 1 or more
        <div>{days} days</div>
      ) : (
        <div>
          {hours}:{minutes}:{seconds}
        </div>
      )}
    </div>
  );
};

export default Timer;







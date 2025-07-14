import React, { useEffect, useState } from 'react';

const Counter = ({ end, duration, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = (duration / end) * 1000;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <h1>
      {count.toLocaleString()}+ {text}
    </h1>
  );
};

export default Counter;

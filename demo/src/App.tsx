import React, { useState, useEffect } from "react";
import Line from "react-stroke-line";

function App() {
  const [x, setX] = useState(0);

  useEffect(() => {
    setTimeout(function increase() {
      setX((x) => {
        console.log(x);
        return x + 1;
      });
      setTimeout(increase, 100);
    }, 100);
  }, []);

  return (
    <>
      <Line to={{ x, y: 0 }} from={{ x: 100, y: 100 }} />
    </>
  );
}

export default App;

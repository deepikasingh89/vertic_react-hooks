import React, { useState } from "react";

export default function NewCounter() {
  const [count, setCount] = useState(0); // to have a state in function
  const [previouseClick, setpreviouseClick] = useState(0);
  const incr = () => {
    setCount(count + 1);
  };
  const inputChange = (event) => {
    setpreviouseClick(Number(event.target.value));
  };
  return (
    <div>
      <label>
        Previous clicked
        <input type="text" value={previouseClick} onChange={inputChange} />
      </label>
      <p>You clicked {previouseClick +count} times</p>
      <button onClick={incr}>Click Me!</button>
    </div>
  );
}

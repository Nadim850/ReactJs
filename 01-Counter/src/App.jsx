import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(0);

  let incValue = () => {
    if (counter <= 20) {
      setCounter(counter + 1);
      console.log("inc clicked", counter);
    } else {
      console.log("value is greater than 20", counter);
    }
  };
  let decValue = () => {
    if (counter >= 0) {
      setCounter(counter - 1);
      console.log("dec clicked", counter);
    } else {
      console.log("value is less than 0", counter);
    }
  };
  return (
    <>
      <h1>chai or code</h1>
      <p>counter value:{counter}</p>
      <br />
      <button onClick={incValue}>increase</button>
      <button onClick={decValue}>decreas</button>
    </>
  );
}

export default App;

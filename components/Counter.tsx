import React from "react";
import styles from "../styles/Home.module.css";
import  {useState} from 'react';

function Count() {
  // Declare a new state variable, which we'll call "countNum"
  let [countNum, setCount] = useState(0);
  let increaseValue = () => {
    // function to increase the value
    setCount((countNum += 1)); //increases the count by 1
  };
  let decreaseValue = () => {
    // function to decrease the value
    // condition to ensure the count stays a positive number
    if (countNum === 0) {
      alert("Let's stay positive, shall we?");
      } else {
      setCount((countNum -= 1)); 
      }
  };
  let resetValue = () => {
    // function to reset the value to 0
    setCount(0); //resets the count to 0
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className={styles.title}>
        <h1 className={styles.title}>{countNum}</h1>
        <div className=" border-t-4 border-black pt-10">
          <button onClick={increaseValue} className="btn mx-8">
            <span className="btn__text px-4">+</span>
          </button>
          <button onClick={decreaseValue} className="btn mx-8">
            <span className="btn__text">-</span>
          </button>
          <button onClick={resetValue} className="btn mx-8">
            <span className="btn__text">Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Count;

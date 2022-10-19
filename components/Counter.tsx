import React from "react";
import styles from "../styles/Home.module.css";

function Count() {
  let countNum = 0;
  return (
    <div>
      <h1 className={styles.title}>Count!</h1>
      <div className={styles.title}>
        <h1 >{countNum}</h1>
        <div className=" border-t-4 border-black pt-10">
        <button className="btn mx-8">
          <span className="btn__text px-4">+</span>
        </button>
        <button className="btn mx-8">
          <span className="btn__text">-</span>
        </button>
        <button className="btn mx-8">
          <span className="btn__text">Reset</span>
        </button>
        </div>
      </div>
    </div>
  );
}

export default Count;

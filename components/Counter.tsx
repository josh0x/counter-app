import React from "react";
import styles from "../styles/Home.module.css";

function Count() {
  let countNum = 0;
  return (
    <div>
      <h1 className={styles.title}>Counter app ++</h1>
      <div className={styles.title}>
        <h1 >{countNum}</h1>
        <button className="m-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          <span>+</span>
        </button>
        <button className="m-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          <span>-</span>
        </button>
        <button className="m-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}

export default Count;

import React, { useRef, useState } from "react";
import "./ticTacToe.css";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png"; /* Displays an error even unused */

let data = ["", "", "", "", "", "", "", "", ""];

function TicTacToe() {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src=${cross_icon}>`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src=${circle_icon}>`;
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[0] !== "") {
      won(data[0]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[3] !== "") {
      won(data[3]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[6] !== "") {
      won(data[6]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[0] !== "") {
      won(data[0]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[1] !== "") {
      won(data[1]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[2] !== "") {
      won(data[2]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[0] !== "") {
      won(data[0]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[2] !== "") {
      won(data[2]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}> Wins`;
    } else if (winner === "o") {
      titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon}> Wins`;
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = `Tic Tac Toe Game`;
    boxArray.map((box) => {
      box.current.innerHTML = "";
    });
  };

  return (
    <div className="container">
      <h1 ref={titleRef} className="title">
        Tic Tac Toe Game
      </h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes" ref={box2} onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" ref={box3} onClick={(e) => toggle(e, 2)}></div>
        </div>

        <div className="row2">
          <div className="boxes" ref={box4} onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes" ref={box5} onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" ref={box6} onClick={(e) => toggle(e, 5)}></div>
        </div>

        <div className="row3">
          <div className="boxes" ref={box7} onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes" ref={box8} onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" ref={box9} onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <div className="btn-container">
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;
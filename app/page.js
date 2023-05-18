"use client";
import React from "react";
import "./app.css";
import { useState } from "react";
import { upperCaseLetters, lowerCaseLetters, numbers, special } from "./data";

export default function Home() {
  const [password, setPassword] = useState("");
  const [counter, setCounter] = useState(6);
  const [isUpppercase, setIsUpppercase] = useState(false);
  const [isLowercase, setIsLowercase] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);

  const getRandom = () => {
    const chars = [];
    if (isUpppercase) {
      chars.push(
        upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
      );
    }
    if (isLowercase) {
      chars.push(
        lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
      );
    }
    if (isNumbers) {
      chars.push(
        numbers[Math.floor(Math.random() * numbers.length)]
      );
    }
    if (isUpppercase) {
      chars.push(
        upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
      );
    }
  };

  return (
    <main className="App">
      <div className="generator">
        <h2 className="generator__title">Password Generator</h2>
        <h4 className="password">Password</h4>
        <form className="generator__form">
          <div className="generator__form-controls">
            <div className="generator__form-control">
              <label htmlFor="uppercase">Uppercase</label>
              <input
                checked={isUpppercase}
                onChange={(e) => setIsUpppercase(e.target.checked)}
                type="checkbox"
                id="uppercase"
                name="uppercase"
              />
            </div>
            <div className="generator__form-control">
              <label htmlFor="lowercase">Lowercase</label>
              <input
                checked={isLowercase}
                onChange={(e) => setIsLowercase(e.target.checked)}
                type="checkbox"
                id="lowercase"
                name="lowercase"
              />
            </div>
            <div className="generator__form-control">
              <label htmlFor="numbers">Numbers</label>
              <input
                checked={isNumbers}
                onChange={(e) => setIsNumbers(e.target.checked)}
                type="checkbox"
                id="numbers"
                name="numbers"
              />
            </div>
            <div className="generator__form-control">
              <label htmlFor="symbols">Symbols</label>
              <input
                checked={isSymbols}
                onChange={(e) => setIsSymbols(e.target.checked)}
                type="checkbox"
                id="symbols"
                name="symbols"
              />
            </div>

            <div className="generator__length">
              <h4 className="generator__length-title">Password Length</h4>
              <div className="generator__length-counter">
                <button>-</button>
                <span>6</span>
                <button>+</button>
              </div>
            </div>
            <div className="generator__form-actions">
              <button className="btn generate-btn">Generate Password</button>
              <button className="btn copy-btn">Copy password</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

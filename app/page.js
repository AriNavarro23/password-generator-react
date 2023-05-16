import React from "react";
import "./app.css";

export default function Home() {
  return (
    <main className="App">
      <div className="generator">
        <h2 className="generator__title">Password Generator</h2>
        <h4 className="password">Password</h4>
        <form className="generator__form">
          <div className="generator__form-controls">
            <div className="generator__form-control">
              <label htmlFor="uppercase">Uppercase</label>
              <input type="checkbox" id="uppercase" name="uppercase" />
            </div>
            <div className="generator__form-control">
              <label htmlFor="lowercase">Lowercase</label>
              <input type="checkbox" id="lowercase" name="lowercase" />
            </div>
            <div className="generator__form-control">
              <label htmlFor="numbers">Numbers</label>
              <input type="checkbox" id="numbers" name="numbers" />
            </div>
            <div className="generator__form-control">
              <label htmlFor="symbols">Symbols</label>
              <input type="checkbox" id="symbols" name="symbols" />
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
              <button className="generator__form-btn">Generate Password</button>
              <button className="btn copy-btn">Copy password</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

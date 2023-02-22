import React from "react";
import "./Redux.css";

const Redux = () => {
  return (
    <div className="redux">
      <video
        src="/videos/background.mp4"
        autoPlay
        loop
        muted
        id="myVideo"
      ></video>
      <div class="content">
        <h1>Redux Counter</h1>
        <p>
          Redux is a predictable state container for JavaScript apps. It helps
          you write applications that behave consistently, run in different
          environments (client, server, and native), and are easy to test. On
          top of that, it provides a great developer experience, such as live
          code editing combined with a time traveling debugger. You can use
          Redux together with React, or with any other view library. It is tiny
          (2kB, including dependencies), but has a large ecosystem of addons
          available.
        </p>
        <a href="https://redux.js.org/" target="blank">
          <button id="myBtn">Redux Page</button>{" "}
        </a>
      </div>
    </div>
  );
};

export default Redux;

<script></script>;

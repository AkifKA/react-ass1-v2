import React from "react";
import ButtonSyle from "./Button.module.css";

const Button = () => {
  return (
    <div className={ButtonSyle.btn}>
      <button
        onClick={() => {
          setToogle(!toogle);
        }}
      ></button>
      {toggle && (
        <ul class="list-group">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      )}
    </div>
  );
};

export default Button;

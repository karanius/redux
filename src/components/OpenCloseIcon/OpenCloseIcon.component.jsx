import React, { useEffect, useState } from "react";
import "./OpenClose.style.css";

import Positive from "./Positive.component";
import Negative from "./Negative.component";

const OpenCloseIcon = ({ id, onOpenOrClose, style }) => {
  const [sign, setSign] = useState(Positive);

  const openClose = (event) => {
    event.target.children[0].className === "button-positive"
      ? setSign(Negative)
      : setSign(Positive);
  };

  useEffect(() => {
    const elem = document.querySelector(`.open-close-${id}`);
    elem.addEventListener("click", openClose);
  }, [id]);

  return (
    <div onClick={onOpenOrClose} className={style}>
      {sign}
    </div>
  );
};

export default OpenCloseIcon;

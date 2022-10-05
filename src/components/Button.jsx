import { useState, useEffect } from "react";
import { btnSetColor } from "../utils/btnSetColor";

export default function Button({ value, handleButton, children }) {
  const [Color, setColor] = useState("");
  useEffect(() => {
    btnSetColor(setColor, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <button
        className={`btn ${Color} w-100 m-2 fw-bold`}
        onClick={() => handleButton(value)}
      >
        {children}
      </button>
    </>
  );
}

import { useState, useEffect } from "react";
import { btnSetColor } from "../utils/btnSetColor";
import { motion } from "framer-motion";
export default function Button({ value, handleButton, children }) {
  const [Color, setColor] = useState("");
  useEffect(() => {
    btnSetColor(setColor, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.button
    style={{backgroundColor:`${Color}`}}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="btn w-100 text-black m-2 border-0 fw-bold"

      onClick={() => handleButton(value)}
    >
      {children}
    </motion.button>
  );
}

export const btnSetColor = (setColor, value) => {
  switch (value) {
    case "C":
      setColor("#990513");
      break;
    case "back":
      setColor("#bd2b3a");
      break;
    case "=":
      setColor("darkgreen");
      break;
    case "toggle":
      setColor("#C88304");
      break;
    case "+":
      setColor("#bd2b3a");
      break;
    case "-":
      setColor("#bd2b3a");
      break;
    case "*":
      setColor("#bd2b3a");
      break;
    case "/":
      setColor("#bd2b3a");
      break;
    default:
      setColor("#f0de5b");
      break;
  }
};

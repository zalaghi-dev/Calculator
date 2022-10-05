export const btnSetColor = (setColor,value) => {
  switch (value) {
    case "C":
      setColor("btn-danger");
      break;
    case "back":
      setColor("btn-danger");
      break;
    case "=":
      setColor("btn-success");
      break;
    case "toggle":
      setColor("btn-warning");
      break;
    case "+":
      setColor("btn-info");
      break;
    case "-":
      setColor("btn-info");
      break;
    case "*":
      setColor("btn-info");
      break;
    case "/":
      setColor("btn-info");
      break;
    default:
      setColor("btn-dark");
      break;
  }
};

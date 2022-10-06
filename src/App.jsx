import { useState } from "react";
import {motion} from 'framer-motion'
import Button from "./components/Button";
function App() {
  const [isOn, setIsOn] = useState(false);
  const [bar, setBar] = useState("");
  const handleButton = (value) => {
    switch (value) {
      case "=":
        setBar((prev) => {
          if (prev === "") {
            return prev;
          } else {
            try {
              // eslint-disable-next-line no-eval
              return eval(prev).toString();
            } catch (err) {
              return "Expression had a problem, press C";
            }
          }
        });
        break;
      case "back":
        setBar((prev) => prev.slice(0, -1));
        break;
      case "C":
        setBar("");
        break;
      case "toggle":
        setIsOn((prev) => !prev);
        setBar("");
        break;
      default:
        setBar((prev) => {
          return prev + value;
        });
    }
  };
  return (
    <motion.div initial={{scale:0.5}} animate={{scale:1}} className="w-100 position-fixed h-100 d-flex justify-content-center align-items-center ">
      <div
      style={{backgroundColor:"#242424"}}
        className="col-12 col-sm-8 col-md-6 col-lg-6 col-xl-4 p-3 border border-3 border-white rounded-3"
      >
        <div
          className={` ${
            isOn
              ? "text-white bg-dark"
              : "justify-content-center text-danger bg-black"
          }  p-2 mb-2 fw-bold fs-3 rounded-3  border border-2 border-light d-flex align-items-center overflow-auto`}
        >
          {isOn
            ? bar.length === 0
              ? <span className="m-auto">(●'◡'●)</span>
              : bar
            : "H E N R Y - A L L E N"}
        </div>
        <div className="row text-center">
          <div className="col-10">
            <div className="row">
              <div className="col">
                <Button value="7" handleButton={handleButton}>
                  7
                </Button>
              </div>
              <div className="col">
                <Button value="8" handleButton={handleButton}>
                  8
                </Button>
              </div>
              <div className="col">
                <Button value="9" handleButton={handleButton}>
                  9
                </Button>
              </div>
              <div className="col">
                <Button value="/" handleButton={handleButton}>
                  ÷
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Button value="4" handleButton={handleButton}>
                  4
                </Button>
              </div>
              <div className="col">
                <Button value="5" handleButton={handleButton}>
                  5
                </Button>
              </div>
              <div className="col">
                <Button value="6" handleButton={handleButton}>
                  6
                </Button>
              </div>
              <div className="col">
                <Button value="*" handleButton={handleButton}>
                  ×
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Button value="1" handleButton={handleButton}>
                  1
                </Button>
              </div>
              <div className="col">
                <Button value="2" handleButton={handleButton}>
                  2
                </Button>
              </div>
              <div className="col">
                <Button value="3" handleButton={handleButton}>
                  3
                </Button>
              </div>
              <div className="col">
                <Button value="+" handleButton={handleButton}>
                  +
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Button value="=" handleButton={handleButton}>
                  =
                </Button>
              </div>
              <div className="col">
                <Button value="0" handleButton={handleButton}>
                  0
                </Button>
              </div>
              <div className="col">
                <Button value="." handleButton={handleButton}>
                  .
                </Button>
              </div>
              <div className="col">
                <Button value="-" handleButton={handleButton}>
                  -
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Button value="C" handleButton={handleButton}>
                  C
                </Button>
              </div>
              <div className="col">
                <Button value="(" handleButton={handleButton}>
                  {"("}
                </Button>
              </div>
              <div className="col">
                <Button value=")" handleButton={handleButton}>
                  {")"}
                </Button>
              </div>
              <div className="col">
                <Button value="back" handleButton={handleButton}>
                  {"<"}
                </Button>
              </div>
            </div>
          </div>
          <div className="col-2 p-2 fw-bold text-white">
            <div
              className={`${
                isOn === true ? "text-info" : "text-secondary"
              } fs-2`}
            >
              {isOn === true ? "On" : "Off"}
            </div>
            <div className="mt-2 text-primary fs-5">H</div>
            <div className="text-primary fs-5">E</div>
            <div className="text-primary fs-5">N</div>
            <div className="text-primary fs-5">R</div>
            <div className="text-primary fs-5">Y</div>
            <div className="text-center d-flex justify-content-center">
              <Button value="toggle" handleButton={handleButton}>
                I/O
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default App;

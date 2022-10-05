import { useState } from "react";
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
              return "Expression had a problem , press C to continue...";
            }
          }
        });
        break;
      case "back":
        setBar(prev=>prev.slice(0,-1))
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
    <div className="w-100 position-fixed h-100 d-flex justify-content-center align-items-center ">
      <div style={{boxShadow:"0px 0px 10px 20px white"}} className="col-12 col-sm-8 col-md-6 col-lg-6 col-xl-4 p-3 bg-black rounded-3">
        <div
          className={` ${
            isOn
              ? "text-white bg-dark"
              : "justify-content-center text-danger bg-black border border-1 border-light"
          }  p-2 fw-bold fs-6 rounded-3 d-flex align-items-center`}
          style={{ height: 50 }}
        >
          {isOn ? bar : "H E N R Y - A L L E N"}
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
    </div>
  );
}

export default App;

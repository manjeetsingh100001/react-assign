import "./App.css";
// import { Button } from './components/Button';
import { Button } from "antd";

function App() {
  const Cliked = (value) => {
    alert(`Hello There You Clicked ${value}`);
  };
  return (
    <div>
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
          gap: "10px",
        }}>
        <h1>Click Any Button You get Alert!</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "0vh",
          gap: "10px",
        }}
      >
        <Button
          onClick={() => {
            Cliked("Default Button");
          }}
        >
          Default Button
        </Button>
        <Button
          onClick={() => {
            Cliked("Primary Button");
          }}
          type="primary"
        >
          Primary Button
        </Button>
        <Button
          onClick={() => {
            Cliked("Dashed Button");
          }}
          type="dashed"
        >
          Dashed Button
        </Button>
        <Button
          onClick={() => {
            Cliked("Text Button");
          }}
          type="text"
        >
          Text Button
        </Button>
        <Button
          onClick={() => {
            Cliked("Link Button");
          }}
          type="link"
        >
          Link Button
        </Button>
      </div>
    </div>
  );
}

export default App;

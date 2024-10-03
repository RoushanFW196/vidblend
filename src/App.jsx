import "./App.css";
import Header from "./layouts/Header";
import Body from "./components/body";

function App() {
  return (
    <div
      style={{ backgroundColor: "lightgray", height: "auto", width: "100%" }}
    >
      <Header />
      <Body />
    </div>
  );
}

export default App;

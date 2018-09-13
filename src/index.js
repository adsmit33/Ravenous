import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "../public/reset.css";
import { BusinessList } from "../components/BusinessList/BusinessList";

function App() {
  return (
    <div className="App">
      <BusinessList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

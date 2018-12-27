import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RefComponent from "./components/RefComponent/RefComponent";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <div className="main">
          <RefComponent />
        </div>
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

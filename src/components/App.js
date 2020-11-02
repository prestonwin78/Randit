import React from "react";
import Header from "./Header";
import Body from "./Body";

function App() {
  return (
    <div className="container-fluid app">
      <Header />
      {<Body />}
    </div>
  );
}

export default App;

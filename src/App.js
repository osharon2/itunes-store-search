import React from "react";
import "./App.css";
import Search from "./components/Search/Search";
const App = () => (
  <div className="App">
    <div className="Title">
      <span id="logo" href={`/`}/>
      <h1>iTunes Search</h1>
    </div>
    <Search />
  </div>
);
export default App;

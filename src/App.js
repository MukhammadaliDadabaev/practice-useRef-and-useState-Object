import React, { useRef, useEffect } from "react";
import "./App.css";
import UserContact from "./UserContact";

function App() {
  const userSearch = useRef(null);

  useEffect(() => {
    userSearch.current.focus();
  }, []);
  return (
    <div>
      <div className="App">
        <h1>EXAMPLE useRef </h1>
        <input type="text" name="userSearch" ref={userSearch} />
        <button>LOGIN</button>
      </div>
      <br />
      <br />
      <UserContact />
    </div>
  );
}

export default App;

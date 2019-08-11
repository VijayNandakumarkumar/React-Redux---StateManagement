import React from "react";
import "./App.css";
import UserList from "./userlist";
import UserDetails from "./userdetails";

function App() {
  return (
    <div className="App">
      <UserList />
      <hr />
      <UserDetails />
    </div>
  );
}

export default App;

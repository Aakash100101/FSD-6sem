import React from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>CRUD App</h1>
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
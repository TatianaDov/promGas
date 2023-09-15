import React from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Menu from "./components/Menu/Menu";
import Frame from "./components/Frame/Frame";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="flex bg-slate-100">
      <SideBar />
      <Menu/>
      <Frame/>
      </div>
      
    </>
  );
}

export default App;

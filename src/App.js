import Sidebar from "Components/Sidebar";
import BottomBar from "Components/BottomBar";
import Content from "Components/Content";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar/>
        <Content/>
      </div>
      <BottomBar/>
    </>
  );
}
export default App;


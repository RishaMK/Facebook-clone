import React from "react";
import './App.css';
import Header from './Components/Header/Header.js';
import SideBar from './Components/Sidebar/SideBar.js';
import Feed from './Pages/Feed.js';
import Widgets from './Components/Widgets/Widgets.js';
import Login from './Pages/Login.js';
import { useStateValue } from "./State/StateProvider.js";

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? <Login />:(
        <>
          <Header/>
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

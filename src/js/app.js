
import React from 'react';
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './pages/home';
import TopBar from './components/TopBar';
import LeftSidebar from './components/LeftSidebar';
import '../css/input.css';

export default function App() {

  return (
    <HashRouter>
      <TopBar />
      <LeftSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}


// <h1>I am App Component!!!</h1>
// <button onClick={() => {
//   electron.notificationApi.sendNotification('My custom notification!');
// }}>Notify</button>
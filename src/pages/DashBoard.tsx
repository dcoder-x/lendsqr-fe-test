import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../component/Header";
import SideBar, { MobileSideBar } from "../component/SideBar";
import User from "../component/User";
import UserDetails from "../component/UserDetails";
import "../styles/dashboard.scss";
import { assets } from "../assets";
assets

const DashBoard = () => {
  const [showSideBar, setshowSideBar] = useState<boolean>(false);
  return (
    <main id="dashboard">
      <Header menuToggle={e=>{setshowSideBar(!showSideBar)}} />
      <section className="page-body">
        <div className="sidebar">
          <SideBar />
          <MobileSideBar
            show={showSideBar}
            close={() => {
              setshowSideBar(false);
            }}
          />
        </div>

        <section className="content">
          <Routes>
            <Route index path="user" element={<User />} />
            <Route path="/" element={<User />} />
            <Route path="userdetails" element={<UserDetails />} />
          </Routes>
        </section>
      </section>
    </main>
  );
};

export default DashBoard;

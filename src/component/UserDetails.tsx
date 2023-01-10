import React from "react";
import { useLocation } from "react-router";

const UserDetails = () => {
  const id = useLocation().state.id;
  const users: object[] = JSON.parse(window.localStorage.getItem("users"));
  const userDetail = users?.filter((user: object) => {
    return user.id == id;
  });
  return (
    <main id="user-details">
      <div className="page-nav">
        <p>&larr;</p>
        <p>back to users</p>
      </div>
      <div className="page-header">
        <div className="page-title">User Details</div>
        <div className="action-buttons">
          <button>Blacklist User</button>
          <button>Activate User</button>
        </div>
      </div>
      <div className="profile-header">
        <div className="user-header">
          <div className="user">
            <img className="avatar" src={userDetail[0].profile.avatar} alt="" />
            <div className="name">
              <div className="real-name">
                <p>
                {`${userDetail[0].profile.firstName} ${userDetail[0].profile.lastName}`}
                </p>
              </div>
              <p className="userName">{userDetail[0].userName}</p>
            </div>
          </div>
        </div>
        <div className="user-tab-navigator"></div>
      </div>
    </main>
  );
};

export default UserDetails;

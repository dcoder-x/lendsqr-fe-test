import React from "react";
import { useLocation, useNavigate } from "react-router";
import { ReactSVG } from "react-svg";
import { assets } from "../assets";
import "../styles/userDetails.scss";
import avatar from '../assets/images/avatar2.png'

const UserDetails = () => {
  const navigate = useNavigate();
  const id = useLocation().state.id;
  console.log(id);
  if (!id) {
    navigate("../user");
  }
  const users: any = JSON.parse(window.localStorage.getItem("users"));
  const userDetail = users?.filter((user: any) => {
    return user.id == id;
  });
  console.log(userDetail);

  return (
    <main id="user-details">
      <div
        className="page-nav"
        onClick={() => {
          navigate("../");
        }}
      >
        <p>&larr;</p>
        <p>Back to users</p>
      </div>
      <div className="page-header">
        <p className="page-title">User Details</p>
        <div className="action-buttons">
          <button>Blacklist User</button>
          <button>Activate User</button>
        </div>
      </div>
      <div className="profile-header">
        <div className="user-header">
          <div className="user section">
            <img className="avatar" src={userDetail[0].profile.avatar||avatar} alt="" />
            <div className="name">
              <div className="real-name">
                <p>
                  {`${userDetail[0].profile.firstName} ${userDetail[0].profile.lastName}`}
                </p>
              </div>
              <p className="userName">{userDetail[0].userName}</p>
            </div>
          </div>
          <div className="user-tier section">
            <p>User tier</p>
            {userDetail.id % 2 ? (
              <div className="stars">
                <ReactSVG src={assets.icons.starfilled} />
                <ReactSVG src={assets.icons.starfilled} />
                <ReactSVG src={assets.icons.star} />
              </div>
            ) : (
              <div className="stars">
                <ReactSVG src={assets.icons.starfilled} />
                <ReactSVG src={assets.icons.star} />
                <ReactSVG src={assets.icons.star} />
              </div>
            )}
          </div>
          <div className="account-details ">
            <p className="amount">&#8358; {userDetail[0].accountBalance}</p>
            <p className="bank">
              <p className="acct-number">{userDetail[0].accountNumber}</p>
              <p className="bank-name">\Providus Bank</p>
            </p>
          </div>
        </div>
        <div className="user-tab-navigator"></div>
      </div>
      <div className="profile-body">
        <ProfileSection
          profileTitle="Personal Information"
          records={[
            {
              fieldTitle: "Full Name",
              data: `${userDetail[0].profile.firstName} ${userDetail[0].profile.lastName}`,
            },
            {
              fieldTitle: "Phone Number",
              data: `${userDetail[0].phoneNumber}`,
            },
            {
              fieldTitle: "Email Address",
              data: `${userDetail[0].email}`,
            },
            {
              fieldTitle: "BVN",
              data: `${userDetail[0].profile.bvn}`,
            },
            {
              fieldTitle: "Gender",
              data: `${userDetail[0].profile.gender}`,
            },
            {
              fieldTitle: "Marital Status",
              data: `${userDetail[0].id % 2 ? "Single" : "Married"}`,
            },
            {
              fieldTitle: "Chilren",
              data: `${Math.round(Math.random() * 5)}`,
            },
            {
              fieldTitle: "Type of Rsidence",
              data: `${userDetail[0].id % 2 ? "Private" : "Public"}`,
            },
          ]}
        />
        <ProfileSection
          profileTitle="Education and Employment"
          records={[
            {
              fieldTitle: "Level of Education",
              data: `${userDetail[0].education.level} ${userDetail[0].profile.lastName}`,
            },
            {
              fieldTitle: "Employment Status",
              data: `${userDetail[0].education.employmentStatus}`,
            },
            {
              fieldTitle: "Sector of Employment",
              data: `${userDetail[0].education.sector}`,
            },
            {
              fieldTitle: "Duration of Employment",
              data: `${userDetail[0].education.duration}`,
            },
            {
              fieldTitle: "Office email",
              data: `${userDetail[0].education.officeEmail}`,
            },
            {
              fieldTitle: "Monthly Income",
              data: `N${userDetail[0].education.monthlyIncome[0]}- N${userDetail[0].education.monthlyIncome[1]} `,
            },
            {
              fieldTitle: "Loan Repayment",
              data: `N${userDetail[0].education.loanRepayment}`,
            },
          ]}
        />
        <ProfileSection
          profileTitle="Socials"
          records={[
            {
              fieldTitle: "Facebook",
              data: `${userDetail[0].socials.facebook}`,
            },
            {
              fieldTitle: "Instagram",
              data: `${userDetail[0].socials.instagram}`,
            },
            {
              fieldTitle: "Twitter",
              data: `${userDetail[0].socials.twitter}`,
            },
          ]}
        />
        <ProfileSection
          profileTitle="Personal Information"
          records={[
            {
              fieldTitle: "Full Name",
              data: `${userDetail[0].guarantor.firstName} ${userDetail[0].guarantor.lastName}`,
            },
            {
              fieldTitle: "Phone Number",
              data: `${userDetail[0].guarantor.phoneNumber}`,
            },
            {
              fieldTitle: "Email Address",
              data: `${userDetail[0].guarantor?.email}`,
            },
            {
              fieldTitle: "Relationship",
              data: `${userDetail[0].guarantor.gender=='male'?'Brother':'Sister'}`,
            },
          ]}
        />{" "}
      </div>
    </main>
  );
};
interface props {
  children?: React.ReactNode;
  profileTitle: string;
  records: { fieldTitle: string; data: string }[];
}
const ProfileSection = ({ children, profileTitle, records }: props) => {
  return (
    <div className="profile-section">
      <p className="section-title">{profileTitle}</p>
      <div className="records">
        {records.map((field, i) => {
          return (
            <div className="field" key={i}>
              <p className="title">{field.fieldTitle}</p>
              <p className="data">{field.data}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default UserDetails;

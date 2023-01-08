import React, { useEffect, useState } from "react";
import { UserInfoCards } from "./Cards";
import { userCards } from "../constants/userCards";
import "../styles/user.scss";
import axios from "axios";
import { ReactSVG } from "react-svg";
import { assets } from "../assets";
const User = () => {

  //tracking axios reponse state
  const [records, setRecords] = useState <object[]>()

  //useEffect hook
  useEffect(() => {

    //declare function to fetch user from api endpoint
    async function fetchUser() {
      try {
        const response = await axios.get(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );
        console.log(response.data)
        setRecords(response.data)
      } catch (error:any) {
        console.error(error)
      }
    }
    fetchUser()
  }, []);

//array to hold table headers
  const tableHeads: string[] = [
    "organization",
    "Username",
    "Email",
    "Phone number",
    "Date joined",
    "Status",
  ];

  //returned JSX
  return (
    <div className="user" id="user">
      <h1>Users</h1>
      <div className="users">
        {userCards.map((info, index) => {
          return (
            <UserInfoCards
              icon={info.icon}
              description={info.description}
              value={info.value}
              style={{ width: "20%" }}
            />
          );
        })}
      </div>
      <section className="table">
        <table>
          <thead>
            <tr>
              {tableHeads.map((th, i) => {
                return (
                  <th>
                    {th} <ReactSVG src={assets.icons.filter} />
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {records?.map((record, i) => {
              return (
                <>
                  <tr></tr>
                </>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default User;

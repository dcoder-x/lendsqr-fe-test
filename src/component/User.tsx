import React, { useCallback, useEffect, useState } from "react";
import { UserInfoCards } from "./Cards";
import { userCards } from "../constants/userCards";
import "../styles/user.scss";
import axios from "axios";
import { ReactSVG } from "react-svg";
import { assets } from "../assets";
const User = () => {
  //tracking axios reponse state
  const [records, setRecords] = useState<object[]>();
  const [filteredRecords, setFilteredRecords] = useState<object[]>();
  const [limit, setLimit] = useState<number>(5);
  const [low_Range_Multiplier, setLowRangeMultiplier] = useState<number>(0);
  const [high_Range_Multiplier, setHighRangeMultiplier] = useState<number>(1);

  //this converts createdAt value to date string
  function getDateJoined(date: Date): any {
    const formatedDate = new Date(date).toDateString();
    return formatedDate;
  }

  
  //useEffect hook to handle axios request
  useEffect(() => {
    //declare function to fetch user from api endpoint
    async function fetchUser() {
      try {
        const response = await axios.get(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );
        console.log(response.data);
        setRecords(response.data);
      } catch (error: any) {
        console.error(error);
      }
    }
    fetchUser();
  }, []);


//this is the algorithm to control the number of users shown managed by useEffect 
  useEffect(() => {
    function userRange() {
      const lower_Range: number = limit * low_Range_Multiplier;
      const higher_Range: number = limit * high_Range_Multiplier;

      const filteredRecords: object[] | undefined = records?.filter(
        (record, index) => {
          return index >= lower_Range && index < higher_Range;
        }
      );
      setFilteredRecords(filteredRecords);
      console.log(filteredRecords)
    }
    userRange()
  }, [records, limit, low_Range_Multiplier, high_Range_Multiplier]);

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
                    <div>
                      <p>{th}</p> <ReactSVG src={assets.icons.filter} />
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {filteredRecords?.map((record, i) => {
              return (
                <>
                  <tr>
                    <td>{record.orgName}</td>
                    <td>{record.userName}</td>
                    <td>{record.email}</td>
                    <td>{record.profile.phoneNumber}</td>
                    <td>{getDateJoined(record.createdAt)}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div className="table-navigators">
          <div className="table-length">
            <p>
              showing
            </p>
            <select name="" id="" onChange={(e)=>setLimit(parseInt(e.target.value))} >
              <optgroup>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="80">80</option>
                <option value="100">100</option>
              </optgroup>
            </select>
            <p>
              out of {records?.length}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default User;

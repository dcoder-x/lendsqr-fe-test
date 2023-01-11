import React, { useCallback, useEffect, useState } from "react";
import { UserInfoCards } from "./Cards";
import { userCards } from "../constants/userCards";
import "../styles/user.scss";
import axios from "axios";
import { ReactSVG } from "react-svg";
import { assets } from "../assets";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import Loader from "../assets/lottie/loader.json";
import Filter from "./Filter";

const User = () => {
  //tracking axios reponse state
  const [records, setRecords] = useState<object[]>();
  const [filteredRecords, setFilteredRecords] = useState<object[]>();
  const [limit, setLimit] = useState<number>(10);
  const [low_Range_Multiplier, setLowRangeMultiplier] = useState<number>(0);
  const [high_Range_Multiplier, setHighRangeMultiplier] = useState<number>(1);
  const [showFilter,setShowFilter] = useState<boolean>(false)

  const navigate = useNavigate();

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
        setRecords(response.data);
        window.localStorage.setItem("users", JSON.stringify(response.data));
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
    }
    userRange();
  }, [records, limit, low_Range_Multiplier, high_Range_Multiplier]);

  //this function controls the set of table data shown
  const [firstThreeNumbers, setFirstThreeNumbers] = useState([1, 2, 3]);

  const maxPageNumber = records?.length / limit;

  //display previous table page by decrementing range Multiplier
  function previousPage() {
    if (filteredRecords && low_Range_Multiplier > 0) {
      setLowRangeMultiplier(low_Range_Multiplier - 1);
      setHighRangeMultiplier(high_Range_Multiplier - 1);
      const newNumbersArray: number[] = [];
      firstThreeNumbers.map((number) => {
        if (number + 1 > 0) {
          newNumbersArray.push(number - 1);
          setFirstThreeNumbers(newNumbersArray);
        }
      });
    }
  }
  //displays next table page by incrementing range multipliers
  function nextPage() {
    if (filteredRecords && high_Range_Multiplier < maxPageNumber) {
      setLowRangeMultiplier(low_Range_Multiplier + 1);
      setHighRangeMultiplier(high_Range_Multiplier + 1);
      const newNumbersArray: number[] = [];
      firstThreeNumbers.map((number) => {
        if (number + 1 < maxPageNumber) {
          newNumbersArray.push(number + 1);
          setFirstThreeNumbers(newNumbersArray);
        }
      });
    }
  }

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
                  <th key={i}>
                    <div>
                      <p>{th}</p> <ReactSVG src={assets.icons.filter} onClick={e=>{setShowFilter(true)}} />
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
                  <tr
                    key={i}
                    onClick={() => {
                      navigate("userdetails", { state: { id: record.id } });
                    }}
                  >
                    <td>{record.orgName}</td>
                    <td>{record.userName}</td>
                    <td>{record.email}</td>
                    <td>{record.profile.phoneNumber}</td>
                    <td>{getDateJoined(record.createdAt)}</td>
                    <td><div className={`status ${record.id%2?'pending':'active'} `}>{record?.id%2?'pending':'active'} </div></td>
                    <td><ReactSVG src={assets.icons.menu}/></td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        {!filteredRecords ? (
            <Lottie
              options={{
                animationData: Loader,
                loop: true,
              }}
              width={'70%'}
            />
          ) : null}
        <div className="table-navigators">
          <div className="table-length">
            <p>showing</p>
            <select
              name=""
              defaultValue={limit}
              id=""
              onChange={(e) => setLimit(parseInt(e.target.value))}
            >
              <optgroup>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="80">80</option>
                <option value="100">100</option>
              </optgroup>
            </select>
            <p>out of {records?.length}</p>
          </div>
          {maxPageNumber > 1 ? (
            <div className="table-page-control">
              <div className="page-btn" onClick={() => previousPage()}>
                &larr;
              </div>
              <p>{firstThreeNumbers[0]},</p> <p>{firstThreeNumbers[1]},</p>{" "}
              <p>{firstThreeNumbers[2]},</p> <p>{` ... ${maxPageNumber}`}</p>
              <div className="page-btn" onClick={() => nextPage()}>
                &rarr;
              </div>
            </div>
          ) : null}
        </div>
        <Filter show={showFilter} onClick={(e)=>setShowFilter(false)} />
      </section>
    </div>
  );
};

export default User;

import React from "react";
interface props {
  show: boolean;
  onClick: React.MouseEventHandler;
}
const Filter = ({ show, onClick }: props) => {
  return (
    <div className="filter" style={{ display: show ? "block" : "none" }}>
      <p className="close" onClick={onClick}>
        &times;
      </p>
      <form action="">
        <label htmlFor="">Organization</label>
        <select className="input" name="" id="">
            <optgroup>
                <option value="">
                    Lendsqr
                </option>
            </optgroup>
        </select>
        <label htmlFor="">Username</label>
        <input className="input" type="text" name="" id="" />
        <label htmlFor="">Email</label>
        <input className="input" type="text" name="" id="" />
        <label htmlFor="">Date</label>
        <input className="input" type="date" name="" id="" />
        <label htmlFor="">Phone number</label>
        <input className="input" type="number" name="" id="" />
        <label htmlFor="">Status</label>
        <select className="input" name="" id="">
            <optgroup>
                <option value="">
                    active
                </option>
            </optgroup>
        </select>
        <div className="buttons">
          <button>Reset</button>
          <button >Filter</button>
        </div>
      </form>
    </div>
  );
};

export default Filter;

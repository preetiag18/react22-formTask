import React from "react";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <h2>Your note</h2>
        <p>
          First Name: <span>{props.firstname}</span>
        </p>
        <p>
          Last Name: <span>{props.lastname}</span>
        </p>
        <p>
          Phone Number: <span>{props.phone}</span>
        </p>
        <p>
          Role: <span>{props.role}</span>
        </p>
        <p>
          Message: <span>{props.message}</span>
        </p>
        <button className="close-icon" onClick={props.close}>
          Ok
        </button>
        <button className="" onClick={props.close}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Popup;

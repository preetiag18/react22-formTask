import React from "react";
import "./View.css";

const View = (props) => {
  return (
    <div className="view-container">
      <div className="view">
        <h2>This is your input</h2>
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
      </div>
    </div>
  );
};

export default View;

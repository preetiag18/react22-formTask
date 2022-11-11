import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <div className="form-container">
      <form onSubmit={props.submit}>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={props.firstname}
          onChange={props.onChange}
        ></input>

        <label for="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={props.lastname}
          onChange={props.onChange}
        ></input>

        <label for="phone">Phone No:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={props.phone}
          onChange={props.onChange}
        ></input>

        <label for="role">Role:</label>
        <select
          type="text"
          id="role"
          defaultValue="choice"
          name="role"
          value={props.role}
          onChange={props.onChange}
        >
          <option value="choice" disabled>
            Choose a role...
          </option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="others">Others</option>
        </select>

        <label for="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={props.message}
          onChange={props.onChange}
        ></textarea>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

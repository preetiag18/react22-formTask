import { Component } from "react";
import "./App.css";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";

class App extends Component {
  state = {
    note: { firstname: "", lastname: "", phone: "", role: "", message: "" },
    showPopup: false,
  };

  togglePopup = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  };

  closeHandler = () => {
    // window.location.reload();
    this.setState({
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
    });
  };

  changeValueEventHandler = (event) => {
    this.setState({
      note: { ...this.state.note, [event.target.name]: event.target.value },
    });
  };

  render() {
    return (
      <div className="container">
        <Form
          onChange={this.changeValueEventHandler}
          submit={this.togglePopup}
          {...this.state.note}
        />
        <View {...this.state.note} />

        {this.state.showPopup ? (
          <Popup
            firstname={this.state.note.firstname}
            lastname={this.state.note.lastname}
            phone={this.state.note.phone}
            role={this.state.note.role}
            message={this.state.note.message}
            close={this.closeHandler}
          />
        ) : null}
      </div>
    );
  }
}

export default App;

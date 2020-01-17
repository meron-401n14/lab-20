import React from "react";


import Input from "./Components/Contactinput.js";
import Select from "./Components/Select.js";
import CheckBox from "./Components/CheckBox.js";
import Button from "./Components/Button.js";
import "./styles/styles.scss";


/**
 
 *this is a parent class which manage state pass props
 * @class MangeContact
 * @constructor   Props pass data thus will not be changed 
 * state pass  used for data that will change (name, phone ...)
 
*/
 

class ManageContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newContact: {
        name: "",
        phone: "",
        gender: "",
        positions: []
      },
      genderOptions: ["Male", "Female", "others"],
      positionOptions: ["Instructor ", "TA", "Student"]
    };

 // here we bind all handle function of components 
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }
/**
 * this function set a state to the current 
 * @param {object} e 
 * this function handles update input name 
 * use prevState to be acurate on the update 
 */
  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newContact: {
          ...prevState.newContact,
          name: value
        }
      }),
      () => console.log(this.state.newContact)
    );
  }

  /**
 * this function set a state to the current 
 * @param {event} e 
 * this function handles update phone input value 
 * use prevState to be acurate on the update 
 */

  handlePhone(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newContact: {
          ...prevState.newContact,
          phone: value
        }
      }),
      () => console.log(this.state.newContact)
    );
  }

    /**
 * this function set a state to the current 
 * @param {event} e 
 * this function handles update of other input values   
 * use prevState to be acurate on the update 
 */
  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newContact: {
          ...prevState.newContact,
          [name]: value
        }
      }),
      () => console.log(this.state.newContact)
    );
  }

  /**
   * updates text area placeholder and other values 
   * @param {event} e 
   */
  handleTextArea(e) {
    console.log("Inside handleTextArea");

    this.setState(
      prevState => ({
        newContact: {
          ...prevState.newContact
        }
      }),
      () => console.log(this.state.newContact)
    );
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;
    if (this.state.newContact.positions.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newContact.positions.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newContact.positions, newSelection];
    }
    this.setState(prevState => ({
      newContact: { ...prevState.newContact, positions: newSelectionArray }
    }));
  }
/**
 * this function set update state of details 
 * @param {event} e 
 * function for Button click 
 */
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newContact: {
        name: "",
        phone: "",
        gender: "",
        positions: []
      }
    });
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="contactMgr">
          <form className="container-fluid">
            <Input
              id={'name'}
              inputtype={"text"}
              title={"Full Name"}
              name={"name"}
              value={this.state.newContact.name}
              placeholder={"Enter your name"}
              handleChange={this.handleInput}
            />{" "}
            {/* Name of the person */}
            <Input
              id={'phone'}
              inputType={"text"}
              name={"phone"}
              title={"Phone"}
              value={this.state.newContact.phone}
              placeholder={"Enter your phone"}
              handleChange={this.handlePhone}
            />{" "}
            <Select
              title={"Gender"}
              name={"gender"}
              options={this.state.genderOptions}
              value={this.state.newContact.gender}
              placeholder={"Select Gender"}
              handleChange={this.handleInput}
            />
            <CheckBox
              title={"Position"}
              name={"positions"}
              options={this.state.positionOptions}
              selectedOptions={this.state.newContact.positions}
              handleChange={this.handleCheckBox}
            />
          </form>
        </div>
        <div className="Display">
          <p />
          <h3>Contact Information</h3>
          <li>{this.state.newContact.name}</li>
          <li>{this.state.newContact.phone}</li>
          <li>{this.state.newContact.gender}</li>
          <li>{this.state.newContact.positions}</li>
        </div>
        <Button
          action={this.handleClearForm}
          type={"primary"}
          title={"Clear"}
          style={buttonStyle}
        />
      </div>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 300px 100px"
};

export default ManageContact;

import React from "react";
/**
 * Button functional component 
 * @param {Props} props 
 * it passes props style, action and title of button 
 */
const Button = props => {
  //console.log(props.style);
  return (
    <button
      style={props.style}
      className={
        props.type === "primary" ? "btn btn-primary" : "btn  btn-secondary"
      }
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

export default Button;

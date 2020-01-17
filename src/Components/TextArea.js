import React from "react";

/**
 * text area component 
 * @param {Props} props 
 * which pass props of form text area, onChange function and placeholder
 */

const TextArea = props => (
  <div className="form-group">
    <label className="form-label"> {props.title}</label>
    <textArea
      className="form-control"
      name={props.name}
      rows={props.rows}
      cols={props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  </div>
);

export default TextArea;

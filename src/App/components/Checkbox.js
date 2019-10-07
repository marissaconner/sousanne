import React from "react";

const Checkbox = ({ label, checkboxid, isSelected, onCheckboxChange, checkboxStyle }) => (
  <div className={ checkboxStyle ? checkboxStyle : '' }>
     <input
        type="checkbox"
        id={checkboxid}
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
    <label htmlFor={ checkboxid }>
      {label}
    </label>
    
  </div>
);

export default Checkbox;
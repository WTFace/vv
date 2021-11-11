import React from 'react';

const FormInput = ({ handleChange, classes, label, ...otherProps }) => (
  <div className="">
    <input className={classes} onChange={handleChange} {...otherProps} />
    {label ? (
      <label>{label}</label>
    ) : null}
  </div>
);

export default FormInput;
import React from 'react';

const FormInput = ({ handleChange, classes, label, ...otherProps }) => (
  <div className="">
    <input className={classes} onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
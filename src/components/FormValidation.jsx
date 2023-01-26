import React, { useState, useEffect } from "react";

export const FormValidation = () => {
  const initialData = { name: "", password: "" };
  const [formData, setFormData] = useState(initialData);

  const [errorFlag, setErrorFlag] = useState(true);

  const [formErrors, setFormErrors] = useState();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    if (Object.keys("formErrors").length > 0) {
      setErrorFlag(false);
    } else {
      setErrorFlag(true);
      setFormData({ name: "", password: "" });
    }
  };

  console.log(formErrors);

  const validate = (values) => {
    let errors = {};
    if (formData.name.length < 3 || formData.name.length > 8) {
      errors.name = "must be between 3-8";
    }
    if (formData.password.length < 3 || formData.password.length > 8) {
      errors.password = "must be between 3-8";
    }
    return errors;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <span>{errorFlag ? "3-8 characters only" : ""}</span>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span>{errorFlag ? "3-8 characters only" : ""}</span>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

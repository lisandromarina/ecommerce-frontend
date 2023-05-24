import React from 'react';

const useFormState = (initialState) => {
  const [formData, setFormData] = React.useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return {
    formData,
    handleChange,
    resetForm,
    setFormData
  };
};

export default useFormState;
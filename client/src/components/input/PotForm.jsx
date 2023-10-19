import React from 'react';
import './PotForm.css';

const PotForm = ({ onSubmit, formData, setFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="left-column">
      <h1>Create a New Lottery Pot</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="potName">Name of Pot:</label>
        <input
          type="text"
          id="potName"
          name="potName"
          required
          value={formData.potName}
          onChange={handleChange}
        />

        <label htmlFor="totalPot">Total Pot Amount:</label>
        <input
          type="number"
          id="totalPot"
          name="totalPot"
          required
          value={formData.totalPot}
          onChange={handleChange}
        />

        <label htmlFor="MaxnoofMemebers">Max no of Memebers:</label>
        <input
          type="number"
          id="MaxnoofMemebers"
          name="MaxnoofMemebers"
          required
          value={formData.entryFee}
          onChange={handleChange}
        />

        <button type="submit" className="apply-button">
          Apply
        </button>
      </form>
    </div>
  );
};

export default PotForm;

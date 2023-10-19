import React, { useState, useEffect } from 'react';
import PotForm from './components/input/PotForm';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ potName: '', totalPot: '',  MaxnoofMemebers:'' });
  const [allPotData, setAllPotData] = useState([]);
 


  const handlePotSubmit = (data) => {
    const newPotData = { ...data };
    setAllPotData([...allPotData, newPotData]);
    setFormData({ potName: '', totalPot: '', MaxnoofMemebers: '' });
  };

  useEffect(() => {
    console.log('AllPotData:', allPotData);
  }, [allPotData]);

  return (
    <div className="container">
      <PotForm onSubmit={handlePotSubmit} formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default App;
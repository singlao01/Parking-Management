import React, { useState } from 'react';
import '../Styles/Wallet.css';
const Wallet = () => {
  // State to track wallet balance
  const [balance, setBalance] = useState(0);

  // Functions to handle button clicks
  const addAmount = (amount) => {
    setBalance(balance + amount); // Update balance
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Wallet Balance: ₹{balance}</h1>
      <div style={{ margin: '20px 0' }}>
        <button 
          onClick={() => addAmount(300)} 
          style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Add ₹300
        </button>
        <button 
          onClick={() => addAmount(500)} 
          style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Add ₹500
        </button>
        <button 
          onClick={() => addAmount(100)} 
          style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Add ₹100
        </button>
      </div>
    </div>
  );
};

export default Wallet;
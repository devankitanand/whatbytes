// src/components/UpdatePopup.js
"use client";
import { useState } from 'react';
import Image from 'next/image';

const UpdatePopup = ({ show, onClose, onUpdate }) => {
  const [rank, setRank] = useState('');
  const [percentile, setPercentile] = useState('');
  const [score, setScore] = useState('');

  const handleUpdate = () => {
    onUpdate({ rank, percentile, score });
    onClose();
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className='flex justify-between'>
          <div className='font-bold'><h2>Update Scores</h2></div>
          <div><Image src='/html-5.png' width={20} height={20} alt='logo'/></div>
        </div>
        
        <div className='flex justify-between'>
          <div><label>Update Your Rank</label></div>
          <input className='rank' type="number" value={rank} onChange={(e) => setRank(e.target.value)} />
        </div>
        <div className='flex justify-between'>
          <div><label>Update your Percentile</label></div>
          <input type="number" value={percentile} onChange={(e) => setPercentile(e.target.value)} />
        </div>
        <div className='flex justify-between'>
          <div><label>Current Score (out of 15)</label></div>
          
          <input type="number" value={score} onChange={(e) => setScore(e.target.value)} />
        </div>
        <div className="popup-actions">
          <button className='popupbtn mr-5' onClick={onClose}>Cancel</button>
          <button className='popupbtn save' onClick={handleUpdate}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePopup;

// import React from 'react'
import './zaatar.css'

const zaatar = () => {
  const imageUrl = 'https://images.squarespace-cdn.com/content/v1/63eaccd438e5b6253348ed6f/1676332245495-FH2PZ8E1OP8JGR4XN01S/Stocksy_comp_1879930+1.jpg';
  
  return (
    <div className="zaatar-container">
      <img src={imageUrl} alt="Zaatar" className="zaatar-image" />
      <div className='text-overlay'>
        <p> SS23</p> 
        <p>SUMMER SALE</p>
        <button className='shopnow'> SHOP NOW</button>
      </div>
    </div>
  );
};

export default zaatar

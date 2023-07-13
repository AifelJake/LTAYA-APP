import '../App.css';
import React, { useState, useEffect } from 'react';

const EventWinnerCard = () => {
  const [raichuData, setRaichuData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/raichu')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(data.abilities);

        setRaichuData(data.abilities.map(ability => {
          return ability.ability.name; // Extract the ability name
        }));
      });
  }, []);

  return (
    <div className="card-event-container">
      <div className="event-container">
        {raichuData.map((ability, index) => (
          <div key={index} className="name">
            <div className="top-container">
              <div className="names">
                <p className="title-name">NAMES</p>
              </div>
              <p className="box-date">12/23/12</p>
            </div>
            <div className="winner-names-container">
              <h3 className="winner">WINNER</h3>
              <div className="winner-names-box">
                <h2 className="winner-names">{ability}</h2>
              </div>
              <p>{ability}</p>
            </div>
            <div className="lowerbanner">TIGER ARENA</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventWinnerCard;

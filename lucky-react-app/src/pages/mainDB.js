import React, { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// COMPONENTS IMPORT 
import OneVOne from "../components/one-v-one";
import EventWinnerCard from "../components/eventWinnerCard"
import Footer from "../components/footer.js"
import GamesBox from "../components/games-box.js"
import PerGame from "../components/per-game.js"

/* IMAGES IMPORT*/
import cup from '../images/cup.png'
import award from "../images/award.png"
import trifecta from "../images/trifecta.png"
import sharks from "../images/sharks-cup.png"

const PokemonInfo = () => {
  const [pokemonData, setPokemonData] = useState([]);
  

    useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(data.abilities);

        setPokemonData(data.abilities.map(ability => {
          return ability.ability.name; // Extract the ability name
        }));
      });
  }, []);

  const [show, setShow] = useState(false);

  const showPerGame = () => {
    setShow(!show);
  };
  
  



  return (
    <>
      
      <EventWinnerCard />

      

      <div className="one-v-one-box">

        <div className="games-container mt-3">

          <div className="logo-container">

            <div className="p-2" role="button" tabIndex={0} onClick={showPerGame}>
              <img src={cup} alt="cup" height="40" />
            </div>

            <div className="p-2">
              <img src={award} alt="award"  height="40" />
            </div>

            <div className="p-2">
              <img src={trifecta} alt="trifecta"  height="40" />
            </div>


          </div>

          {/* FIRST CURRENT PLAYTING PLAYER BOX*/}

          <div className="player-cards-container text-light">

            <div className="d-flex top-heading">
              

              <h3 className="text-light per-game-text">PER GAME</h3>
              <p className="text-light date-played">14:00:00 JUNE 21, 2023</p>

            </div>

            <h4 className="text-light text-center tiger-arena-text">TIGER ARENA</h4>

            <OneVOne abilities={pokemonData} /> {/* Pass the abilities data as a prop */}

            <div className="d-flex justify-content-center odds-container">

              <h8>ODDS: 1.0X</h8>

              <h8>ODDS: 1.0X</h8>

            </div>

            {/* VIEW MATCH*/}

            <div className="mt-1">

              <h6 className="text-center view-match-text">VIEW MATCH</h6>

            </div>

          </div>

          {/* SECOND CURRENT PLAYTING PLAYER BOX*/}

          <div className="player-cards-container1 text-light">

            <div className="d-flex top-heading">

              <h3 className="text-light per-game-text">PER GAME</h3>
              <p className="text-light date-played">14:00:00 JUNE 21, 2023</p>

            </div>

            <h4 className="text-light text-center tiger-arena-text">GREAT WHITE ARENA</h4>

            <OneVOne abilities={pokemonData} /> {/* Pass the abilities data as a prop */}

            <div className="d-flex justify-content-center odds-container">

              <h8>ODDS: 1.0X</h8>

              <h8>ODDS: 1.0X</h8>

            </div>

            <div className="mt-1">

              <h6 className="view-match-text text-center">VIEW MATCH</h6>

            </div>

          </div>

        </div>

      </div>

      < PerGame /> 

      {/* GAMES BOX SECTION */}
      { show && < GamesBox />}

      <div className="d-flex mt-3">

        <h5 className="special-events-header text-light">SPECIAL EVENTS</h5>
        <p className="view-all-text">VIEW ALL</p>

      </div>

      <div className="d-flex justify-content-center">

        <img src={sharks} />

      </div>

      <p className="fury-text">SPECTRAL FURY</p>
      <div className="after-photo-text">
        <p><span className="name-span">FEDOR GORD VS CARLO BIADO</span> JUNE 5, 2023 | RACE TO 90 | 3 DAYS</p>
      </div>

      {/* FOOTER SECTION  */}

       < Footer /> 
    </>
  );
};

export default PokemonInfo;

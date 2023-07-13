import cup from '../images/cup.png'
import award from "../images/award.png"
import clover from "../images/clover.png"

const gamesBox = () => {


    return (

        <>
            {/* PER GAME AND ALL PHOTO*/}
         <div className="d-flex justify-content-center pergame-pick1-container mt-2">

        {/* per game photo container*/}
        <div className="per-game-photo">

        <img src={cup} height="60" />
        <h1>PER GAME</h1>
        <p className="text-center text-light">Tumaya sa kada rack habang nag lalaban</p>

        </div>


        <div className="pick1-photo">



        <img src={award} height="60" />
        <h1>PICK-1</h1>
        <p className="pick1-text text-center text-light">Tumaya sa mananalo bago magumpisa ang laban</p>

        </div>

        </div>

        {/* NUMBER GAMES */}

        <div className="d-flex justify-content-center mt-2">

        <div className="d-flex number-games-container">

        <img src={clover} height="70" className="mt-4" />

        <div className="number-games-text">

            <h1 className="number-games-header">NUMBER GAMES</h1>
            <p className="text-light">Pumili ng 2 digit combination ng tatayaan sa 10 main Ring. 10 pesos tama 4,000 pesos</p>

        </div>

        </div>

        </div>

        </>
    )
}

export default gamesBox;
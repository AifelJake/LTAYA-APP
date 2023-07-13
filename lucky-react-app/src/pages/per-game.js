import live from "../images/live.png"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Arena from "../components/select-event-card.js"


const pergame = () => {



	return (

		<>

			<h1 className="text-center select-event-headline">SELECT EVENT</h1>

			<Arena arenaName="TIGER ARENA" address="Sgt. Esguera, Quezon City" />

			<Arena arenaName="GREAT WHITE ARENA" address="Tomas Morato, Quezon City" />

			<Arena arenaName="HAMMERHEAD ARENA" address="Tondo, Manila" />

			<Arena arenaName="BULLSHARK ARENA" address="Mactan, Cebu" />


			
			


		</>

		)
}

export default pergame;
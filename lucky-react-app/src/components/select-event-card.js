import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import live from "../images/live.png"

const Arena = props => {

	const { arenaName, address } = props

	return (

			<div className="container ">

				<div className="row justify-content-center my-4">
					<div className="event-card col-11 col-md-3 d-flex align-items-center text-light">

						<div>
							<img src={live} height="20"/>
						</div>
						
						
						<div className="event-card-text">
							<h1 className=" tiger-arena-text ">{arenaName}</h1>
							<p className="">{address}</p>
						</div>

					</div>
				</div>

			</div>

		)
}

export default Arena;
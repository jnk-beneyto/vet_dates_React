import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Cita from "./components/Cita";

import "./app.css";

function App() {
	//citas on LocalStorage
	let citasIniciales = JSON.parse(localStorage.getItem("citas"));
	if (!citasIniciales) {
		citasIniciales = [];
	}

	//citas array State
	const [citas, guardaCitas] = useState(citasIniciales);

	//saving any change on LocalStorage
	useEffect(() => {
		if (citasIniciales) {
			localStorage.setItem("citas", JSON.stringify(citas));
		} else {
			localStorage.setItem("citas", JSON.stringify([]));
		}
	}, [citas, citasIniciales]);

	//function gets old citas and add a new one
	const createCita = newCita => {
		guardaCitas([...citas, newCita]); //updating citas array when adding
	};

	//function gets old citas and add a new one
	const removeCita = id => {
		const newCitas = citas.filter(cita => cita.id !== id);
		guardaCitas(newCitas); //updating citas array when removing
	};

	return (
		<Fragment>
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-4">
						<h4 className="text-center">ADMINISTRADOR DE CITAS</h4>
						<div className="container">
							<Form createCita={createCita} />
						</div>
					</div>
					<div className="col-sm-12 col-md-8">
						<h4 className="text-center">CITAS PENDIENTES</h4>
						<div className="container">
							{citas.length === 0 ? (
								<h2 className="text text-center alert alert-primary">
									No hay citas pendientes
								</h2>
							) : (
								citas.map(cita => (
									<Cita key={cita.id} cita={cita} removeCita={removeCita} />
								))
							)}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;

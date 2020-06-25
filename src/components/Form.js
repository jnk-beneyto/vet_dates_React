import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ createCita }) => {
	//data State datosCita
	const [datosCita, modifyCita] = useState({
		nombre: "",
		propietario: "",
		dia: "",
		hora: "",
		sintomas: ""
	});

	//error handler
	const [error, modifyErrorState] = useState(false);

	//handling form inputs from form
	const handleState = e => {
		modifyCita({
			...datosCita, //getting object updated
			[e.target.name]: e.target.value //updating specific input
		});
	};

	//destructuring data
	const { nombre, propietario, dia, hora, sintomas } = datosCita;

	//clicking a button
	const creandoCita = e => {
		e.preventDefault();

		//validating
		if (
			nombre.trim() === "" ||
			propietario.trim() === "" ||
			dia.trim() === "" ||
			hora.trim() === "" ||
			sintomas.trim() === ""
		) {
			modifyErrorState(true);
			return;
		}

		//removing error message
		modifyErrorState(false);

		//assigning an ID
		datosCita.id = uuidv4();

		//creating a new dating
		createCita(datosCita);

		//renew a form
		modifyCita({
			nombre: "",
			propietario: "",
			dia: "",
			hora: "",
			sintomas: ""
		});
	};

	return (
		<Fragment>
			{error ? (
				<div className="error alert alert-danger">Rellena todos los campos</div>
			) : null}
			<form onSubmit={creandoCita}>
				<div className="form-group">
					<label htmlFor="nombre"> Nombre: </label>{" "}
					<input
						type="text"
						name="nombre"
						className="form-control"
						placeholder="Nombre mascota"
						onChange={handleState} //whenever there's a change on this input this event works
						value={nombre}
					/>
				</div>{" "}
				<div className="form-group">
					<label htmlFor="propietario"> Propietario: </label>{" "}
					<input
						type="text"
						name="propietario"
						className="form-control"
						placeholder="Nombre propietario"
						onChange={handleState}
						value={propietario}
					/>
				</div>{" "}
				<div className="form-group">
					<label htmlFor="dia"> Día: </label>{" "}
					<input
						type="date"
						name="dia"
						className="form-control"
						value={dia}
						onChange={handleState}
					/>
				</div>{" "}
				<div className="form-group">
					<label htmlFor="hora"> Hora: </label>{" "}
					<input
						type="time"
						name="hora"
						className="form-control"
						onChange={handleState}
						value={hora}
					/>
				</div>{" "}
				<div className="form-group">
					<label htmlFor="sintomas"> Síntomas: </label>{" "}
					<textarea
						className="form-control"
						cols="20"
						name="sintomas"
						onChange={handleState}
						value={sintomas}
					></textarea>
				</div>{" "}
				<div className="form-group">
					<input
						type="submit"
						className="btn btn-primary"
						id="crear"
						value="agregar"
					/>
				</div>{" "}
			</form>{" "}
		</Fragment>
	);
};

export default Form;

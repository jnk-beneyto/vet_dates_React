import React, { Fragment } from "react";

const Cita = ({ cita, removeCita }) => {
	const { nombre, propietario, dia, hora, sintomas } = cita;

	return (
		<Fragment>
			<div className="card">
				<div className="card-body">
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<p>
								<span className="float-left">Fecha: {dia} </span>{" "}
								<span className="float-right">Hora:{hora} </span>
							</p>
						</li>

						<div className="row">
							<div className="col-6">
								<h5 className="card-title mt-3">Mascota: {nombre} </h5>
							</div>
							<div className="col-6">
								<h5 className="mr-2 float-left mt-3">
									Propietario: {propietario}{" "}
								</h5>
							</div>
						</div>

						<p className="card-text my-3">Síntomas: {sintomas}</p>
					</ul>

					<button
						type="button"
						className="btn btn-danger"
						onClick={() => removeCita(cita.id)}
					>
						Eliminar <i className="fa fa-times" aria-hidden="true"></i>
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default Cita;

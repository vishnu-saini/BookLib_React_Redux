import React from "react";

export const StudentComponent = (props) => {
	console.log("I am in student component");
	console.log(props.students);
	return (
		<div className="container">
			<h2>Students</h2>
			<table className="table">
				<thead>
					<tr>
						<th>Id</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Phone Nubmer</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>

					{props.students.map((student, i) =>
						<tr key={i}>
							<td>{student.id}</td>
							<td>{student.firstName}</td>
							<td>{student.lastName}</td>
							<td>{student.phoneNubmer}</td>
							<td>{student.email}</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);

}
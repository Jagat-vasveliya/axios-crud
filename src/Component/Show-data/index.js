import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

export default function ShowData() {
	const [userData, setuserData] = useState([]);
	useEffect(() => {
		axios.get(
			"https://61fe43c7a58a4e00173c97b0.mockapi.io/userInformation"
		).then((response) => {
			setuserData(response.data);
		});
	}, []);

	const displayData = userData.map((data) => {
		return (
			<tr>
				<td>{data.id}</td>
				<td>{data.firstName}</td>
				<td>{data.lastName}</td>
				<td>{data.age}</td>
				<td>{data.gender}</td>
				<td>{data.hobbies}</td>
				<td>
					<button className="btn btn-update">Update</button>
				</td>
				<td>
					<button className="btn btn-delete">Delete</button>
				</td>
			</tr>
		);
	});

	return (
		<div className="show-data">
			<div>
				<h1>User Information</h1>
			</div>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>First name</th>
						<th>Last name</th>
						<th>Age</th>
						<th>Gender</th>
						<th>Hobbies</th>
						<th>Update</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>{displayData}</tbody>
			</table>
		</div>
	);
}

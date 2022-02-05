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

	console.log(userData);
	const displayData = userData.map((data) => {
		return (
			<tr>
				<td>{data.id}</td>
				<td>{data.firstName}</td>
				<td>{data.lastName}</td>
				<td>{data.age}</td>
				<td>{data.gender}</td>
				<td>{data.hobbies}</td>
			</tr>
		);
	});

	return (
		<div className="show-data">
			<table>
				<thead>
					<tr>
						<td>Id</td>
						<td>First name</td>
						<td>Last name</td>
						<td>Age</td>
						<td>Gender</td>
						<td>Hobbies</td>
					</tr>
				</thead>
				<tbody>{displayData}</tbody>
			</table>
		</div>
	);
}

import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function ShowData() {
	const reDiract = useNavigate();
	const [userData, setuserData] = useState([]);
	useEffect(() => {
		setData();
	}, []);
	const setData = async () => {
		const response = await axios.get(
			`https://61fe43c7a58a4e00173c97b0.mockapi.io/userInformation`
		);
		setuserData(response.data);
	};
	const deleteData = (id) => {
		if (window.confirm("Are you sure you want to delete it ?")) {
			axios({
				method: "DELETE",
				url: `https://61fe43c7a58a4e00173c97b0.mockapi.io/userInformation/${id}`,
			}).then((respone) => {
				setData();
			});
		}
	};
	const displayData = userData.map((data) => {
		let hobbiesData = data.hobbies;
		let displayHobbies = "";
		Object.keys(hobbiesData).map((key) =>
			hobbiesData[key] === true ? (displayHobbies += key + ", ") : ""
		);
		displayHobbies = displayHobbies.replace(/,\s*$/, "");
		if (displayHobbies === "") {
			displayHobbies = "No hobbies";
		}
		return (
			<tr>
				<td>{data.id}</td>
				<td>{data.firstName}</td>
				<td>{data.lastName}</td>
				<td>{data.age}</td>
				<td>{data.gender}</td>
				<td>{displayHobbies}</td>
				<td>
					<Link to={`/Update/${data.id}`}>
						<button className="btn btn-update">Update</button>
					</Link>
				</td>
				<td>
					<button
						type="button"
						className="btn btn-delete"
						onClick={() => deleteData(data.id)}
					>
						Delete
					</button>
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

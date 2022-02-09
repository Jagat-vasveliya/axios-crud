import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.css";

export default function UpdateData() {
	const reDiract = useNavigate();
	const { id } = useParams();
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		age: "",
		gender: "",
		hobbies: {
			ListingMusic: false,
			Devloping: false,
			PlayingGames: false,
			JustChilling: false,
		},
	});
	const setuserData = async () => {
		axios.get(
			`https://61fe43c7a58a4e00173c97b0.mockapi.io/userInformation/${id}`
		)
			.then((response) => {
				setData(response.data);
			})
			.catch((err) => reDiract("/showData"));
	};
	useEffect(() => {
		setuserData();
	}, []);
	const setValue = (event) => {
		const { name, value, type } = event.target;
		if (type === "checkbox") {
			const hobbies = { ...data.hobbies };
			hobbies[name] = event.target.checked;
			setData((prevState) => ({ ...prevState, hobbies }));
		} else {
			setData((prevState) => ({ ...prevState, [name]: value }));
		}
	};
	const updateData = (event) => {
		event.preventDefault();
		const url = `https://61fe43c7a58a4e00173c97b0.mockapi.io/userInformation/${id}`;
		axios({
			method: "put",
			url: url,
			data: {
				id: id,
				firstName: data.firstName,
				lastName: data.lastName,
				gender: data.gender,
				age: data.age,
				hobbies: data.hobbies,
			},
		}).then((respone) => {
			reDiract("/showData");
		});
	};
	return (
		<div className="Add-data">
			<div>
				<h1>Update Data</h1>
			</div>
			<div className="Add-form">
				<form onSubmit={updateData}>
					<div className="form-control">
						<label htmlFor="firstName" className="label">
							First name
						</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							className="input"
							value={data.firstName}
							placeholder="First name"
							onChange={setValue}
							required
						/>
					</div>
					<div className="form-control">
						<label htmlFor="lastName" className="label">
							Last name
						</label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							className="input"
							value={data.lastName}
							placeholder="Last name"
							onChange={setValue}
							required
						/>
					</div>
					<div className="form-control">
						<label htmlFor="age" className="label">
							Age
						</label>
						<input
							type="number"
							id="age"
							name="age"
							className="input"
							value={data.age}
							placeholder="Age"
							onChange={setValue}
							required
						/>
					</div>
					<div className="form-control">
						<label htmlFor="gender" className="label">
							Gender
						</label>
						<div className="custom">
							<input
								type="radio"
								name="gender"
								id="male"
								value="Male"
								checked={
									data.gender === "Male"
										? true
										: false
								}
								onChange={setValue}
								required
							/>
							<label htmlFor="male" className="label">
								Male
							</label>
							<input
								type="radio"
								name="gender"
								id="female"
								value="Female"
								checked={
									data.gender === "Female"
										? true
										: false
								}
								onChange={setValue}
								required
							/>
							<label htmlFor="female" className="label">
								Female
							</label>
						</div>
					</div>
					<div className="form-control">
						<label htmlFor="hobbies" className="label">
							Hobbies
						</label>
						<div className="custom">
							<input
								type="checkbox"
								name="ListingMusic"
								id="listingMusic"
								checked={data.hobbies.ListingMusic}
								onChange={setValue}
							/>
							<label
								htmlFor="listingMusic"
								className="label"
							>
								Listing Music
							</label>
						</div>
						<div className="custom">
							<input
								type="checkbox"
								name="Devloping"
								id="Devloping"
								checked={data.hobbies.Devloping}
								onChange={setValue}
							/>
							<label htmlFor="Devloping" className="label">
								Devloping
							</label>
						</div>
						<div className="custom">
							<input
								type="checkbox"
								name="PlayingGames"
								id="playingGames"
								checked={data.hobbies.PlayingGames}
								onChange={setValue}
							/>
							<label
								htmlFor="playingGames"
								className="label"
							>
								Palying Games
							</label>
						</div>
						<div className="custom">
							<input
								type="checkbox"
								name="JustChilling"
								id="justChilling"
								checked={data.hobbies.JustChilling}
								onChange={setValue}
							/>
							<label
								htmlFor="justChilling"
								className="label"
							>
								Just Chilling
							</label>
						</div>
					</div>
					<hr />
					<div className="submit-area">
						<button className="btn-submit" type="submit">
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

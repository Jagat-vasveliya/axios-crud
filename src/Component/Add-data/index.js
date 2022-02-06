import React, { useState } from "react";
import "./index.css";

export default function AddData() {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		age: "",
		gender: "",
		hobbies: {
			devloping: false,
			listingMusic: false,
			playingGames: false,
			justChilling: true,
		},
	});
	const setValue = (event) => {
		const { name, value } = event.target;
		const setHobbies = data.hobbies;
		console.log(setHobbies[{name}])
		setData((prevState) => ({ ...prevState, [name]: value }));
	};
	return (
		<div className="Add-data">
			<div>
				<h1>Add Data</h1>
			</div>
			<div className="Add-form">
				<form>
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
							/>
							<label htmlFor="male" className="label">
								Male
							</label>
							<input
								type="radio"
								name="gender"
								id="female"
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
								name="devloping"
								id="devloping"
								checked={data.hobbies.devloping}
								onChange={setValue}
							/>
							<label htmlFor="devloping" className="label">
								Devloping
							</label>
						</div>
						<div className="custom">
							<input
								type="checkbox"
								name="listingMusic"
								id="listingMusic"
								checked={data.hobbies.listingMusic}
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
								name="playingGames"
								id="playingGames"
								checked={data.hobbies.playingGames}
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
								name="justChilling"
								id="justChilling"
								checked={data.hobbies.justChilling}
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
						<button className="btn-submit" type="button">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

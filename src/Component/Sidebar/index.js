import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./index.css";

export default function Sidebar() {
	function CustomeNavLink(props) {
		return (
			<NavLink
				className={({ isActive }) => (isActive ? "active" : "")}
				{...props}
			/>
		);
	}
	return (
		<div className="main">
			<div className="sidebar">
				<ul className="menu-list">
					<nav>
						<CustomeNavLink to="/ShowData">
							<li className="list-item">
								<span className="menu-name">
									Show data
								</span>
							</li>
						</CustomeNavLink>
						<CustomeNavLink to="/Add">
							<li className="list-item">
								<span className="menu-name">
									Add data
								</span>
							</li>
						</CustomeNavLink>
						<CustomeNavLink to="/Update">
							<li className="list-item">
								<span className="menu-name">
									Update data
								</span>
							</li>
						</CustomeNavLink>
					</nav>
				</ul>
			</div>
			<Outlet />
		</div>
	);
}

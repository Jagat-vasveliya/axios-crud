import "./App.css";
import AddData from "./Component/Add-data";
import ShowData from "./Component/Show-data";
import Sidebar from "./Component/Sidebar";
import UpdateData from "./Component/Update-data";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Sidebar />}>
						<Route path="/Add" element={<AddData />} />
						<Route path="/Update" element={<UpdateData />} />
						<Route path="/ShowData" element={<ShowData />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

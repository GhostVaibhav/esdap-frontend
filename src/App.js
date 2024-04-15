import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnalysisWindow from "./screens/AnalysisWindow";
import LoginWindow from "./screens/LoginWindow";
import ResultWindow from "./screens/ResultWindow";
import AboutUsWindow from "./screens/AboutUs";
// import Home from "./screens/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AnalysisWindow />} />
				<Route path="/login" element={<LoginWindow />} />
				<Route path="/result" element={<ResultWindow />} />
				<Route path="/aboutus" element={<AboutUsWindow />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

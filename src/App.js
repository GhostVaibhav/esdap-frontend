import { HashRouter, Routes, Route } from "react-router-dom";
import AnalysisWindow from "./screens/AnalysisWindow";
import LoginWindow from "./screens/LoginWindow";
import ResultWindow from "./screens/ResultWindow";
import AboutUsWindow from "./screens/AboutUs";
// import Home from "./screens/Home";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<AnalysisWindow />} />
				<Route path="/login" element={<LoginWindow />} />
				<Route path="/result" element={<ResultWindow />} />
				<Route path="/about" element={<AboutUsWindow />} />
			</Routes>
		</HashRouter>
	);
}

export default App;

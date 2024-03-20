import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnalysisWindow from "./screens/AnalysisWindow";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/input" element={<AnalysisWindow />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

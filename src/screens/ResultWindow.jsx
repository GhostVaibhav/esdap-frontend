import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ResultCard from "../components/ResultCard";
const ResultWindow = () => {
	return (
		<>
			<div
				className=" dark:bg-gray-900"
				style={{ fontFamily: "Poppins" }}
			>
				<Navbar />
				<ResultCard />
				<Footer />
			</div>
		</>
	);
};

export default ResultWindow;

import StudentDetailsForm from "../components/StudentDetailsForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AnalysisWindow = () => {
	return (
		<div className="flex flex-col min-h-screen dark:bg-gray-900" style={{ fontFamily: "Poppins" }}>
			<Navbar />
			<StudentDetailsForm />
			<Footer />
		</div>
	);
};

export default AnalysisWindow;

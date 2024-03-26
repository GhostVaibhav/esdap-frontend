import StudentDetailsForm from "../components/StudentDetailsForm";
import Navbar from "../components/Navbar";

const AnalysisWindow = () => {
	return (
		<div className=" dark:bg-gray-900" style={{ fontFamily: "Poppins" }}>
			<Navbar />
			<StudentDetailsForm />
		</div>
	);
};

export default AnalysisWindow;

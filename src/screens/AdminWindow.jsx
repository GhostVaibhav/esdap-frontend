import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AdminWindow = () => {
	return (
		<>
			<div
				className="flex flex-col min-h-screen dark:bg-gray-900"
				style={{ fontFamily: "Poppins" }}
			>
				<Navbar />
				<Footer />
			</div>
		</>
	);
};

export default AdminWindow;

/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";
import LoginCard from "../components/LoginCard";
import Navbar from "../components/Navbar";

function LoginWindow() {
	return (
		<>
			<div
				className="flex flex-col min-h-screen dark:bg-gray-900 "
				style={{ fontFamily: "Poppins" }}
			>
				<Navbar />
				<LoginCard />
				<Footer />
			</div>
		</>
	);
}

export default LoginWindow;

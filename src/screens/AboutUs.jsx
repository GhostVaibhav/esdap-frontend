import Navbar from "../components/Navbar";
import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";
const AboutUsWindow = () => {
	return (
		<>
			<div
				className="flex flex-col min-h-screen dark:bg-gray-900"
				style={{ fontFamily: "Poppins" }}
			>
				<Navbar />
				<AboutCard />
				<Footer />
			</div>
		</>
	);
};

export default AboutUsWindow;

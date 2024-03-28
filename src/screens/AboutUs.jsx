import Navbar from "../components/Navbar";
import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";
const AboutUsWindow = () => {
	return (
		<>
			<div
				className=" dark:bg-gray-900"
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

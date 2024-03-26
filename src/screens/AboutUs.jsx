import Navbar from "../components/Navbar";
import AboutCard from "../components/AboutCard";
const AboutUsWindow = () => {
	return (
		<>
			<div
				className=" dark:bg-gray-900"
				style={{ fontFamily: "Poppins" }}
			>
				<Navbar />
				<AboutCard />
			</div>
		</>
	);
};

export default AboutUsWindow;

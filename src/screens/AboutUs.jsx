import Navbar from "../components/Navbar";
const AboutUsWindow = () => {
	return (
		<>
			<div
				className=" dark:bg-gray-900"
				style={{ fontFamily: "Poppins" }}
			>
				<Navbar activeLink="/aboutus" />
			</div>
		</>
	);
};

export default AboutUsWindow;

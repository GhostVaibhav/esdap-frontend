import Navbar from "../components/Navbar";

const AdminWindow = () => {
	return (
		<>
			<div
				className=" dark:bg-gray-900"
				style={{ fontFamily: "Poppins" }}
			>
				<Navbar activeLink="/admin"/>
			</div>
		</>
	);
};

export default AdminWindow;

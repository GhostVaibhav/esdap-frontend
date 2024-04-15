const handleSubmit = async (e) => {
	e.preventDefault();
	try {
	} catch (error) {
		console.error("Error submitting data:", error);
	}
};
const LoginCard = () => {
	return (
		<>
			<div className="max-w-3xl lg:max-w-2xl md:max-w-xl md:mx-auto md:mt-10 md:mb-10 p-4 rounded-2xl shadow-2xl shadow-black animate__animated animate__fadeIn ">
				<h2 className="text-3xl font-semibold my-6 mx-2 text-white">
					Login
				</h2>
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col md:flex-row">
						<div className="">
							<div className="my-4 mx-2">
								<label
									htmlFor="academicScores"
									className="block text-sm mb-1 text-slate-300 "
								>
									Username:
								</label>
								<input
									type="text"
									id="academicScores"
									// value={academicScores}
									onChange={(e) => {}}
									className="w-full px-4 py-2  rounded-3xl focus:outline-none "
									placeholder="username"
								/>
							</div>
							<div className="my-4 mx-2">
								<label
									htmlFor="attendancePercentage"
									className="block text-sm mb-1 text-slate-300"
								>
									Password:
								</label>
								<input
									type="text"
									id="attendancePercentage"
									// value={username}
									onChange={(e) => {}}
									className="w-full px-4 py-2 border rounded-3xl focus:outline-none "
									placeholder="******"
								/>
							</div>
						</div>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none"
						// onClick={handleSubmit}
					>
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default LoginCard;

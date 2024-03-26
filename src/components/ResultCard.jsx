const ResultCard = () => {
	return (
		<>
			<div className="flex flex-col md:flex-row justify-evenly">
				<div className="max-w-xl md:max-w-xl lg:max-w-lg md:mr-20 md:my-10 dark:bg-gray-800 py-12 px-14 mx-10 rounded-3xl shadow-xl">
					<h2 className="text-3xl font-bold  mb-8 text-white">
						Result Score Dashboard
					</h2>

					<div className="flex flex-row justify-between items-center mb-8">
						<h3 className="text-lg  text-gray-300">
							Academic Scores
						</h3>
						<span className="text-lg  text-blue-500">
							{/* Replace with your score calculation logic */}
						</span>
					</div>

					<div className="flex flex-row justify-between items-center mb-8">
						<h3 className="text-lg  text-gray-300">
							Attendance Percentage
						</h3>
						<span className="text-lg  text-blue-500">
							{/* Replace with your score calculation logic */}
						</span>
					</div>

					<div className="flex flex-row justify-between items-center mb-8">
						<h3 className="text-lg  text-gray-300">
							Extracurricular Activities
						</h3>
						<span className="text-lg  text-blue-500">
							{/* Replace with your score calculation logic */}
						</span>
					</div>

					<div className="flex flex-row justify-between items-center mb-8">
						<h3 className="text-lg  text-gray-300">
							Basic Fitness Scores
						</h3>
						<span className="text-lg  text-blue-500">
							{/* Replace with your score calculation logic */}
						</span>
					</div>
					<div className="flex flex-row justify-between items-center mb-8">
						<h3 className="text-lg  text-gray-300">
							Teamwork Skill Scores
						</h3>
						<span className="text-lg  text-blue-500">
							{/* Replace with your score calculation logic */}
						</span>
					</div>
					<div className="flex flex-row justify-between items-center mb-8">
						<h3 className="text-lg  text-gray-300">
							Research Experience
						</h3>
						<span className="text-lg  text-blue-500">
							{/* Replace with your score calculation logic */}
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default ResultCard;

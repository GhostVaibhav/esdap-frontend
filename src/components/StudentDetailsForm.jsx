import React, { useState } from "react";

const StudentDetailsForm = () => {
	const [academicScores, setAcademicScores] = useState("");
	const [attendancePercentage, setAttendancePercentage] = useState("");
	const [extracurricularActivities, setExtracurricularActivities] =
		useState("");
	const [basicFitnessScores, setBasicFitnessScores] = useState("");
	const [teamworkSkillScores, setTeamworkSkillScores] = useState("");
	const [recommendationLetters, setRecommendationLetters] = useState("");
	const [researchExperience, setResearchExperience] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Perform form submission logic here
		console.log("Form submitted!");
	};

	return (
		<div className="max-w-xl mx-auto my-8 bg-sky-200 p-8 rounded-2xl shadow-xl">
			<h2 className="text-2xl font-semibold mb-6 ">Student Details</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label
						htmlFor="academicScores"
						className="block font-medium mb-1"
					>
						Academic Scores:
					</label>
					<input
						type="text"
						id="academicScores"
						value={academicScores}
						onChange={(e) => setAcademicScores(e.target.value)}
						className="w-full px-4 py-2 border rounded-md focus:outline-none"
						placeholder="Enter academic scores (comma-separated)"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="attendancePercentage"
						className="block font-medium mb-1"
					>
						Attendance Percentage:
					</label>
					<input
						type="text"
						id="attendancePercentage"
						value={attendancePercentage}
						onChange={(e) =>
							setAttendancePercentage(e.target.value)
						}
						className="w-full px-4 py-2 border rounded-md focus:outline-none"
						placeholder="Enter attendance percentage (%)"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="extracurricularActivities"
						className="block font-medium mb-1"
					>
						Extracurricular Activities:
					</label>
					<input
						id="extracurricularActivities"
						value={extracurricularActivities}
						onChange={(e) =>
							setExtracurricularActivities(e.target.value)
						}
						className="w-full px-4 py-2 border rounded-md focus:outline-none"
						rows="4"
						placeholder="Enter extracurricular activity scores [Debate-Club,Music]"
					></input>
				</div>
				<div className="mb-4">
					<label
						htmlFor="basicFitnessScores"
						className="block font-medium mb-1"
					>
						Basic Fitness Scores:
					</label>
					<input
						type="text"
						id="basicFitnessScores"
						value={basicFitnessScores}
						onChange={(e) => setBasicFitnessScores(e.target.value)}
						className="w-full px-4 py-2 border rounded-md focus:outline-none"
						placeholder="Enter basic fitness scores (comma-separated)"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="teamworkSkillScores"
						className="block font-medium mb-1"
					>
						Teamwork Skill Scores:
					</label>
					<input
						type="text"
						id="teamworkSkillScores"
						value={teamworkSkillScores}
						onChange={(e) => setTeamworkSkillScores(e.target.value)}
						className="w-full px-4 py-2 border rounded-md focus:outline-none"
						placeholder="Enter teamwork skill scores (comma-separated)"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="recommendationLetters"
						className="block font-medium mb-1"
					>
						Recommendation Letters:
					</label>
					<input
						type="text"
						id="recommendationLetters"
						value={recommendationLetters}
						onChange={(e) =>
							setRecommendationLetters(e.target.value)
						}
						className="w-full px-4 py-2 border rounded-md focus:outline-none"
						placeholder="Enter number of recommendation letters (out of 10)"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="researchExperience"
						className="block font-medium mb-1"
					>
						Research Experience:
					</label>
					<input
						type="text"
						id="researchExperience"
						value={researchExperience}
						onChange={(e) => setResearchExperience(e.target.value)}
						className="w-full px-4 py-2 border rounded-md focus:outline-none"
						placeholder="Enter research experience (out of 10)"
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default StudentDetailsForm;

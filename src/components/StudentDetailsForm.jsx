/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/your-paragraph-text.png";
import "animate.css";
import { useRecoilState } from "recoil";
import {
	academicScoresAtom,
	attendancePercentageAtom,
	extracurricularActivitiesAtom,
	basicFitnessScoresAtom,
	teamworkSkillScoresAtom,
	recommendationLettersAtom,
	researchExperienceAtom,
} from "../recoil/studentAtoms.js";

const StudentDetailsForm = () => {
	const navigate = useNavigate();
	const [academicScores, setAcademicScores] =
		useRecoilState(academicScoresAtom);
	const [attendancePercentage, setAttendancePercentage] = useRecoilState(
		attendancePercentageAtom
	);
	const [extracurricularActivities, setExtracurricularActivities] =
		useRecoilState(extracurricularActivitiesAtom);
	const [basicFitnessScores, setBasicFitnessScores] = useRecoilState(
		basicFitnessScoresAtom
	);
	const [teamworkSkillScores, setTeamworkSkillScores] = useRecoilState(
		teamworkSkillScoresAtom
	);
	const [recommendationLetters, setRecommendationLetters] = useRecoilState(
		recommendationLettersAtom
	);
	const [researchExperience, setResearchExperience] = useRecoilState(
		researchExperienceAtom
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted!");
		navigate('/result')
	};

	return (
		<div className="flex flex-col md:flex-row justify-evenly">
			<div className="md:ml-20 md:mt-20 mb-10 md:mb-0 animate__animated animate__pulse ">
				<img src={image} alt="Enter Student Details" />
			</div>
			<div className="max-w-2xl md:max-w-xl lg:max-w-lg md:mr-20 md:my-10 dark:bg-gray-800 py-8 px-14 mx-10 rounded-3xl shadow-2xl animate__animated animate__fadeIn ">
				<h2 className="text-3xl font-semibold mb-4 text-white">
					Fill Details
				</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="academicScores"
							className="block text-sm mb-1 text-slate-300 "
						>
							Academic Scores:
						</label>
						<input
							type="text"
							id="academicScores"
							value={academicScores}
							onChange={(e) => setAcademicScores(e.target.value)}
							className="w-full px-4 py-2 border rounded-md focus:outline-none"
							placeholder="99,92,89,78,80,90"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="attendancePercentage"
							className="block text-sm mb-1 text-slate-300"
						>
							Attendance Percentage (%):
						</label>
						<input
							type="text"
							id="attendancePercentage"
							value={attendancePercentage}
							onChange={(e) =>
								setAttendancePercentage(e.target.value)
							}
							className="w-full px-4 py-2 border rounded-md focus:outline-none"
							placeholder="99"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="extracurricularActivities"
							className="block text-sm mb-1 text-slate-300"
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
							placeholder="99,92,89"
						></input>
					</div>
					<div className="mb-4">
						<label
							htmlFor="basicFitnessScores"
							className="block text-sm mb-1 text-slate-300"
						>
							Basic Fitness Scores:
						</label>
						<input
							type="text"
							id="basicFitnessScores"
							value={basicFitnessScores}
							onChange={(e) =>
								setBasicFitnessScores(e.target.value)
							}
							className="w-full px-4 py-2 border rounded-md focus:outline-none"
							placeholder="99,92,89,78"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="teamworkSkillScores"
							className="block text-sm mb-1 text-slate-300"
						>
							Teamwork Skill Scores (Out of 5):
						</label>
						<input
							type="text"
							id="teamworkSkillScores"
							value={teamworkSkillScores}
							onChange={(e) =>
								setTeamworkSkillScores(e.target.value)
							}
							className="w-full px-4 py-2 border rounded-md focus:outline-none"
							placeholder="5"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="recommendationLetters"
							className="block text-sm mb-1 text-slate-300"
						>
							Recommendation Letters (Out of 5):
						</label>
						<input
							type="text"
							id="recommendationLetters"
							value={recommendationLetters}
							onChange={(e) =>
								setRecommendationLetters(e.target.value)
							}
							className="w-full px-4 py-2 border rounded-md focus:outline-none"
							placeholder="4"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="researchExperience"
							className="block text-sm mb-1 text-slate-300"
						>
							Research Experience (Out of 5):
						</label>
						<input
							type="text"
							id="researchExperience"
							value={researchExperience}
							onChange={(e) =>
								setResearchExperience(e.target.value)
							}
							className="w-full px-4 py-2 border rounded-md focus:outline-none"
							placeholder="3"
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default StudentDetailsForm;

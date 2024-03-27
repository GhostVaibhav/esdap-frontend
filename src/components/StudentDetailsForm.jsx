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
		navigate("/result");
	};

	return (
		<div className="flex flex-col md:flex-row ">
			<div className="my-4 animate__animated animate__pulse ">
				<img src={image} alt="Enter Student Details" />
			</div>
			<div className="max-w-3xl lg:max-w-2xl md:max-w-xl md:mx-auto md:my-8 p-3	 px-6 m-6 rounded-2xl shadow-2xl shadow-black animate__animated animate__fadeIn">
				<h2 className="text-3xl font-semibold my-5 mx-2 text-white">
					Fill Details
				</h2>
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col md:flex-row">
						<div className="">
							<div className="my-4 mx-2">
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
									onChange={(e) =>
										setAcademicScores(e.target.value)
									}
									className="w-full px-4 py-2  rounded-3xl focus:outline-none "
									placeholder="99,92,89,78,80,90"
								/>
							</div>
							<div className="my-4 mx-2">
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
									className="w-full px-4 py-2 border rounded-3xl focus:outline-none "
									placeholder="99"
								/>
							</div>
							<div className="my-4 mx-2">
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
										setExtracurricularActivities(
											e.target.value
										)
									}
									className="w-full px-4 py-2 border rounded-3xl focus:outline-none "
									placeholder="99,92,89"
								></input>
							</div>
							<div className="my-4 mx-2">
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
									className="w-full px-4 py-2 border rounded-3xl focus:outline-none "
									placeholder="99,92,89,78"
								/>
							</div>
						</div>
						<div className="">
							<div className="my-4 mx-2">
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
									className="w-full px-4 py-2 border rounded-3xl focus:outline-none  "
									placeholder="5"
								/>
							</div>
							<div className="my-4 mx-2">
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
									className="w-full px-4 py-2 border rounded-3xl focus:outline-none "
									placeholder="4"
								/>
							</div>
							<div className="my-4 mx-2">
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
									className="w-full px-4 py-2 border rounded-3xl focus:outline-none "
									placeholder="3"
								/>
							</div>
						</div>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default StudentDetailsForm;

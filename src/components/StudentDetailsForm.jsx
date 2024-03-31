/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
	finalScoreAtom,
} from "../recoil/studentAtoms.js";

const StudentDetailsForm = () => {
	const BACKEND_URL = "http://localhost:4000";
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

	const [finalScore, setFinalScore] = useRecoilState(finalScoreAtom);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`${BACKEND_URL}/esdap/v1/backend/data`,
				{
					academicScores,
					attendancePercentage,
					extracurricularActivities,
					basicFitnessScores,
					teamworkSkillScores,
					recommendationLetters,
					researchExperience,
				}
			);
			console.log(response.data);
			setFinalScore(response.data.resultScore);
			navigate("/result");
		} catch (error) {
			console.error("Error submitting data:", error);
		}
	};

	return (
		<div className="flex flex-col md:flex-row ">
			<div className="mt-4 mx-6  animate__animated animate__pulse  ">
				<img src={image} alt="Enter Student Details" />
			</div>
			<div className="max-w-3xl lg:max-w-2xl md:max-w-xl md:mx-auto md:mt-6 md:mb-7 p-5 rounded-2xl shadow-2xl shadow-black animate__animated animate__fadeIn">
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
									onChange={(e) => {
										const inputString = e.target.value;
										const numberArray = inputString
											.split(",")
											.map(Number);
										setAcademicScores(numberArray);
									}}
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
									onChange={(e) => {
										const inputString = e.target.value;
										const numberArray = inputString
											.split(",")
											.map(Number);
										setAttendancePercentage(numberArray);
									}}
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
									onChange={(e) => {
										const inputString = e.target.value;
										const numberArray = inputString
											.split(",")
											.map(Number);
										setExtracurricularActivities(
											numberArray
										);
									}}
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
									onChange={(e) => {
										const inputString = e.target.value;
										const numberArray = inputString
											.split(",")
											.map(Number);
										setBasicFitnessScores(numberArray);
									}}
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
									onChange={(e) => {
										const inputString = e.target.value;
										const numberArray = inputString
											.split(",")
											.map(Number);

										setTeamworkSkillScores(numberArray);
									}}
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
									onChange={(e) => {
										const inputString = e.target.value;
										const numberArray = inputString
											.split(",")
											.map(Number);
										setRecommendationLetters(numberArray);
									}}
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
									onChange={(e) => {
										const inputString = e.target.value;
										const numberArray = inputString
											.split(",")
											.map(Number);
										setResearchExperience(numberArray);
									}}
									className="w-full px-4 py-2 border rounded-3xl focus:outline-none "
									placeholder="3"
								/>
							</div>
						</div>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none"
						onClick={handleSubmit}
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default StudentDetailsForm;

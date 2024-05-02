/* eslint-disable no-unused-vars */
import { useRecoilValue } from "recoil";
import { atoms } from "../recoil/studentAtoms.js";

const {
	nameAtom,
	academicScoresAtom,
	attendancePercentageAtom,
	extracurricularActivitiesAtom,
	basicFitnessScoresAtom,
	teamworkSkillScoresAtom,
	recommendationLettersAtom,
	researchExperienceAtom,
	finalScoreAtom,
} = atoms;

const ResultCard = () => {
	// Use useRecoilValue hook to access Recoil states
	const name = useRecoilValue(nameAtom);
	const academicScores = useRecoilValue(academicScoresAtom);
	const attendancePercentage = useRecoilValue(attendancePercentageAtom);
	const extracurricularActivities = useRecoilValue(
		extracurricularActivitiesAtom
	);
	const basicFitnessScores = useRecoilValue(basicFitnessScoresAtom);
	const teamworkSkillScores = useRecoilValue(teamworkSkillScoresAtom);
	const recommendationLetters = useRecoilValue(recommendationLettersAtom);
	const researchExperience = useRecoilValue(researchExperienceAtom);
	const finalScore = useRecoilValue(finalScoreAtom) || "Calculating ....";

	function convertStringToNumber(str) {
		const number = parseFloat(str);
		return number.toFixed(2);
	}

	function generateGrade(marks) {
		const grade =
			marks >= 95
				? "S+"
				: marks >= 90
				? "S"
				: marks >= 85
				? "A+"
				: marks >= 80
				? "A"
				: marks >= 70
				? "B"
				: marks >= 60
				? "C"
				: "D";
		return grade;
	}
	const formatArray = (arr) => arr.join(", ");
	return (
		<>
			<div className="flex flex-col md:flex-row justify-center">
				<div className="max-w-xl lg:max-w-xl md:max-w-lg md:my-20  p-10 px-10 m-10 rounded-2xl shadow-2xl shadow-black animate__animated animate__fadeIn">
					<div className="text-2xl font-bold mb-6 text-white text-center">
						Result Score Dashboard
					</div>

					{/* Name */}
					<div className="flex flex-row justify-between  mb-4">
						<h3 className="text-sm text-slate-300">
							Name -
						</h3>
						<span className="text-sm text-white ml-12 ">
							{name}
						</span>
					</div>

					{/* Academic Scores */}
					<div className="flex flex-row justify-between  mb-4">
						<h3 className="text-sm text-slate-300">
							Academic Scores -
						</h3>
						<span className="text-sm text-white ml-12 ">
							[{formatArray(academicScores)}]
						</span>
					</div>

					{/* Attendance Percentage */}
					<div className="flex flex-row justify-between items-center mb-4">
						<h3 className="text-sm text-slate-300">
							Attendance Percentage -
						</h3>
						<span className="text-sm text-white ml-12">
							[{formatArray(attendancePercentage)}]
						</span>
					</div>

					{/* Extracurricular Activities */}
					<div className="flex flex-row justify-between items-center mb-4">
						<h3 className="text-sm text-slate-300">
							Extracurricular Activities -
						</h3>
						<span className="text-sm text-white ml-12">
							[{formatArray(extracurricularActivities)}]
						</span>
					</div>

					{/* Basic Fitness Scores */}
					<div className="flex flex-row justify-between items-center mb-4">
						<h3 className="text-sm text-slate-300">
							Basic Fitness Scores -
						</h3>
						<span className="text-sm text-white ml-12">
							[{formatArray(basicFitnessScores)}]
						</span>
					</div>

					{/* Teamwork Skill Scores */}
					<div className="flex flex-row justify-between items-center mb-4">
						<h3 className="text-sm text-slate-300">
							Teamwork Skill Scores -
						</h3>
						<span className="text-sm text-white ml-12">
							[{formatArray(teamworkSkillScores)}]
						</span>
					</div>

					{/* Research Experience */}
					<div className="flex flex-row justify-between items-center mb-4">
						<h3 className="text-sm text-slate-300">
							Research Experience -
						</h3>
						<span className="text-sm text-white ml-12">
							[{formatArray(researchExperience)}]
						</span>
					</div>

					{/* Recommendation Letters */}
					<div className="flex flex-row justify-between items-center mb-4">
						<h3 className="text-sm text-slate-300">
							Recommendation Letters -
						</h3>
						<span className="text-sm text-white ml-12">
							[{formatArray(recommendationLetters)}]
						</span>
					</div>
				</div>

				<div className="max-w-full lg:max-w-xl md:max-w-lg md:my-auto p-10 mx-10 my-8 rounded-xl shadow-2xl shadow-black animate__animated animate__fadeIn">
					<div className="text-xl font-bold mb-6 text-white text-center">
						Final Score
					</div>
					<div className="flex flex-row items-center">
						<h3 className="text-sm text-slate-300">Score -</h3>
						<span className="text-sm text-white ml-12">
							{convertStringToNumber(finalScore)}
						</span>
					</div>
					<div className="flex flex-row items-center">
						<h3 className="text-sm text-slate-300">Grade -</h3>
						<span className="text-sm text-white ml-12">
							{generateGrade(finalScore)}
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default ResultCard;

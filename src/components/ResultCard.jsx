/* eslint-disable no-unused-vars */
import { useRecoilValue } from "recoil";
import { atoms } from "../recoil/studentAtoms.js";

const {
	academicScoresAtom,
	attendancePercentageAtom,
	extracurricularActivitiesAtom,
	basicFitnessScoresAtom,
	teamworkSkillScoresAtom,
	recommendationLettersAtom,
	researchExperienceAtom,
} = atoms;

const ResultCard = () => {
	// Use useRecoilValue hook to access Recoil states
	const academicScores = useRecoilValue(academicScoresAtom);
	const attendancePercentage = useRecoilValue(attendancePercentageAtom);
	const extracurricularActivities = useRecoilValue(
		extracurricularActivitiesAtom
	);
	const basicFitnessScores = useRecoilValue(basicFitnessScoresAtom);
	const teamworkSkillScores = useRecoilValue(teamworkSkillScoresAtom);
	const recommendationLetters = useRecoilValue(recommendationLettersAtom);
	const researchExperience = useRecoilValue(researchExperienceAtom);
	return (
		<>
			<div className="flex flex-col md:flex-row justify-center">
				<div className="max-w-xl lg:max-w-xl md:max-w-lg md:my-20  p-10 px-10 m-20 rounded-2xl shadow-2xl shadow-black animate__animated animate__fadeIn">
					<div className="text-xl font-bold mb-6 text-white">
						Result Score Dashboard
					</div>

					{/* Academic Scores */}
					<div className="flex flex-row justify-between items-center mb-4">
						<h3 className="text-sm text-slate-300">
							Academic Scores -
						</h3>
						<span className="text-sm text-white">
							{academicScores}
						</span>
					</div>

					{/* Attendance Percentage */}
					<div className="flex flex-row justify-between items-center mb-4">
						<h3 className="text-sm text-slate-300">
							Attendance Percentage -
						</h3>
						<span className="text-sm text-white">
							{attendancePercentage}
						</span>
					</div>

					{/* Extracurricular Activities */}
					<div className="flex flex-row justify-between items-center mb-4">
						<h3 className="text-sm text-slate-300">
							Extracurricular Activities -
						</h3>
						<span className="text-sm text-white">
							{extracurricularActivities}
						</span>
					</div>

					{/* Basic Fitness Scores */}
					<div className="flex flex-row justify-between items-center mb-4">
						<h3 className="text-sm text-slate-300">
							Basic Fitness Scores -
						</h3>
						<span className="text-sm text-white">
							{basicFitnessScores}
						</span>
					</div>

					{/* Teamwork Skill Scores */}
					<div className="flex flex-row justify-between items-center mb-4">
						<h3 className="text-sm text-slate-300">
							Teamwork Skill Scores -
						</h3>
						<span className="text-sm text-white">
							{teamworkSkillScores}
						</span>
					</div>

					{/* Research Experience */}
					<div className="flex flex-row justify-between items-center mb-4">
						<h3 className="text-sm text-slate-300">
							Research Experience -
						</h3>
						<span className="text-sm text-white">
							{researchExperience}
						</span>
					</div>

					{/* Recommendation Letters */}
					<div className="flex flex-row justify-between items-center mb-4">
						<h3 className="text-sm text-slate-300">
							Recommendation Letters -
						</h3>
						<span className="text-sm text-white">
							{recommendationLetters}
						</span>
					</div>
				</div>

				<div className="max-w-full lg:max-w-xl md:max-w-lg md:my-auto p-10 mx-10 rounded-xl shadow-2xl shadow-black animate__animated animate__fadeIn">
					<div className="text-xl font-bold mb-6 text-white">
						Final Score
					</div>
					<div className="flex flex-row items-center">
						<h3 className="text-sm text-slate-300">Score -</h3>
						<span className="text-sm text-white">{}</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default ResultCard;

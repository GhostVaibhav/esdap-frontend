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
			<div className="flex flex-col md:flex-row justify-evenly">
				<div>
					<div className="max-w-xl lg:max-w-xl md:max-w-lg  md:my-6 dark:bg-gray-800 py-6 px-10 mx-10 rounded-2xl shadow-xl">
						<div className="text-xl font-bold  mb-6 text-slate-300">
							Result Score Dashboard
						</div>

						<div className="flex flex-row justify-between items-center mb-8">
							<h3 className="text-md  text-slate-300">
								Academic Scores -
							</h3>
							<span className="text-md  text-blue-500">
								{academicScores}
							</span>
						</div>

						<div className="flex flex-row justify-between items-center mb-8">
							<h3 className="text-md  text-slate-300">
								Attendance Percentage -
							</h3>
							<span className="text-md  text-blue-500">
								{attendancePercentage}
							</span>
						</div>

						<div className="flex flex-row justify-between items-center mb-8">
							<h3 className="text-md  text-slate-300">
								Extracurricular Activities -
							</h3>
							<span className="text-md  text-blue-500">
								{extracurricularActivities}
							</span>
						</div>

						<div className="flex flex-row justify-between items-center mb-8">
							<h3 className="text-md  text-slate-300">
								Basic Fitness Scores -
							</h3>
							<span className="text-md  text-blue-500">
								{basicFitnessScores}
							</span>
						</div>
						<div className="flex flex-row justify-between items-center mb-8">
							<h3 className="text-md  text-slate-300">
								Teamwork Skill Scores -
							</h3>
							<span className="text-md  text-blue-500">
								{teamworkSkillScores}
							</span>
						</div>
						<div className="flex flex-row justify-between items-center mb-8">
							<h3 className="text-md  text-slate-300">
								Research Experience -
							</h3>
							<span className="text-md  text-blue-500">
								{researchExperience}
							</span>
						</div>
						<div className="flex flex-row justify-between items-center mb-8">
							<h3 className="text-md  text-slate-300">
								Recommendation Letters -
							</h3>
							<span className="text-md  text-blue-500">
								{recommendationLetters}
							</span>
						</div>
					</div>
				</div>
				<div className="max-w-full lg:max-w-xl md:max-w-lg 	my-6 dark:bg-gray-800 py-6 px-10 mx-10 rounded-xl shadow-xl">
					<div className="text-xl font-bold  mb-6 text-slate-300">
						Final Score
					</div>
					<div className="flex flex-row items-center">
						<h3 className="text-md  text-slate-300">Score -</h3>
						<span className="text-md  text-blue-500">{}</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default ResultCard;

import { atom } from "recoil";

export const academicScoresAtom = atom({
	key: "academicScoresState",
	default: [],
});

export const attendancePercentageAtom = atom({
	key: "attendancePercentageState",
	default: [],
});

export const extracurricularActivitiesAtom = atom({
	key: "extracurricularActivitiesState",
	default: [],
});

export const basicFitnessScoresAtom = atom({
	key: "basicFitnessScoresState",
	default: [],
});

export const teamworkSkillScoresAtom = atom({
	key: "teamworkSkillScoresState",
	default: [],
});

export const recommendationLettersAtom = atom({
	key: "recommendationLettersState",
	default: [],
});

export const researchExperienceAtom = atom({
	key: "researchExperienceState",
	default: [],
});
export const finalScoreAtom = atom({
	key: "finalScore",
	default: "",
});
export const nameAtom = atom({
	key: "name",
	default: "",
});

export const atoms = {
	nameAtom,
	academicScoresAtom,
	attendancePercentageAtom,
	extracurricularActivitiesAtom,
	basicFitnessScoresAtom,
	teamworkSkillScoresAtom,
	recommendationLettersAtom,
	researchExperienceAtom,
	finalScoreAtom,
};

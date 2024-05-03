import React, { useEffect, useState } from "react";

function StudentDetailsCard() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch(
				"http://localhost:4000/esdap/v1/backend/showall"
			);
			if (!response.ok) {
				throw new Error("Error in database response");
			}
			const data = await response.json();
			setData(data.result);
			setLoading(false);
		} catch (error) {
			setError(error.message);
			setLoading(false);
		}
	};

	return (
		<div className="text-white">
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<p>Error: {error}</p>
			) : (
				<div className="overflow-x-scroll md:overflow-auto text-sm animate__animated animate__fadeIn">
					<table className="table-auto border-collapse m-12">
						<thead className="border border-slate-500 bg-slate-800 ">
							<tr>
								<th className="px-3 py-6">Name</th>
								<th className="px-3 py-6">Academic Scores</th>
								<th className="px-3 py-6">Attendance(%)</th>
								<th className="px-3 py-6">
									Extra-curricular activities
								</th>
								<th className="px-3 py-6">Basic Fitness Scores</th>
								<th className="px-3 py-6">Teamwork Skill </th>
								<th className="px-3 py-6">Recommendation Letters</th>
								<th className="px-3 py-6">Research Experience</th>
								<th className="px-3 py-6">Overall Result</th>
							</tr>
						</thead>
						<tbody>
							{data.length > 0 ? (
								data.map((student) => (
									<tr key={student._id}>
										<td className="border border-slate-500 p-3">
											{student.fullName}
										</td>
										<td className="border border-slate-500 p-3">
											{student.academicScores.join(", ")}
										</td>
										<td className="border border-slate-500 p-3">
											{student.attendancePercentage}
										</td>
										<td className="border border-slate-500 p-3">
											{student.extracurricularActivities.join(
												", "
											)}
										</td>
										<td className="border border-slate-500 p-3">
											{student.basicFitnessScores.join(
												", "
											)}
										</td>
										<td className="border border-slate-500 p-3">
											{student.teamworkSkillScores}
										</td>
										<td className="border border-slate-500 p-3">
											{student.recommendationLetters}
										</td>
										<td className="border border-slate-500 p-3">
											{student.researchExperience}
										</td>
										<td className="border border-slate-500 p-3">
											{student.result}
										</td>
									</tr>
								))
							) : (
								<tr>
									<td
										colSpan="9"
										className="border border-slate-500 text-center p-4"
									>
										No data found
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}

export default StudentDetailsCard;

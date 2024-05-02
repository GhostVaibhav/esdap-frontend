import React, { useEffect, useState } from 'react'

function StudentDetailsCard() {
    // response = await fetch('')
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/esdap/v1/backend/showall');
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            var data = await response.json();
            data = JSON.stringify(data)
            data = JSON.parse(data)
            data = data.result
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <div className='text-white'>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div className="overflow-x-scroll md:overflow-auto">
                    <table className='table-auto border-collapse m-8'>
                        <thead className='border border-slate-600 bg-slate-500 rounded-lg'>
                            <th className='p-4'>Name</th>
                            <th className='p-4'>Academic Scores</th>
                            <th className='p-4'>Attendance Percentage</th>
                            <th className='p-4'>Extra-curricular activities</th>
                            <th className='p-4'>Basic Fitness Scores</th>
                            <th className='p-4'>Teamwork Skill Scores</th>
                            <th className='p-4'>Recommendation Letters</th>
                            <th className='p-4'>Research Experience</th>
                            <th className='p-4'>Overall Result</th>
                        </thead>
                        {data.length > 0 ? data.map((student) => (
                            <tr key={student._id}>
                                <td className='border border-slate-500 rounded-xl p-4'>{student.fullName}</td>
                                <td className='border border-slate-500 rounded-xl p-4'>{student.academicScores.map((value) => {
                                    return <span>{value} </span>
                                })}</td>
                                <td className='border border-slate-500 rounded-xl p-4'>{student.attendancePercentage}</td>
                                <td className='border border-slate-500 rounded-xl p-4'>{student.extracurricularActivities.map((value) => {
                                    return <span>{value} </span>
                                })}</td>
                                <td className='border border-slate-500 rounded-xl p-4'>{student.basicFitnessScores.map((value) => {
                                    return <span>{value} </span>
                                })}</td>
                                <td className='border border-slate-500 rounded-xl p-4'>{student.teamworkSkillScores}</td>
                                <td className='border border-slate-500 rounded-xl p-4'>{student.recommendationLetters}</td>
                                <td className='border border-slate-500 rounded-xl p-4'>{student.researchExperience}</td>
                                <td className='border border-slate-500 rounded-xl p-4'>{student.result}</td>
                            </tr>
                        )) :
                            <tr>
                                <td colSpan='9' className='border border-slate-500 text-center rounded-xl p-4'>No data found</td>
                            </tr>
                        }
                    </table>
                </div>
            )}
        </div>
    );
}

export default StudentDetailsCard

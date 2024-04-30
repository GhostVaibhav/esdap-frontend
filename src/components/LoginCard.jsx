import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper"

const LoginCard = () => {
	const navigate = useNavigate();
	const { login } = AuthData();
	const [formData, setFormData] = useReducer((formData, newItem) => { return ({ ...formData, ...newItem }) }, { userName: "", password: "" })
	const [errorMessage, setErrorMessage] = useState(null)

	const doLogin = async (e) => {
		e.preventDefault()
		try {
			await login(formData.userName, formData.password)
			navigate("/details")
		} catch (error) {
			setErrorMessage(error)
		}
	}

	return (
		<>
			<div className="max-w-3xl lg:max-w-2xl md:max-w-xl md:mx-auto md:mt-10 md:mb-10 p-4 rounded-2xl shadow-2xl shadow-black animate__animated animate__fadeIn ">
				<h2 className="text-3xl font-semibold my-6 mx-2 text-white">
					Login
				</h2>
				<form onSubmit={doLogin}>
					<div className="flex flex-col md:flex-row">
						<div className="">
							<div className="my-4 mx-2">
								<label
									htmlFor="academicScores"
									className="block text-sm mb-1 text-slate-300 "
								>
									Username:
								</label>
								<input
									type="text"
									id="academicScores"
									onChange={(e) => setFormData({userName: e.target.value})}
									className="w-full px-4 py-2  rounded-3xl focus:outline-none "
									placeholder="Username"
									value={formData.userName}
								/>
							</div>
							<div className="my-4 mx-2">
								<label
									htmlFor="attendancePercentage"
									className="block text-sm mb-1 text-slate-300"
								>
									Password:
								</label>
								<input
									type="password"
									id="password"
									onChange={(e) => setFormData({password: e.target.value})}
									className="w-full px-4 py-2 border rounded-3xl focus:outline-none "
									placeholder="******"
									value={formData.password}
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
					{errorMessage ?
						<div className="mx-2 p-2 text-white text-center bg-red-600 rounded-b-xl">{errorMessage}</div>
						: null}
				</form>
			</div>
		</>
	);
};

export default LoginCard;

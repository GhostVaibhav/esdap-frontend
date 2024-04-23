import { Link } from "react-router-dom";

const Navbar = () => {
	const isActiveLink = (path) => {
		return window.location.hash === "#" + path;
	};
	return (
		<>
			<header
				className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 px-20 "
				style={{ backgroundColor: "rgb(13, 18, 26)" }}
			>
				<nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
					<Link to="/login">
						<span
							className="flex-none text-xl font-semibold dark:text-white"
						>
							ESDAP
						</span>
					</Link>
					<div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5 ">
						{/* <a
							className="font-medium"
							style={{
								color: isActiveLink("/")
									? "rgb(59 130 246)"
									: "rgb(156 163 175)",
							}}
							href="/"
						>
							Analysis
						</a> */}
						<Link to="/login">
							<span
								className={`font-medium `}
								style={{
									color: isActiveLink("/login")
										? "rgb(59 130 246)"
										: "rgb(156 163 175)",
								}}
								href="/login"
							>
								Login
							</span>
						</Link>
						{/* <a
							className={`font-medium `}
							style={{
								color: isActiveLink("/result")
									? "rgb(59 130 246)"
									: "rgb(156 163 175)",
							}}
							href="/result"
						>
							Result
						</a> */}
						<Link to="/about">
							<span
								className={`font-medium `}
								style={{
									color: isActiveLink("/about")
										? "rgb(59 130 246)"
										: "rgb(156 163 175)",
								}}
								href="/about"
							>
								About us
							</span>
						</Link>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;

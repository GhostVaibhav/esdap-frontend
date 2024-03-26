const Navbar = () => {
	const isActiveLink = (path) => {
		return window.location.pathname === path;
	};
	return (
		<>
			<header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
				<nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
					<a
						className="flex-none text-2xl font-semibold dark:text-white"
						href="/home"
					>
						ESDAP
					</a>
					<div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
						<a
							className="font-medium"
							style={{
								color: isActiveLink("/analysis")
									? "rgb(59 130 246)"
									: "rgb(156 163 175)",
							}}
							href="/analysis"
						>
							Analysis
						</a>
						<a
							className={`font-medium `}
							style={{
								color: isActiveLink("/admin")
									? "rgb(59 130 246)"
									: "rgb(156 163 175)",
							}}
							href="/admin"
						>
							Admin
						</a>
						<a
							className={`font-medium `}
							style={{
								color: isActiveLink("/result")
									? "rgb(59 130 246)"
									: "rgb(156 163 175)",
							}}
							href="/result"
						>
							Result
						</a>
						<a
							className={`font-medium `}
							style={{
								color: isActiveLink("/aboutus")
									? "rgb(59 130 246)"
									: "rgb(156 163 175)",
							}}
							href="/aboutus"
						>
							About us
						</a>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;

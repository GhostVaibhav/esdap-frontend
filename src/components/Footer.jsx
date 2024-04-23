import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer
				className="w-full mt-auto text-white py-3"
				style={{ backgroundColor: "rgb(13, 18, 26)" }}
			>
				<div
					className="max-w-7xl mx-auto xs:px-6 lg:px-8"
					style={{ color: "rgb(156 163 175)" }}
				>
					<div className="flex justify-between items-center">
						<p className="text-sm">
							&copy; 2024 ESDAP. All rights reserved.
						</p>
						<div className="flex gap-5">
							<Link to="/">
								<span
									href="/"
									className="text-xs underline hover:text-blue-400"
								>
									Privacy Policy
								</span>
							</Link>
							<Link to="/">
								<span
									href="/"
									className="text-xs underline hover:text-blue-400"
								>
									Terms of Service
								</span>
							</Link>
							<Link to="/">
								<span
									href="/"
									className="text-xs underline hover:text-blue-400"
								>
									Contact Us
								</span>
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;

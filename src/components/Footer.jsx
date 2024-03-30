const Footer = () => {
	return (
		<>
			<footer
				className="mt-auto w-full text-white py-3"
				style={{ backgroundColor: "rgb(13, 18, 26)" }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center">
						<p className="text-sm">
							&copy; 2024 ESDAP. All rights reserved.
						</p>
						<div className="flex gap-5">
							<a href="/" className="text-sm hover:text-gray-400">
								Privacy Policy
							</a>
							<a href="/" className="text-sm hover:text-gray-400">
								Terms of Service
							</a>
							<a href="/" className="text-sm hover:text-gray-400">
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;

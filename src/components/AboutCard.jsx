import FAQCard from "./FAQCard";
import data from "../data/FAQ";

const AboutCard = () => {
	return (
		<>
			<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				<div className="max-w-2xl mx-auto mb-10 lg:mb-14">
					<h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
						FAQ's
					</h2>
				</div>
				{data.map((dataEntry, index) => (
					<FAQCard
						key={index}
						question={dataEntry.question}
						answer={dataEntry.answer}
					/>
				))}
			</div>
		</>
	);
};

export default AboutCard;

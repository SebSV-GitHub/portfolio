import React from "react";

type props = {
	title: string;
	skillLevel: string;
	logo: string;
};

function TechCard({ title, skillLevel, logo }: props) {
	return (
		<div className="backdrop-blur-sm bg-white/25 py-7 px-10 rounded-lg flex h-24 gap-x-5">
			<img src={logo} alt={`${title} logo`} />
			<div>
				<span className="font-bold block">{title}</span>
				<span className="text-xs block">{skillLevel}</span>
			</div>
		</div>
	);
}

export default TechCard;

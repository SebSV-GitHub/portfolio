import React from "react";
import TechCard from "./shared/tech-card";
import ReactLogo from "./logos/react.png";
import NodeLogo from "./logos/node.png";

const tech = [
	{
		title: "React.js",
		skillLevel: "Proficient",
		logo: ReactLogo,
	},
	{
		title: "Node.js",
		skillLevel: "Proficient",
		logo: NodeLogo,
	},
];

function Main() {
	return (
		<div>
			<h3 className="mb-16">Main Stack</h3>
			<div className="flex flex-wrap justify-center gap-5">
				{tech.map((technology) => (
					<TechCard
						id={`main-tech-${technology.title}`}
						title={technology.title}
						skillLevel={technology.skillLevel}
						logo={technology.logo}
					/>
				))}
			</div>
		</div>
	);
}

export default Main;

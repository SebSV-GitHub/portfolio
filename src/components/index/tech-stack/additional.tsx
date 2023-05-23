import React from "react";
import TechCard from "./shared/tech-card";
import ReactLogo from "./logos/react.png";
import NodeLogo from "./logos/node.png";

const tech = [
	{
		title: "HTML",
		skillLevel: "Proficient",
		logo: ReactLogo,
	},
	{
		title: "CSS",
		skillLevel: "Proficient",
		logo: NodeLogo,
	},
	{
		title: "JavaScript",
		skillLevel: "Proficient",
		logo: ReactLogo,
	},
	{
		title: "REST API",
		skillLevel: "Proficient",
		logo: ReactLogo,
	},
	{
		title: "Typescript",
		skillLevel: "Proficient",
		logo: NodeLogo,
	},
	{
		title: "Redux",
		skillLevel: "Proficient",
		logo: ReactLogo,
	},
	{
		title: "Git",
		skillLevel: "Proficient",
		logo: NodeLogo,
	},
	{
		title: "TailwindCSS",
		skillLevel: "Proficient",
		logo: ReactLogo,
	},
	{
		title: "MongoDB",
		skillLevel: "Proficient",
		logo: NodeLogo,
	},
	{
		title: "PostgresSQL",
		skillLevel: "Proficient",
		logo: ReactLogo,
	},
	{
		title: "MySQL",
		skillLevel: "Proficient",
		logo: NodeLogo,
	},
	{
		title: "Webpack",
		skillLevel: "Intermediate",
		logo: ReactLogo,
	},
	{
		title: "Bootstrap",
		skillLevel: "Proficient",
		logo: NodeLogo,
	},
	{
		title: "Chakra",
		skillLevel: "Intermediate",
		logo: ReactLogo,
	},
	{
		title: "GrapQL",
		skillLevel: "Proficient",
		logo: NodeLogo,
	},
	{
		title: "AWS",
		skillLevel: "Proficient",
		logo: ReactLogo,
	},
	{
		title: "Lambda",
		skillLevel: "Proficient",
		logo: NodeLogo,
	},
	{
		title: "Microservices",
		skillLevel: "Proficient",
		logo: ReactLogo,
	},
	{
		title: "Google Cloud Platform / APIs",
		skillLevel: "Intermediate",
		logo: NodeLogo,
	},
	{
		title: "Serverless",
		skillLevel: "Intermediate",
		logo: NodeLogo,
	},
	{
		title: "Swagger/OpenAPI",
		skillLevel: "Proficient",
		logo: ReactLogo,
	},
	{
		title: "Docker",
		skillLevel: "Proficient",
		logo: NodeLogo,
	},
	{
		title: "Unit/Functional Tests",
		skillLevel: "Proficient",
		logo: ReactLogo,
	},
	{
		title: "Sass",
		skillLevel: "Intermediate",
		logo: NodeLogo,
	},
];

function Additional() {
	return (
		<div>
			<h3 className="text-4xl text-center font-bold mb-16">Additional Stack</h3>
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

export default Additional;

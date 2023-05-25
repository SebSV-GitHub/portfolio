import React from "react";
import JobCard from "./shared/card";
import LimberLogo from "./logos/limber.png";
import PayPalLogo from "./logos/paypal.png";
import GorillaLogo from "./logos/gorilla.png";
import IntergrupoLogo from "./logos/inter.png";
import PEFPILogo from "./logos/pefpi.png";
import ActiveOneLogo from "./logos/activeone.png";

function Experience() {
	return (
		<div className="container mx-auto py-48">
			<h2 className="mb-20">Experience</h2>
			<div className="grid grid-cols-3 gap-8">
				{experiences.map((job) => (
					<JobCard id={`job-${job.company}-${job.role}`} job={job} />
				))}
			</div>
		</div>
	);
}

const experiences = [
	{
		logo: LimberLogo,
		company: "Limber Health",
		type: "Full time",
		dates: "Aug 2022 - Present",
		role: "Full Stack Engineer",
		description:
			"Design and deliver practical solutions to maintain application. Formulate and roll-out organizational standards to update healthy code. Mentor developers to improve their coding skills along with better practices. Execute CI/CD process, standard as GitHub-flow and build new backend with new micro services architecture. Configure EC2 machines for Gitlab runners. Resolve bugs and code new feature. Participate in 1:1 meeting to confer okrs. Examine code merge requests. Execute design mockups. Chair meetings with product to align and design solutions. Preside over scrum meetings.",
	},
	{
		logo: PayPalLogo,
		company: "PayPal, Taller, Medellín",
		type: "Full time",
		dates: "December 2021 — July 2022",
		role: "Full Stack Engineer",
		description:
			"Created new solutions for high-traffic applications. Invigorated and rolled-out application modules in compliance with company’s requirements. Determined product necessities and shared discovered knowledge with staff members. Leveraged complex software patterns to enhance existing functionality. Developed spikes to implement internal platforms. Formulated data flow documents. Effectively communicate with sync team and other teams to meet task requirements.",
	},
	{
		logo: GorillaLogo,
		company: "Gorilla Logic LLC, Medellín",
		type: "Full time",
		dates: "December 2020 — December 2021",
		role: "Full Stack Engineer",
		description:
			"Re-organized well-structured old and poorly maintainable code in React and Node code bases. Developed new services in Node.js and integrated them into existing microservices architecture. Formulated maintainable and reusable code to design new solutions and patterns. Evolved models for MongoDB. Deployed functionality through coordination with cross- functional teams. Assessed features with automated and smoke assessments. Cultivated easier development environments with Docker.",
	},
	{
		logo: IntergrupoLogo,
		company: "Intergrupo",
		type: "Full time",
		dates: "August 2020 — December 2020",
		role: "Full Stack Engineer",
		description:
			"Leveraged ES6+ standards to refactor old JavaScript codebase into new, more maintainable Node.js services. Wholly responsible for connecting existing API (REST and SOAP) to new services. Identified and rolled-out SOLID.",
	},
	{
		logo: ActiveOneLogo,
		company: "SunDevs",
		type: "Freelance",
		dates: "May 2021 — November 2022",
		role: "Technical Lead",
		description: "",
	},
	{
		logo: PEFPILogo,
		company: "PEFPI S.A.S.",
		type: "Full time",
		dates: "April 2019 — August 2020",
		role: "Full Stack Engineer",
		description: "",
	},
	{
		logo: ActiveOneLogo,
		company: "ActiveONE S.A.S",
		type: "Full time",
		dates: "October 2017 — April 2019",
		role: "Software Developer",
		description: "",
	},
];

export default Experience;

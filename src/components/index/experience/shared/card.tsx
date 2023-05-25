import React from "react";

type props = {
	job: {
		logo: string;
		company: string;
		type: string;
		dates: string;
		role: string;
		description: string;
	};
};

function Card({
	job: { logo, role, company, type, dates, description },
}: props) {
	return (
		<div className="backdrop-blur-sm bg-white/10 rounded-lg px-8 py-10">
			<img className="mb-4" src={logo} alt={`${company} logo`} />
			<span className="text-2xl font-bold mb-2">{role}</span>
			<div className="mb-2">
				<span className="font-medium">
					{company} · {type}
				</span>{" "}
				<span className="text-xs">({dates})</span>
			</div>
			<p className="text-sm">{description}</p>
		</div>
	);
}

export default Card;

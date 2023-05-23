import React from "react";
import MainTech from "./main";
import AdditionalTech from "./additional";

function TechStack() {
	return (
		<div className="container mx-auto py-48">
			<h2 className="text-5xl text-center font-bold mb-20">Tech Stack</h2>
			<div className="flex flex-col gap-16">
				<MainTech />
				<AdditionalTech />
			</div>
		</div>
	);
}

export default TechStack;

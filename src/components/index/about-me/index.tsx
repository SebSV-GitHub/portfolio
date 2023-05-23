import React from "react";
import AboutMeImage from "./image";
import AboutMeText from "./text";

function AboutMe() {
	return (
		<div className="container mx-auto py-20 px-16 rounded-3xl backdrop-blur-sm bg-white/10 flex gap-x-20">
			<AboutMeImage />
			<AboutMeText />
		</div>
	);
}

export default AboutMe;

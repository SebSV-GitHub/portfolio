import React from "react";
import Logo from "../../../images/icon-lg.png";

function Text() {
	return (
		<div className="my-auto">
			<div className="flex items-center gap-x-3">
				<span className="text-8xl font-black leading-[1.25em]">I'm Seb</span>
				<img src={Logo} alt="logo" />
			</div>
			<div className="text-6xl font-medium leading-[1.5em]">
				A Full Stack Engineer from Colombia 🇨🇴
			</div>
		</div>
	);
}

export default Text;

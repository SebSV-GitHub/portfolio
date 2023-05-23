import React from "react";
import Text from "./text";
import ProfileImage from "./profile-image";

function Landing() {
	return (
		<div className="container mx-auto flex gap-x-32">
			<Text />
			<ProfileImage />
		</div>
	);
}

export default Landing;

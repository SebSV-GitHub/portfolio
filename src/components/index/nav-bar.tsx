import React from "react";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import Icon from "../../images/icon.png";

function NavBar() {
	return (
		<div className="container mx-auto flex items-center py-6">
			<img src={Icon} alt="icon" />
			<div
				className="flex items-center gap-x-1 py-2.5 px-8 border-primary border-2 rounded-3xl text-primary
			font-medium ml-auto"
			>
				<ChatBubbleOvalLeftIcon className="h-4 stroke-medium" />
				<span>Contact me</span>
			</div>
		</div>
	);
}

export default NavBar;

import React from "react";
import { LanguageIcon } from "@heroicons/react/24/solid";

function LanguageBar() {
	return (
		<div className="bg-primary">
			<div className="container mx-auto py-4 text-base text-white flex">
				<div className="ml-auto flex justify-center items-center gap-x-1">
					<LanguageIcon className="h-4" />
					<span>English</span>-<span>🦺 Work In Progress</span>
				</div>
			</div>
		</div>
	);
}

export default LanguageBar;

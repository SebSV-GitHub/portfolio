import React from "react";
import background from "../../images/background-1.svg";

function Jumbotron({ children }: React.PropsWithChildren) {
	return (
		<div
			style={{
				backgroundImage: `url(${background})`,
				backgroundColor: "#1F1D45",
				backgroundSize: "cover",
				minHeight: "100vh",
			}}
			className="pb-48"
		>
			{children}
		</div>
	);
}

export default Jumbotron;

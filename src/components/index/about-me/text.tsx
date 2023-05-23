import React from "react";

function AboutMeText() {
	return (
		<div className="flex flex-col gap-5">
			<h2 className="text-primary text-2xl font-bold">About me</h2>
			<span className="font-medium text-5xl">
				Sebasti&aacute;n Su&aacute;rez Valencia
			</span>
			<p className="leading-6">
				Technically minded professional with progressive experience in the
				advanced web development. Expert in developing and implementing front
				and back-end software applications. Proficient in creating data
				structures and design patterns, writing low-level and high-level code,
				and formulating technical documents. Skilled in leading various
				technical projects from planning to successful completion. Capability to
				oversee automated testing and provide feedback to management during
				development process. Possess excellent advanced programming,
				troubleshooting, application development, time management, customer
				service, and communications skills. Thrive in challenging, fast-paced,
				and high-pressure environments by utilizing outstanding leadership,
				managerial, and organizational abilities.
			</p>
			<div className="mt-5">
				<span className="bg-primary rounded-3xl py-4 px-16 font-medium">
					<a href="google.com">Read my Resume</a>
				</span>
			</div>
		</div>
	);
}

export default AboutMeText;

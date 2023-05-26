import React from "react";
import Logo from "../../../images/icon-lg.png";

const style: React.CSSProperties = {
	backgroundColor: "#313755",
};

const sections = [
	{
		title: "Contact me",
		list: [
			<a href="https://www.linkedin.com/in/sebastian-suarez-valencia/">
				LinkedIn
			</a>,
			<a href="mailto:portfolio.contact@sebsv.com">Email</a>,
			<a href="https://github.com/SebSV-GitHub">GitHub</a>,
		],
	},
	{
		title: "Blog",
		list: [<span>Coming soon...</span>],
	},
	{
		title: "Made with ❤️ and",
		list: [
			<a href="https://www.gatsbyjs.com/">Gatsby 🚚</a>,
			<a href="https://tailwindcss.com/">TailwindCSS 👨🏻‍🎨</a>,
		],
	},
];

function Footer() {
	return (
		<footer style={style} className="py-28">
			<div className="container mx-auto flex gap-x-28">
				<div className="w-1/4">
					<img className="w-16 h-16 mb-7" src={Logo} alt="logo" />
					<p className="text-muted">
						Thank you for taking the time to visit my portfolio. I hope you
						found it informative and enjoyable. If you have any questions or
						would like to discuss potential opportunities, please don't hesitate
						to contact me. I look forward to hearing from you soon!
					</p>
				</div>
				{sections.map(({ title, list }) => (
					<div className="w-1/4">
						<span className="text-lg text-white">{title}</span>
						<ul className="text-muted mt-4">
							{list.map((item) => (
								<li className="mt-8">{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</footer>
	);
}

export default Footer;

import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Jumbotron from "../components/jumbotron";
import Section1 from "../components/sections/section-1";
import LanguageBar from "../components/index/language-bar";
import NavBar from "../components/index/nav-bar";
import Landing from "../components/index/landing";
import AboutMe from "../components/index/about-me";
import TechStack from "../components/index/tech-stack";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main className="text-white">
			<Jumbotron>
				<LanguageBar />
				<NavBar />
				<Landing />
				<AboutMe />
			</Jumbotron>
			<Section1>
				<TechStack />
			</Section1>
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

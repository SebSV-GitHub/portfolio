import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Jumbotron from "../components/jumbotron";
import Section, { Variants } from "../components/sections/section";
import LanguageBar from "../components/index/language-bar";
import NavBar from "../components/index/nav-bar";
import Landing from "../components/index/landing";
import AboutMe from "../components/index/about-me";
import TechStack from "../components/index/tech-stack";
import Experience from "../components/index/experience";
import Footer from "../components/index/footer";
import Copyright from "../components/index/copyright";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<main className="text-white">
				<Jumbotron>
					<LanguageBar />
					<NavBar />
					<Landing />
					<AboutMe />
				</Jumbotron>
				<Section variant={Variants.PATTERN}>
					<TechStack />
				</Section>
				<Section variant={Variants.BUBBLES}>
					<Experience />
				</Section>
			</main>
			<Footer />
			<Copyright />
		</>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

import React from "react";
import TechCard from "./shared/tech-card";
import HTMLLogo from "./logos/html.png";
import CSSLogo from "./logos/css.png";
import JavaScriptLogo from "./logos/js.png";
import Typescriptogo from "./logos/ts.png";
import ReduxLogo from "./logos/redux.png";
import GitLogo from "./logos/git.png";
import SassLogo from "./logos/sass.png";
import MongoLogo from "./logos/mongo.png";
import PostgresSQLLogo from "./logos/postgres.png";
import MySQLLogo from "./logos/mysql.png";
import HerokuLogo from "./logos/heroku.png";
import WebpackLogo from "./logos/webpack.png";
import BootstrapLogo from "./logos/bootstrap.png";
import ChakraLogo from "./logos/chakra.png";
import GraphQL from "./logos/graphql.png";
import AWSLogo from "./logos/aws.png";
import GCPLogo from "./logos/gcp.png";
import ServerlessLogo from "./logos/serverless.png";
import OpenAPILogo from "./logos/open-api.png";
import DockerLogo from "./logos/docker.png";
import TestingLogo from "./logos/testing.png";
import RustLogo from "./logos/rust.svg";
import TailwindCSSLogo from "./logos/tailwind.svg";
import MicroservicesLogo from "./logos/microservices.webp";

const tech = [
	{
		title: "HTML",
		skillLevel: "Proficient",
		logo: HTMLLogo,
	},
	{
		title: "CSS",
		skillLevel: "Proficient",
		logo: CSSLogo,
	},
	{
		title: "JavaScript",
		skillLevel: "Proficient",
		logo: JavaScriptLogo,
	},
	{
		title: "Typescript",
		skillLevel: "Proficient",
		logo: Typescriptogo,
	},
	{
		title: "Rust",
		skillLevel: "Begginer",
		logo: RustLogo,
	},
	{
		title: "Redux",
		skillLevel: "Proficient",
		logo: ReduxLogo,
	},
	{
		title: "Git",
		skillLevel: "Proficient",
		logo: GitLogo,
	},
	{
		title: "TailwindCSS",
		skillLevel: "Proficient",
		logo: TailwindCSSLogo,
	},
	{
		title: "Sass",
		skillLevel: "Intermediate",
		logo: SassLogo,
	},
	{
		title: "MongoDB",
		skillLevel: "Proficient",
		logo: MongoLogo,
	},
	{
		title: "PostgresSQL",
		skillLevel: "Proficient",
		logo: PostgresSQLLogo,
	},
	{
		title: "MySQL",
		skillLevel: "Proficient",
		logo: MySQLLogo,
	},
	{
		title: "Webpack",
		skillLevel: "Intermediate",
		logo: WebpackLogo,
	},
	{
		title: "Bootstrap",
		skillLevel: "Proficient",
		logo: BootstrapLogo,
	},
	{
		title: "Chakra",
		skillLevel: "Intermediate",
		logo: ChakraLogo,
	},
	{
		title: "GrapQL",
		skillLevel: "Proficient",
		logo: GraphQL,
	},
	{
		title: "Heroku",
		skillLevel: "Intermediate",
		logo: HerokuLogo,
	},
	{
		title: "AWS",
		skillLevel: "Proficient",
		logo: AWSLogo,
	},
	{
		title: "Microservices",
		skillLevel: "Proficient",
		logo: MicroservicesLogo,
	},
	{
		title: "Google Cloud Platform / APIs",
		skillLevel: "Intermediate",
		logo: GCPLogo,
	},
	{
		title: "Serverless",
		skillLevel: "Intermediate",
		logo: ServerlessLogo,
	},
	{
		title: "Swagger/OpenAPI",
		skillLevel: "Proficient",
		logo: OpenAPILogo,
	},
	{
		title: "Docker",
		skillLevel: "Proficient",
		logo: DockerLogo,
	},
	{
		title: "Unit/Functional Tests",
		skillLevel: "Proficient",
		logo: TestingLogo,
	},
];

function Additional() {
	return (
		<div>
			<h3 className="mb-16">Additional Stack</h3>
			<div className="flex flex-wrap justify-center gap-5">
				{tech.map((technology) => (
					<TechCard
						id={`main-tech-${technology.title}`}
						title={technology.title}
						skillLevel={technology.skillLevel}
						logo={technology.logo}
					/>
				))}
			</div>
		</div>
	);
}

export default Additional;

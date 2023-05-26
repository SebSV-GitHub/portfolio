import * as React from "react";
import { Link, HeadFC } from "gatsby";
import Section, { Variants } from "../components/sections/section";
import NotFoundImage from "../images/404.svg";

function NotFoundPage() {
	return (
		<main>
			<Section variant={Variants.BUBBLES}>
				<div className="flex flex-col h-screen justify-center items-center">
					<h1 className="text-6xl text-white text-center font-bold">
						Page not found
					</h1>
					<figure className="mb-12">
						<img className="w-96" src={NotFoundImage} alt="Not found image" />
						<figcaption className="text-muted text-center">
							<a href="https://storyset.com/web">
								Web illustrations by Storyset
							</a>
						</figcaption>
					</figure>
					<p className="text-white text-xl text-center">
						Sorry 😔, we couldn’t find what you were looking for.
					</p>
					<Link
						className="bg-primary rounded-3xl py-4 px-16 mt-16 font-medium text-white"
						to="/"
					>
						Go home
					</Link>
				</div>
			</Section>
		</main>
	);
}

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

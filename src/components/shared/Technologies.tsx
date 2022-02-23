import React, { ReactNode } from 'react';

type Mode = 'grouped' | 'material';
interface TechnologiesProps {
	mode?: Mode;
	FrontLogo?: ReactNode;
	BackLogo?: ReactNode;
	DevOpsLogo?: ReactNode;
}

export default function Technologies({
	mode,
	FrontLogo,
	BackLogo,
	DevOpsLogo,
}: TechnologiesProps) {
	if (mode === 'grouped') {
		return (
			<div className="technologies">
				<h2>Les technos avec lesquelles j'ai travaillé </h2>

				<div className="technologies-list">
					<div className="technologie-section">
						<div className="technologie-background"></div>
						<h3>Front-End</h3>
						{FrontLogo || <></>}
						<ul>
							<li> React</li>
							<li> Typescript</li>
							<li> Angular</li>
							<li> RxJs</li>
							<li> Gatsby</li>
							<li> NextJs</li>
							<li> Redux</li>
							<li> MobX</li>
						</ul>
					</div>
					<div className="technologie-section">
						<div className="technologie-background"></div>
						<h3>Back-end</h3>
						{BackLogo || <></>}
						<ul>
							<li> NodeJs</li>
							<li> MongoDB</li>
							<li> Neo4j</li>
							<li> Express</li>
							<li> NestJs</li>
							<li> Python</li>
						</ul>
					</div>
					<div className="technologie-section">
						<div className="technologie-background"></div>
						<h3>Devops</h3>
						{DevOpsLogo || <></>}
						<ul>
							<li> AWS</li>
							<li> GCP</li>
							<li> Netlify</li>
							<li> Heroku</li>
							<li> Docker</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className="technologies">
			<h2>Les technos avec lesquelles j'ai travaillé : </h2>

			<ul className="technologies-list">
				<li> React</li>
				<li> Typescript</li>
				<li> Angular</li>
				<li> RxJs</li>
				<li> Gatsby</li>
				<li> NextJs</li>
				<li> Redux</li>
				<li> MobX</li>
				<li> NodeJs</li>
				<li> MongoDB</li>
				<li> Neo4j</li>
				<li> Express</li>
				<li> NestJs</li>
				<li> Python</li>
				<li> AWS</li>
				<li> GCP</li>
				<li> Netlify</li>
				<li> Docker</li>
			</ul>
		</div>
	);
}

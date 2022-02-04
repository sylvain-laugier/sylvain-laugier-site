import React from 'react';
import { designEras, DesignEras } from '../../utils/constants';

interface TechnologiesProps {
	designEra?: DesignEras;
}

export default function Technologies({ designEra }: TechnologiesProps) {
	if (designEra === designEras.brutalism) {
		return (
			<div className="technologies">
				<h2>Les technos avec lesquelles j'ai travaillé </h2>

				<div className="technologies-list">
					<div className="technologie-section">
						<div className="technologie-background"></div>
						<h3>Front-End</h3>
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

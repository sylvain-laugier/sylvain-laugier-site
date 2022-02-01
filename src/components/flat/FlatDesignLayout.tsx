import './flat-design-layout.scss';
import React from 'react';
import { designEras } from '../../utils/constants';
import SocialMediaLinks from '../shared/SocialMediaLinks';
import TitleIntro from '../shared/TitleIntro';
import WhatIWasDoing from '../shared/WhatIWasDoing';
import HistoryOfWebDesign from '../shared/HistoryOfWebDesign';
import MountainImage from '../../images/mountain.svg';
import FlatLogoFrontEnd from '../../images/flat-logo-front-end.png';
import FlatLogoBackEnd from '../../images/flat-logo-back-end.png';
import FlatLogoDevops from '../../images/flat-logo-devops.png';

export function FlatDesignLayout() {
	return (
		<>
			<div className="background-image-flat"></div>
			<TitleIntro />
			<div className="background background-primary">
				<div className="content-container">
					<div className="what-i-was-doing-container">
						<div>
							<div className="top-line"></div>
							<WhatIWasDoing designEra={designEras.flatDesign} />
						</div>
						<div>
							<img
								src={MountainImage}
								alt="dessin de montagne, parce que ya des montagnes à Grenoble"
								title="dessin de montagne, parce que ya des montagnes à Grenoble"
							></img>
						</div>
					</div>
				</div>
			</div>
			<div className="background background-accent">
				<div className="content-container">
					<div className="technologies">
						<h2>Les technos avec lesquelles j'ai travaillé </h2>

						<div className="technologies-list">
							<div className="technologie-section">
								<h3>Front-End</h3>
								<img src={FlatLogoFrontEnd}></img>
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
								<h3>Back-end</h3>
								<img src={FlatLogoBackEnd}></img>
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
								<h3>Devops</h3>
								<img src={FlatLogoDevops}></img>
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
					<SocialMediaLinks designEra={designEras.flatDesign} />
				</div>
			</div>
			<HistoryOfWebDesign designEra={designEras.flatDesign} />
		</>
	);
}

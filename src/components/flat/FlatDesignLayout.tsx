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
import Technologies from '../shared/Technologies';

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
					<Technologies
						mode="grouped"
						frontLogo={FlatLogoFrontEnd}
						backLogo={FlatLogoBackEnd}
						devOpsLogo={FlatLogoDevops}
					/>
					<SocialMediaLinks />
				</div>
			</div>
			<HistoryOfWebDesign designEra={designEras.flatDesign} />
		</>
	);
}

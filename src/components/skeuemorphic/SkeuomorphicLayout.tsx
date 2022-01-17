import './skeuomorphic-layout.scss';
import React from 'react';
import { designEras } from '../../utils/constants';
import SocialMediaLinks from '../shared/SocialMediaLinks';
import Technologies from '../shared/Technologies';
import TitleIntro from '../shared/TitleIntro';
import WhatIWasDoing from '../shared/WhatIWasDoing';

export function SkeuomorphicLayout() {
	return (
		<div>
			<TitleIntro />
			<WhatIWasDoing designEra={designEras.skeuomorphic} />
			<div className="separator"></div>
			<Technologies />
			<SocialMediaLinks designEra={designEras.skeuomorphic} />
		</div>
	);
}

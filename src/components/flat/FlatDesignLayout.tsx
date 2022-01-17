import './flat-design-layout.scss';
import React from 'react';
import { designEras } from '../../utils/constants';
import SocialMediaLinks from '../shared/SocialMediaLinks';
import Technologies from '../shared/Technologies';
import TitleIntro from '../shared/TitleIntro';
import WhatIWasDoing from '../shared/WhatIWasDoing';

export function FlatDesignLayout() {
	return (
		<div>
			<TitleIntro />
			<WhatIWasDoing designEra={designEras.flatDesign} />
			<div className="separator"></div>

			<Technologies />
			<SocialMediaLinks designEra={designEras.skeuomorphic} />
		</div>
	);
}

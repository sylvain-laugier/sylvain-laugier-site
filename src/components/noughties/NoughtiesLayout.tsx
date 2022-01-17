import './noughties-layout.scss';
import React from 'react';
import { designEras } from '../../utils/constants';
import SocialMediaLinks from '../shared/SocialMediaLinks';
import Technologies from '../shared/Technologies';
import TitleIntro from '../shared/TitleIntro';
import WhatIWasDoing from '../shared/WhatIWasDoing';
import HistoryOfWebDesign from '../shared/HistoryOfWebDesign';

export function NoughtiesLayout() {
	return (
		<>
			<TitleIntro />
			<WhatIWasDoing designEra={designEras.noughties} />
			<div className="separator"></div>
			<Technologies />

			<SocialMediaLinks designEra={designEras.noughties} />
			<HistoryOfWebDesign designEra={designEras.noughties} />
		</>
	);
}

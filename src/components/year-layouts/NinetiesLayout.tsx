import './nineties-layout.scss';
import React from 'react';
import { designEras } from '../../utils/constants';
import { NthVisitor } from '../nineties';
import SocialMediaLinks from '../shared/SocialMediaLinks';
import Technologies from '../shared/Technologies';
import TitleIntro from '../shared/TitleIntro';
import WhatIWasDoing from '../shared/WhatIWasDoing';
import HistoryOfWebDesign from '../shared/HistoryOfWebDesign';

export function NinetiesLayout() {
	return (
		<>
			<NthVisitor />
			<TitleIntro />
			<WhatIWasDoing designEra={designEras.nineties} />
			<div className="separator"></div>
			<Technologies />

			<SocialMediaLinks designEra={designEras.nineties} />
			<HistoryOfWebDesign designEra={designEras.nineties} />
		</>
	);
}

import React from 'react';
import './brutalism-layout.scss';
import { designEras } from '../../utils/constants';
import HistoryOfWebDesign from '../shared/HistoryOfWebDesign';
import SocialMediaLinks from '../shared/SocialMediaLinks';
import Technologies from '../shared/Technologies';
import WhatIWasDoing from '../shared/WhatIWasDoing';

function BrutalismLayout() {
	return (
		<>
			<div className="title-intro-container">
				<h1 className="initial-aniamtion">
					<span>Sylvain Laugier </span>
				</h1>
				<h1 className="title-animation">
					<span>Sylvain Laugier</span>
				</h1>
				<h2>
					<span>Creative web developer</span>
				</h2>
			</div>
			<div className="title-placeholder"></div>
			<div className="separator"></div>
			<WhatIWasDoing designEra={designEras.brutalism} />
			<div className="separator"></div>

			<Technologies designEra={designEras.brutalism} />
			<div className="separator" style={{ marginBottom: 0 }}></div>
			<SocialMediaLinks designEra={designEras.brutalism} />
			<div className="separator" style={{ marginTop: 0 }}></div>
			<HistoryOfWebDesign designEra={designEras.brutalism} />
		</>
	);
}

export default BrutalismLayout;

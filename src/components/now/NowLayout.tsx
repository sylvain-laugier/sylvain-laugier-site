import React from 'react';
import './now-layout.scss';
import { DesignEras, designEras } from '../../utils/constants';
import SocialMediaLinks from '../shared/SocialMediaLinks';
import Technologies from '../shared/Technologies';
import TitleIntro from '../shared/TitleIntro';
import YearList from '../shared/YearList';
import WhatIWasDoing from '../shared/WhatIWasDoing';

interface NowLayoutProps {
	setDesignEra: React.Dispatch<React.SetStateAction<DesignEras>>;
}
export function NowLayout({ setDesignEra }: NowLayoutProps) {
	return (
		<>
			<div className="left-content">
				<TitleIntro />
				<div className="tagline">
					<WhatIWasDoing designEra={designEras.now} />
				</div>
				<Technologies mode="grouped" />
				<YearList
					currentDesignEra={designEras.now}
					setDesignEra={setDesignEra}
				/>
			</div>
			<div className="right-content">
				<div className="right-content-container">
					<h2>A propos de moi</h2>
					<div className="description">
						Professionnel du web depuis 5 ans, j’ai été chef de projet web
						pendant 2 ans et développeur pendant 3 ans dont la moitié au Canada.
						Polyvalent et autodidacte, j'aime mener à terme des projets web
						modernes et créatifs.
					</div>
					<SocialMediaLinks />
				</div>
			</div>
		</>
	);
}

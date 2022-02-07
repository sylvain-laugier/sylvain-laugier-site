import React from 'react';
import './now-layout.scss';
import { DesignEras, designEras } from '../../utils/constants';
import SocialMediaLinks from '../shared/SocialMediaLinks';
import Technologies from '../shared/Technologies';
import TitleIntro from '../shared/TitleIntro';
import YearList from '../shared/YearList';

interface NowLayoutProps {
	setDesignEra: React.Dispatch<React.SetStateAction<DesignEras>>;
}
export function NowLayout({ setDesignEra }: NowLayoutProps) {
	return (
		<>
			<div className="left-content">
				<TitleIntro />
				<div className="tagline">
					<p>
						Développeur full stack JS à la recherche de sa prochaine expérience
						professionnelle à Paris.
					</p>
				</div>
				<Technologies mode="grouped" />
				<YearList
					currentDesignEra={designEras.now}
					setDesignEra={setDesignEra}
				/>
			</div>
			<div className="right-content">
				<div className="right-content-container">
					<h2>En savoir plus</h2>
					<div className="description">
						Développeur auto-didacte, je code depuis 6 ans dont la moitié en
						entreprise en tant que développeur full stack javascript. J'aime
						développer des interfaces créatives et des systèmes modernes et j'ai
						une forte appétence pour le design web.
					</div>
					<SocialMediaLinks />
				</div>
			</div>
		</>
	);
}

import React from 'react';
import { designEras, DesignEras } from '../../utils/constants';
import Button from './Button';
import LinkedInNinetiesButton from '../../images/button_nineties_linkedin.png';
import GitHubNinetiesButton from '../../images/button_nineties_github.png';
import CodinGameNinetiesButton from '../../images/button_nineties_codingame.png';

interface SocialMediaLinksProps {
	designEra: DesignEras;
}

const links = {
	linkedIn: 'https://linkedin.com',
	github: 'https://github.com',
	codinGame: 'https://www.codingame.com/',
} as const;

export default function SocialMediaLinks({ designEra }: SocialMediaLinksProps) {
	if (designEra === designEras.nineties) {
		return (
			<div className="social-media-container">
				<h2>Retrouvez moi sur :</h2>
				<div className="social-media-links">
					<a href={links.linkedIn} target="_blank">
						<img src={LinkedInNinetiesButton} alt="LinkedIn" title="LinkedIn" />
					</a>
					<a href={links.github} target="_blank">
						<img src={GitHubNinetiesButton} alt="GitHub" title="GitHub" />
					</a>
					<a href={links.codinGame} target="_blank">
						<img
							src={CodinGameNinetiesButton}
							alt="CodinGame"
							title="CodinGame"
						/>
					</a>
				</div>
			</div>
		);
	}
	return (
		<div className="social-media-container">
			<h2>Retrouvez moi sur :</h2>
			<div className="social-media-links">
				<Button label="Linkedin" href={links.linkedIn} />
				<Button label="Github" href={links.github} />
				<Button label="CodinGame" href={links.github} />
			</div>
		</div>
	);
}

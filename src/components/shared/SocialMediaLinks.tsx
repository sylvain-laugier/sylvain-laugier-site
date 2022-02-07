import React from 'react';
import Button from './Button';
import LinkedInNinetiesButton from '../../images/button_nineties_linkedin.png';
import GitHubNinetiesButton from '../../images/button_nineties_github.png';
import CodinGameNinetiesButton from '../../images/button_nineties_codingame.png';

type Mode = 'nineties';
interface SocialMediaLinksProps {
	mode?: Mode;
}

export const socialMedialinks = {
	linkedIn: 'https://linkedin.com',
	github: 'https://github.com',
	codinGame: 'https://www.codingame.com/',
} as const;

export default function SocialMediaLinks({ mode }: SocialMediaLinksProps) {
	if (mode === 'nineties') {
		return (
			<div className="social-media-container">
				<h2>Retrouvez moi sur :</h2>
				<div className="social-media-links">
					<a href={socialMedialinks.linkedIn} target="_blank">
						<img src={LinkedInNinetiesButton} alt="LinkedIn" title="LinkedIn" />
					</a>
					<a href={socialMedialinks.github} target="_blank">
						<img src={GitHubNinetiesButton} alt="GitHub" title="GitHub" />
					</a>
					<a href={socialMedialinks.codinGame} target="_blank">
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
			<h2>Retrouvez moi sur </h2>
			<div className="social-media-links">
				<Button
					className="linkedin"
					label="Linkedin"
					href={socialMedialinks.linkedIn}
				/>
				<Button
					className="github"
					label="Github"
					href={socialMedialinks.github}
				/>
				<Button
					className="codingame"
					label="CodinGame"
					href={socialMedialinks.github}
				/>
			</div>
		</div>
	);
}

import React from 'react';
import Button from './Button';
import LinkedInNinetiesButton from '../../images/button_nineties_linkedin.png';
import GitHubNinetiesButton from '../../images/button_nineties_github.png';
import CodinGameNinetiesButton from '../../images/button_nineties_codingame.png';

type Mode = 'nineties' | 'flat-design';
interface SocialMediaLinksProps {
	mode?: Mode;
}

export const socialMedialinks = {
	linkedIn: 'https://www.linkedin.com/in/sylvainlaugier/',
	github: 'https://github.com/sylvain-laugier',
	codinGame:
		'https://www.codingame.com/profile/1fc92142b63f645e0ae6b423b8c1e7820619412',
} as const;

export default function SocialMediaLinks({ mode }: SocialMediaLinksProps) {
	if (mode === 'flat-design') {
		return (
			<div className="social-media-container">
				<h2>Retrouvez moi sur </h2>
				<div className="social-media-links">
					<div className={`button linkedin`}>
						<div className="button-background"></div>
						<a href={socialMedialinks.linkedIn} target="_blank">
							Linkedin
						</a>
					</div>
					<div className={`button github`}>
						<div className="button-background"></div>
						<a href={socialMedialinks.github} target="_blank">
							Github
						</a>
					</div>
					<div className={`button codingame`}>
						<div className="button-background"></div>
						<a href={socialMedialinks.codinGame} target="_blank">
							CodinGame
						</a>
					</div>
				</div>
			</div>
		);
	}
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
					href={socialMedialinks.codinGame}
				/>
			</div>
		</div>
	);
}

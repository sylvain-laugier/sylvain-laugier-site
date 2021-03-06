import './material-layout.scss';
import React from 'react';
import { designEras } from '../../utils/constants';
import { socialMedialinks } from '../shared/SocialMediaLinks';
import WhatIWasDoing from '../shared/WhatIWasDoing';
import HistoryOfWebDesign from '../shared/HistoryOfWebDesign';
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	Container,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@material-ui/core';

import StorefrontIcon from '@material-ui/icons/Storefront';
import BusinessIcon from '@material-ui/icons/Business';
import DnsIcon from '@material-ui/icons/Dns';
import GithubLogo from '../../images/github-logo.png';
import LinkedInLogo from '../../images/linkedin-logo.png';
import CodinGameLogo from '../../images/codingame-logo.svg';

export function MaterialLayout() {
	return (
		<Grid container style={{ paddingTop: '4rem' }}>
			<Grid item xs={12} md={8}>
				<div className="first-grid-content">
					<Container className="title-intro-container">
						<Typography variant="h1">Sylvain Laugier</Typography>
						<Typography variant="h2">Creative web developer</Typography>
					</Container>
					<Container>
						<WhatIWasDoing designEra={designEras.material}>
							<Typography variant="h2">Ce que je faisais en 2015</Typography>
						</WhatIWasDoing>
					</Container>
					<Container>
						<Typography variant="h2">
							Les technos avec lesquelles j'ai travaillé
						</Typography>
						<Grid container className="technologies-container" spacing={3}>
							<Grid item sm={4} xs={12}>
								<TechnologieCard
									icon={<StorefrontIcon />}
									title="Front-end"
									items={[
										'React',
										'Typescript',
										'Angular',
										'RxJs',
										'Gatsby',
										'NextJs',
										'Redux',
										'MobX',
									]}
								></TechnologieCard>
							</Grid>
							<Grid item sm={4} xs={12}>
								<TechnologieCard
									icon={<BusinessIcon />}
									title="Back-end"
									items={[
										'NodeJs',
										'MongoDB',
										'Neo4j',
										'Express',
										'Gatsby',
										'NestJs',
										'Python',
									]}
								></TechnologieCard>
							</Grid>
							<Grid item sm={4} xs={12}>
								<TechnologieCard
									icon={<DnsIcon />}
									title="DevOps"
									items={['AWS', 'GCP', 'Netlify', 'Heroku', 'Docker']}
								></TechnologieCard>
							</Grid>
						</Grid>
					</Container>
					<Container>
						<div className="social-media-container">
							<Typography variant="h3">Retrouvez moi sur :</Typography>
							<div className="social-media-links">
								<Button variant="contained" href={socialMedialinks.linkedIn}>
									<>
										<img
											className="logo-social-media-link"
											style={{ background: 'white' }}
											src={LinkedInLogo}
										></img>
										Linkedin
									</>
								</Button>
								<Button variant="contained" href={socialMedialinks.github}>
									<>
										<img
											className="logo-social-media-link"
											src={GithubLogo}
										></img>
										Github
									</>
								</Button>
								<Button variant="contained" href={socialMedialinks.github}>
									<>
										<img
											className="logo-social-media-link"
											src={CodinGameLogo}
										></img>
										CodinGame
									</>
								</Button>
							</div>
						</div>
					</Container>
				</div>
			</Grid>
			<Grid item xs={12} md={4}>
				<div className="second-grid-content">
					<HistoryOfWebDesign designEra={designEras.material} />
				</div>
			</Grid>
		</Grid>
	);
}

interface TechnologieCardProps {
	title: string;
	icon: React.ReactNode;
	items: string[];
}
function TechnologieCard({ title, icon, items }: TechnologieCardProps) {
	return (
		<Card className="technologie-card" elevation={3}>
			<CardHeader
				avatar={icon}
				title={<Typography variant="h6">{title}</Typography>}
			/>
			<Divider />
			<CardContent>
				<List>
					{items.map(item => (
						<ListItem>
							<ListItemText primary={item} />
						</ListItem>
					))}
				</List>
			</CardContent>
		</Card>
	);
}

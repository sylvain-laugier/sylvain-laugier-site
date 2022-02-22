import { Link } from '@material-ui/core';
import React, { PropsWithChildren } from 'react';
import {
	DesignEraMap,
	designEras,
	DesignEras,
	designEraToYearMap,
} from '../../utils/constants';

interface WhatIWasDoingProps {
	designEra: DesignEras;
}

const content: DesignEraMap = {
	[designEras.nineties]: (
		<>
			En 1999, j'ai 9 ans et mon usage de l'informatique se résume à des
			expérimentations sur l'ordinateur familial. Je suis déjá néanmois fasciné
			par l'outil bien que je ne dispose que de word et du Démineur. Quant à
			internet il ne s'agit a l'époque que d'une chose lointaine abritant
			paraît-il la soluce pour obtenir Mew dans Pokemon.
		</>
	),
	[designEras.noughties]: (
		<>
			C'est en 2005, à 15 ans, que j'ai mon premier rapport au développement
			informatique, par curiosité je suis le cours de C++ sur le site du zéro,
			mais tout cela est encore trop abstrait pour moi et je finis par passer
			mes journées sur le logiciel RPG maker, outil permettant de créer des jeux
			vidéos 16 bit en no-code. Bien que sans syntaxe, l'outil met à disposition
			les outils d'un vrai langage (boucles, variables, instructions
			conditionnelles), ce qui me familiarise avec les concepts de
			programmation.
		</>
	),
	[designEras.flatDesign]: (
		<>
			En 2012 j'entre au programme grande école à Grenoble Ecole de Management
			après 2 années en DUT Techniques de Commercialisation et une année
			d'Erasmus à Jyväskylä en Finlande. Mon intérêt pour les technologies me
			pousse à me spécialiser dans le management de l'innovation et des
			start-up. Ma pratique du code se résume alors a des connaissances basiques
			en HTML et Wordpress que j'acquiers dans le but de développer des projets
			personnels.
		</>
	),
	[designEras.material]: (
		<>
			En 2015 je termine mon école de commerce et me lance dans plusieurs
			projets personnels. D'abord je décide de m'investir sérieusement dans
			l'apprentissage du développement web, je suis le cours en ligne{' '}
			<i>the Odin Project</i> dans lequel j'apprends Ruby on Rails et
			Javascript. Ensuite, je met en application ces compétences en créeant avec
			deux partenaires le site slyberry.tv (aujourd'hui fermé), permettant de{' '}
			<i>binge watcher</i> des vidéos youtube par thématique. <br />
			Dans le même temps je réalise des missions de freelance en web design et
			en{' '}
			<Link href="https://www.youtube.com/watch?v=TXNcRRnF-EY" target="_blank">
				réalisation de vidéos musciales.
			</Link>{' '}
			<br />
			Cherchant plus de stabilité et une expérience plus profesionnelle, je
			décide 1 an plus tard d'intégrer l'agence Equinoa en tant que chef de
			projet web.
		</>
	),
	[designEras.brutalism]: (
		<>
			C'est en 2018 que je deviens développeur. <br />
			Pendant les deux années précédentes au sein d'Equinoa, je me passionne de
			plus en plus pour le code et je passe de nombreuses soirées et week-end à
			apprendre le javascript moderne et à experimenter. <br /> Faire de cette
			passion mon métier devient alors une évidence et je démissionne de mon
			poste de chef de projet web et je deviens développeur full stack
			Javascript au sein du département innovation de l'entreprise de robotique
			Balyo.
		</>
	),
	[designEras.now]: `Développeur full stack JS à la recherche de sa prochaine expérience professionnelle à Paris.`,
};
export default function WhatIWasDoing({
	designEra,
	children,
}: PropsWithChildren<WhatIWasDoingProps>) {
	if (designEra === designEras.now) {
		return <p>{content[designEra]}</p>;
	}
	return (
		<div className="what-i-was-doing">
			{children ? (
				<>
					{children}
					<p>{content[designEra]}</p>
				</>
			) : (
				<>
					<h2>Ce que je faisais en {designEraToYearMap[designEra]}</h2>
					<p>{content[designEra]}</p>
				</>
			)}
		</div>
	);
}

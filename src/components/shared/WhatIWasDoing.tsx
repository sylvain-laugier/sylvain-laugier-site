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
	[designEras.nineties]: `En 1999, j'ai 9 ans et mon usage de l'informatique se résume à des expérimentations sur l'ordinateur familial. 
	Je suis déjá néanmois fasciné par l'outil bien que je ne dispose que de word et du Démineur. Quant à internet il ne s'agit a l'époque que d'une chose lointaine abritant paraît-il la soluce pour obtenir Mew dans Pokemon.`,
	[designEras.noughties]: `C'est en 2005, à 15 ans, que j'ai mon premier rapport au développement informatique, par curiosité je suis le cours de C++ sur le site du zéro, mais tout cela est encore trop abstrait pour moi et je finis par passer mes journées sur le logiciel RPG maker, outil permettant de créer des RPG 16 bit en no-code. Bien que sans syntaxe, l'outil met à disposition les outils d'un vrai langage (boucles, variables, instructions conditionnelles), ce qui me familiarise d'autant plus avec les concepts de programmation. J'ai malheureusement aujourd'hui perdu les données du jeu sur lequel j'avais passé tant d'heures... `,
	[designEras.skeuomorphic]: `L'année 2009 est une année commune qui commence un jeudi. C'est la 2009e année de notre ère, la 9e année du IIIe millénaire et du xxie siècle et la 10e et dernière année de la décennie 2000-2009. 2009 a été déclarée Année mondiale de l'astronomie (décision de l'Assemblée générale des Nations unies en date du 19 décembre 2007). Ceci célèbre Galilée qui, il y a 400 ans, a pointé une lunette vers le ciel. Cela lui a permis de découvrir les quatre principaux satellites de Jupiter, les montagnes et cratères de la Lune et les taches solaires. `,
	[designEras.flatDesign]: `L'année 2012 est une année bissextile commençant un dimanche. C'est la 2012e année de notre ère, à la 12e année du IIIe millénaire et du xxie siècle et à la 3e année de la décennie 2010-2019.`,
	[designEras.material]: `L'année 2009 est une année commune qui commence un jeudi. C'est la 2009e année de notre ère, la 9e année du IIIe millénaire et du xxie siècle et la 10e et dernière année de la décennie 2000-2009. 2009 a été déclarée Année mondiale de l'astronomie (décision de l'Assemblée générale des Nations unies en date du 19 décembre 2007). Ceci célèbre Galilée qui, il y a 400 ans, a pointé une lunette vers le ciel. Cela lui a permis de découvrir les quatre principaux satellites de Jupiter, les montagnes et cratères de la Lune et les taches solaires. `,
};
export default function WhatIWasDoing({
	designEra,
	children,
}: PropsWithChildren<WhatIWasDoingProps>) {
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

import React from 'react';
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
	[designEras.noughties]: `L'année 2009 est une année commune qui commence un jeudi. C'est la 2009e année de notre ère, la 9e année du IIIe millénaire et du xxie siècle et la 10e et dernière année de la décennie 2000-2009. 2009 a été déclarée Année mondiale de l'astronomie (décision de l'Assemblée générale des Nations unies en date du 19 décembre 2007). Ceci célèbre Galilée qui, il y a 400 ans, a pointé une lunette vers le ciel. Cela lui a permis de découvrir les quatre principaux satellites de Jupiter, les montagnes et cratères de la Lune et les taches solaires. `,

	[designEras.skeuomorphic]: `L'année 2009 est une année commune qui commence un jeudi. C'est la 2009e année de notre ère, la 9e année du IIIe millénaire et du xxie siècle et la 10e et dernière année de la décennie 2000-2009. 2009 a été déclarée Année mondiale de l'astronomie (décision de l'Assemblée générale des Nations unies en date du 19 décembre 2007). Ceci célèbre Galilée qui, il y a 400 ans, a pointé une lunette vers le ciel. Cela lui a permis de découvrir les quatre principaux satellites de Jupiter, les montagnes et cratères de la Lune et les taches solaires. `,
	[designEras.flatDesign]: `L'année 2012 est une année bissextile commençant un dimanche. C'est la 2012e année de notre ère, à la 12e année du IIIe millénaire et du xxie siècle et à la 3e année de la décennie 2010-2019.`,
};
export default function WhatIWasDoing({ designEra }: WhatIWasDoingProps) {
	return (
		<div className="what-i-was-doing">
			<h2>Ce que je faisais en {designEraToYearMap[designEra]}</h2>
			<p>{content[designEra]}</p>
		</div>
	);
}

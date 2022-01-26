import React from 'react';
import {
	DesignEraMap,
	designEras,
	DesignEras,
	designEraToYearMap,
} from '../../utils/constants';

interface HistoryOfWebDesignProps {
	designEra: DesignEras;
}

const content: DesignEraMap = {
	[designEras.nineties]: `Les années 90 représentent la préhistoire du web design, peu de choix étaient alors offerts à l'intrepide développeur qui s'aventurait dans ce monde naissant rempli de contraintes et de problèmes de compatibilités. 
	En résulte un design instinctif chargé de polices basiques et de délimitations grossières garni d'arrières plans kitsch et des couleurs criades pour se différencier. Une autre époque. `,
	[designEras.noughties]: `Le milieu des années 2000 est un période contrasté pour le webdesign, quand une partie du web se lâche dans une créativité sans aucune limite (y compris celle du bon goût) avec Adobe Flash, les grands services web qui explosent et qui finiront par dominer la décennie suivante imposent un design minimaliste et très peu inspiré, motivé par la simplicité d'utilisation et la rapidité de chargement à une époque ou le haut débit n'est absolument pas la norme. De plus, alors que tous les services restent à construire dans un web en cours d'adoption, que l'Iphone n'est encore qu'en projet, le design n'est absolument pas la priorité d'équipes composées principalement d'ingénieurs très techniques.`,
	[designEras.skeuomorphic]: `L'année 2009 est une année commune qui commence un jeudi. C'est la 2009e année de notre ère, la 9e année du IIIe millénaire et du xxie siècle et la 10e et dernière année de la décennie 2000-2009. 2009 a été déclarée Année mondiale de l'astronomie (décision de l'Assemblée générale des Nations unies en date du 19 décembre 2007). Ceci célèbre Galilée qui, il y a 400 ans, a pointé une lunette vers le ciel. Cela lui a permis de découvrir les quatre principaux satellites de Jupiter, les montagnes et cratères de la Lune et les taches solaires. `,
	[designEras.flatDesign]: `L'année 2012 est une année bissextile commençant un dimanche. C'est la 2012e année de notre ère, à la 12e année du IIIe millénaire et du xxie siècle et à la 3e année de la décennie 2010-2019.`,
	[designEras.material]: `L'année 2009 est une année commune qui commence un jeudi. C'est la 2009e année de notre ère, la 9e année du IIIe millénaire et du xxie siècle et la 10e et dernière année de la décennie 2000-2009. 2009 a été déclarée Année mondiale de l'astronomie (décision de l'Assemblée générale des Nations unies en date du 19 décembre 2007). Ceci célèbre Galilée qui, il y a 400 ans, a pointé une lunette vers le ciel. Cela lui a permis de découvrir les quatre principaux satellites de Jupiter, les montagnes et cratères de la Lune et les taches solaires. `,
};
export default function HistoryOfWebDesign({
	designEra,
}: HistoryOfWebDesignProps) {
	return (
		<div className="history-of-web-design">
			<h2>Le web design en {designEraToYearMap[designEra]}</h2>
			<p>{content[designEra]}</p>
		</div>
	);
}

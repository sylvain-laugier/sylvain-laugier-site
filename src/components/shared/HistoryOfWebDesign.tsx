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
	[designEras.nineties]: (
		<>
			Les années 90 représentent la préhistoire du web design. Peu de choix
			étaient alors offerts à l'intrépide développeur qui s'aventurait dans ce
			monde naissant rempli de contraintes et de problèmes de compatibilés. En
			résulte un design instinctif chargé de polices basiques et de
			délimitations grossières garni d'arrières plans kitsch et des couleurs
			criades pour se différencier. Une autre époque.
		</>
	),
	[designEras.noughties]: (
		<>
			Le milieu des années 2000 est une période contrastée pour le webdesign.
			D'un côté, une partie du web se lâche dans une créativité sans aucune
			limite (y compris celle du bon goût) avec Adobe Flash. De l'autre, les
			grands services web qui domineront la décennie suivante imposent un design
			minimaliste et très peu inspiré, motivé par la simplicité d'utilisation et
			la rapidité de chargement. <br /> De plus, alors que tous les services
			restent à construire dans un web en cours d'adoption, que l'Iphone n'est
			encore qu'en projet, le design n'est absolument pas la priorité d'équipes
			composées principalement d'ingénieurs très techniques.
		</>
	),
	[designEras.flatDesign]: (
		<>
			Le début des années 2010 voit l'explosion de la tendance flat design. Le
			web est maintenant adopté massivement et fait partie du quotidien d'une
			majorité. Face à un public de plus en plus à l'aise avec les interfaces,
			le web design peut se permettre plus d'abstraction, de subtilité et se
			débarrasse de tout ce qui est superflu. En résulte des interfaces
			minimalistes, misant sur des larges typographies simples et élegantes, une
			gestion millimétrée de la mise en page ainsi que des couleurs vives et
			engageantes. Ce design léger et direct est également poussé par
			l'explosion du mobile et du responsive design.
		</>
	),
	[designEras.material]: (
		<>
			Le milieu des années 2010 est une période de consolidation pour le design
			web. La priorité est placée sur l'interaction, l'utilisabilité et la
			standardisation entre les plateformes. <br />
			C'est dans cette logique que Google présente en 2014 son material design
			qui sera adopté par des milliers d'applications mobiles et web. Il s'agit
			d'un système de règles et de conventions de design exhaustivement
			detaillées et mises à la disposition des créateurs. L'inspiration du flat
			design est flagrante, mais le material rajoute de nombreux élements
			visuels ainsi que des animations travaillées afin de clarifier les
			interactions. Il permet aussi de corriger le princiapl défaut du flat
			design à savoir son manque d'accessiblité.
			<br />
			La richesse de sa documentation, son approche mobile first et les
			nombreuses librairies de composants déjà utilisables font du material
			design un choix de prédilection pour les équipes souhaitant réaliser une
			interface efficace et attrayante sans avoir les moyens ou les compétences
			pour créer leur propre design.
		</>
	),
	[designEras.brutalism]: (
		<>
			À la fin des années 2010, le web design est dans une période de maturité.
			L'effervescence de créativité, de découvertes, d'expérimentation et
			d'évolution qui avaient marqué les 15 années précedentes se dissipe. Le
			web se standardise autour des tendances antérieures qui ont fait leur
			preuve en terme d'usage, d'accessibilité et d'esthétique. <br />
			<br />
			C'est en réaction à cette accalmie que de nombreux courants et approches
			voient le jour, parfois à l'antithèse des règles établies. <br />
			Le brutalisme est l'un de ces courants. <br />
			Inspiré de l'approche du même nom en architecture dont il adapte l'esprit,
			le brutalisme va abruptement à l'essentiel, sans fioritures ni élegance,
			il superpose des couleurs dépareillées avec des typographies kitschs et
			vieillottes, ajoute des espaces inutiles, des bordures pléonastiques ou
			des formes brutes et acérées.
			<br /> Après tout qui a dit qu'un site devait être beau ? <br />
		</>
	),
	[designEras.now]: <></>,
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

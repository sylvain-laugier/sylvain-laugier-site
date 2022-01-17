import React from 'react';
import {
	designEras,
	DesignEras,
	designEraToYearMap,
	SetState,
} from '../../utils/constants';
import YearLink from './YearLink';

interface YearListProps {
	setDesignEra: SetState<DesignEras>;
	designEra: DesignEras;
}
export default function YearList({ setDesignEra, designEra }: YearListProps) {
	return (
		<div className="year-list-container">
			<YearLink
				setDesignEra={setDesignEra}
				designEra={designEras.nineties}
				selected={designEras.nineties === designEra}
			>
				{designEraToYearMap[designEras.nineties]}
			</YearLink>
			<YearLink
				setDesignEra={setDesignEra}
				designEra={designEras.noughties}
				selected={designEras.noughties === designEra}
			>
				{designEraToYearMap[designEras.noughties]}
			</YearLink>
			<YearLink
				setDesignEra={setDesignEra}
				designEra={designEras.skeuomorphic}
				selected={designEras.skeuomorphic === designEra}
			>
				{designEraToYearMap[designEras.skeuomorphic]}
			</YearLink>
			<YearLink
				setDesignEra={setDesignEra}
				designEra={designEras.flatDesign}
				selected={designEras.flatDesign === designEra}
			>
				{designEraToYearMap[designEras.flatDesign]}
			</YearLink>
		</div>
	);
}

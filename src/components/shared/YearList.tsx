import React from 'react';
import { designEras, DesignEras, SetState } from '../../utils/constants';
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
				1996
			</YearLink>
			<YearLink
				setDesignEra={setDesignEra}
				designEra={designEras.skeuomorphic}
				selected={designEras.skeuomorphic === designEra}
			>
				2009
			</YearLink>
			<YearLink
				setDesignEra={setDesignEra}
				designEra={designEras.flatDesign}
				selected={designEras.flatDesign === designEra}
			>
				2012
			</YearLink>
		</div>
	);
}

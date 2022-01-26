import { AppBar, Tab, Tabs } from '@material-ui/core';
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

const MaterialTabStyle = { fontSize: '1.5rem' };
export default function YearList({ setDesignEra, designEra }: YearListProps) {
	if (designEra === designEras.material) {
		return (
			<AppBar position="fixed">
				<Tabs
					value={designEras.material}
					onChange={(e, value) => setDesignEra(value)}
					centered
				>
					<Tab
						label={designEraToYearMap[designEras.nineties]}
						value={designEras.nineties}
						style={MaterialTabStyle}
					/>
					<Tab
						label={designEraToYearMap[designEras.noughties]}
						value={designEras.noughties}
						style={MaterialTabStyle}
					/>
					<Tab
						label={designEraToYearMap[designEras.skeuomorphic]}
						value={designEras.skeuomorphic}
						style={MaterialTabStyle}
					/>
					<Tab
						label={designEraToYearMap[designEras.flatDesign]}
						value={designEras.flatDesign}
						style={MaterialTabStyle}
					/>
					<Tab
						label={designEraToYearMap[designEras.material]}
						value={designEras.material}
						style={MaterialTabStyle}
					/>
				</Tabs>
			</AppBar>
		);
	}

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
			<YearLink
				setDesignEra={setDesignEra}
				designEra={designEras.material}
				selected={false}
			>
				{designEraToYearMap[designEras.material]}
			</YearLink>
		</div>
	);
}

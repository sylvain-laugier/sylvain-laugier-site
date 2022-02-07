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
	currentDesignEra: DesignEras;
}

const MaterialTabStyle = { fontSize: '1.5rem' };
export default function YearList({
	setDesignEra,
	currentDesignEra,
}: YearListProps) {
	if (currentDesignEra === designEras.material) {
		return (
			<AppBar position="fixed">
				<Tabs
					value={designEras.material}
					onChange={(e, value) => setDesignEra(value)}
					centered
				>
					{Object.values(designEras).map(designEra => (
						<Tab
							label={designEraToYearMap[designEra]}
							value={designEra}
							style={MaterialTabStyle}
						/>
					))}
				</Tabs>
			</AppBar>
		);
	}

	return (
		<div className="year-list-content-container">
			{currentDesignEra === designEras.now && (
				<>
					<h2>Ce site dispose d'une machine à voyager dans le temps !</h2>
					<p>Choissisez votre destination !</p>
				</>
			)}
			<div className="year-list-container">
				{Object.values(designEras).map(designEra => (
					<YearLink
						setDesignEra={setDesignEra}
						designEra={designEra}
						selected={designEra === currentDesignEra}
					>
						{designEraToYearMap[designEra]}
					</YearLink>
				))}
			</div>
		</div>
	);
}

import React, { useState } from 'react';
import { designEras, DesignEras } from '../utils/constants';
import YearList from '../components/shared/YearList';
import { NinetiesLayout } from '../components/nineties';
import { NoughtiesLayout } from '../components/noughties';
import { FlatDesignLayout } from '../components/flat';
import { SkeuomorphicLayout } from '../components/skeuemorphic';

// markup
const IndexPage = () => {
	const [designEra, setDesignEra] = useState<DesignEras>(designEras.nineties);
	return (
		<main className="App">
			<title>Home Page</title>

			<div className="div-id" id={designEra}>
				<div className="home">
					<YearList designEra={designEra} setDesignEra={setDesignEra} />
					{getYearLayoutComponent(designEra)}
				</div>
			</div>
		</main>
	);
};

function getYearLayoutComponent(designEra: DesignEras) {
	switch (designEra) {
		case designEras.nineties:
			return <NinetiesLayout />;
		case designEras.noughties:
			return <NoughtiesLayout />;
		case designEras.flatDesign:
			return <FlatDesignLayout />;
		case designEras.skeuomorphic:
			return <SkeuomorphicLayout />;
	}
}

export default IndexPage;

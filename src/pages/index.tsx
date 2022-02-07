import React, { useState } from 'react';
import { designEras, DesignEras } from '../utils/constants';
import YearList from '../components/shared/YearList';
import { NinetiesLayout } from '../components/nineties';
import { NoughtiesLayout } from '../components/noughties';
import { FlatDesignLayout } from '../components/flat';
import { SkeuomorphicLayout } from '../components/skeuemorphic';
import { MaterialLayout } from '../components/material';
import { BrutalismLayout } from '../components/brutalism/BrutalismLayout';
import { NowLayout } from '../components/now/NowLayout';

const IndexPage = () => {
	const [designEra, setDesignEra] = useState<DesignEras>(designEras.now);
	return (
		<main className="App">
			<title>Home Page</title>

			<div className="div-id" id={designEra}>
				<div className="home">
					{designEra !== designEras.now && (
						<YearList
							currentDesignEra={designEra}
							setDesignEra={setDesignEra}
						/>
					)}
					{getYearLayoutComponent(designEra, setDesignEra)}
				</div>
			</div>
		</main>
	);
};

function getYearLayoutComponent(designEra: DesignEras, setDesignEra) {
	switch (designEra) {
		case designEras.nineties:
			return <NinetiesLayout />;
		case designEras.noughties:
			return <NoughtiesLayout />;
		case designEras.flatDesign:
			return <FlatDesignLayout />;
		case designEras.skeuomorphic:
			return <SkeuomorphicLayout />;
		case designEras.material:
			return <MaterialLayout />;
		case designEras.brutalism:
			return <BrutalismLayout />;
		case designEras.now:
			return <NowLayout setDesignEra={setDesignEra} />;
	}
}

export default IndexPage;

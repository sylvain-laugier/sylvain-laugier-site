import React, { useCallback, useEffect, useState } from 'react';
import { designEras, DesignEras } from '../utils/constants';
import YearList from '../components/shared/YearList';
import { NinetiesLayout } from '../components/nineties';
import { NoughtiesLayout } from '../components/noughties';
import { FlatDesignLayout } from '../components/flat';
import { MaterialLayout } from '../components/material';
import { BrutalismLayout } from '../components/brutalism/BrutalismLayout';
import { NowLayout } from '../components/now/NowLayout';
import Loading from '../components/loading/Loading';

const IndexPage = () => {
	const [designEra, setDesignEra] = useState<DesignEras>(designEras.now);
	const [loading, setLoading] = useState(false);

	const changeDesignEra = useCallback((designEra: DesignEras) => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setDesignEra(designEra);
		}, 6000);
	}, []);

	return (
		<main className={`${loading ? 'app-loading' : ''} App`}>
			<title>Home Page</title>

			<div className="div-id">
				<div id={designEra}>
					<div className="home">
						{designEra !== designEras.now && (
							<YearList
								currentDesignEra={designEra}
								setDesignEra={changeDesignEra}
							/>
						)}

						{getYearLayoutComponent(designEra, changeDesignEra)}
					</div>
				</div>
			</div>
			<div className="loading-container">
				<Loading loading={loading} />
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
		case designEras.material:
			return <MaterialLayout />;
		case designEras.brutalism:
			return <BrutalismLayout />;
		case designEras.now:
			return (
				<>
					<NowLayout setDesignEra={setDesignEra} />
				</>
			);
	}
}

export default IndexPage;

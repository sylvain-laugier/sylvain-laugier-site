import React, { useCallback, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
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
	const { site } = useStaticQuery(query);

	const {
		title,
		description,
		siteUrl,
		defaultImage,
		twitterUsername,
	} = site.siteMetadata;

	const image = `${siteUrl}/${defaultImage}`;

	const changeDesignEra = useCallback(
		(newDesignEra: DesignEras) => {
			if (newDesignEra !== designEra) {
				setLoading(true);
				setTimeout(() => {
					setLoading(false);
					setDesignEra(newDesignEra);
				}, 4500);
			}
		},
		[designEra]
	);

	return (
		<main className={`${loading ? 'app-loading' : ''} App`}>
			<Helmet title={title}>
				<meta name="description" content={description} />
				<meta name="image" content={image} />
				<meta property="og:url" content={siteUrl} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={image} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="google-site-verification"
					content="VPb0kko-RsNeCueU_LC4ysE3XNG8yYytyCBYjuVcOMA"
				/>
				{twitterUsername && (
					<meta name="twitter:creator" content={twitterUsername} />
				)}
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image} />
			</Helmet>
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
				<Loading />
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

const query = graphql`
	query SEO {
		site {
			siteMetadata {
				title
				description
				siteUrl
				defaultImage: image
				twitterUsername
			}
		}
	}
`;

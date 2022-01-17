import './noughties-layout.scss';
import React from 'react';
import { designEras } from '../../utils/constants';
import SocialMediaLinks from '../shared/SocialMediaLinks';
import Technologies from '../shared/Technologies';
import WhatIWasDoing from '../shared/WhatIWasDoing';
import HistoryOfWebDesign from '../shared/HistoryOfWebDesign';

export function NoughtiesLayout() {
	return (
		<div className="noughties-content-container">
			<div className="colums-container">
				<div className="left-column">
					<div className="information">
						<h2> Informations</h2>
						<div className="information-columns">
							<div className="information-left">
								<p> Nom :</p>
								<p> Poste :</p>
								<p> Statut Pro: </p>
							</div>
							<div className="information-right">
								<p> Sylvain Laugier</p>
								<p> Creative web developer</p>
								<p> En recherche d'opportunités</p>
							</div>
						</div>
					</div>
					<WhatIWasDoing designEra={designEras.noughties} />

					<Technologies />
				</div>
				<div className="right-column">
					<HistoryOfWebDesign designEra={designEras.noughties} />
				</div>
			</div>
			<SocialMediaLinks designEra={designEras.noughties} />
		</div>
	);
}

import React from 'react';
import './loading.scss';
import { Delorean } from './Delorean';
import { Portal } from './Portal';
import { Light } from './Light';

const starRange = [...new Array(30)];

export default function Loading() {
	return (
		<div className="loading-screen">
			<div className="star-container">
				{starRange.map(() => (
					<div className="star" />
				))}
			</div>
			<div className="delorean-container">
				<Portal explosion={true} />
				<Delorean />
				<Portal explosion={false} />
			</div>
			<div className="background-container">
				<Light />
				<Light />
				<Light />
				<Light />
				<Light />
				<Light />
				<div className="parking-floor"></div>
			</div>
		</div>
	);
}

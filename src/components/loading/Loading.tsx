import React from 'react';
import './loading.scss';
import { Delorean } from './Delorean';
import { Portal } from './Portal';
import { Light } from './Light';

const range = [...new Array(30)];

interface LoadingProps {
	loading: boolean;
}

export default function Loading({ loading }: LoadingProps) {
	return (
		<div className="loading-screen">
			<div className="star-container">
				{range.map(() => (
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
				<div className="parking-floor"></div>
			</div>
		</div>
	);
}

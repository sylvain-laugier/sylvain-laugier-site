import React from 'react';
import './portal.scss';

const range = [...new Array(15)];

interface PortalInterface {
	explosion: boolean;
}
export function Portal({ explosion }: PortalInterface) {
	return (
		<>
			<div
				className={explosion ? 'explosion-container' : 'particule-container'}
			>
				<div className="halo " />

				<div className="lightning-image">
					<div className="lightning-flash" />
				</div>
				{range.map((r, i) => (
					<div className="particule" key={i} />
				))}
			</div>
		</>
	);
}

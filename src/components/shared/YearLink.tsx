import React, { PropsWithChildren } from 'react';
import { DesignEras, SetState } from '../../utils/constants';

interface YearLinkProps {
	designEra: DesignEras;
	setDesignEra: SetState<DesignEras>;
	selected: boolean;
	id: string;
}
export default function YearLink({
	designEra,
	setDesignEra,
	selected,
	children,
	id,
}: PropsWithChildren<YearLinkProps>) {
	return (
		<div
			className={`year-link ${selected ? 'year-link-selected' : ''}`}
			id={id}
			onClick={() => {
				setDesignEra(designEra);
			}}
		>
			{children}
		</div>
	);
}

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

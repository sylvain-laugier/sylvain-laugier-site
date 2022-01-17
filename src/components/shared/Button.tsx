import React from 'react';

interface ButtonProps {
	label: string;
	href: string;
}
export default function Button({ label, href }: ButtonProps): JSX.Element {
	return (
		<div className="button">
			<a href={href} target="_blank">
				{label}
			</a>
		</div>
	);
}

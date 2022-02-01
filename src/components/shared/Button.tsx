import React from 'react';

interface ButtonProps {
	label: string;
	href: string;
	className?: string;
}
export default function Button({
	label,
	href,
	className,
}: ButtonProps): JSX.Element {
	return (
		<div className={`button ${className}`}>
			<a href={href} target="_blank">
				{label}
			</a>
		</div>
	);
}

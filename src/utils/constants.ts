export const designEras = {
	nineties: 'nineties',
	noughties: 'noughties',
	flatDesign: 'flat-design',
	material: 'material',
	brutalism: 'brutalism',
	now: 'now',
} as const;

export type DesignEras = typeof designEras[keyof typeof designEras];

export type DesignEraMap = { [key in DesignEras]: string };
export const designEraToYearMap: DesignEraMap = {
	[designEras.nineties]: '1999',
	[designEras.noughties]: '2005',
	[designEras.flatDesign]: '2012',
	[designEras.material]: '2015',
	[designEras.brutalism]: '2018',
	[designEras.now]: '2022',
};

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

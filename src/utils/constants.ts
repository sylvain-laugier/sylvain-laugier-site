export const designEras = {
  nineties: 'nineties',
  skeuomorphic: 'skeuomorphic',
  flatDesign: 'flat-design'
} as const;


export type DesignEras = typeof designEras[keyof typeof designEras];

export type DesignEraMap = { [key in DesignEras]: string }
export const designEraToYearMap: DesignEraMap = { 
  [designEras.nineties]: '1999',
	[designEras.skeuomorphic]: '2009',
	[designEras.flatDesign]: '2012',
}

export type SetState<T> =React.Dispatch<React.SetStateAction<T>>
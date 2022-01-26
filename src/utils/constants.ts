export const designEras = {
  nineties: 'nineties',
  noughties: 'noughties',
  skeuomorphic: 'skeuomorphic',
  flatDesign: 'flat-design',
  material: 'material'
} as const;


export type DesignEras = typeof designEras[keyof typeof designEras];

export type DesignEraMap = { [key in DesignEras]: string }
export const designEraToYearMap: DesignEraMap = { 
  [designEras.nineties]: '1999',
  [designEras.noughties]: '2005',
	[designEras.skeuomorphic]: '2009',
	[designEras.flatDesign]: '2012',
  [designEras.material]: '2015',
}

export type SetState<T> =React.Dispatch<React.SetStateAction<T>>
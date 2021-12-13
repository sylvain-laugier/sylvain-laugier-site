export const designEras = {
  raw: 'raw',
  skeuomorphic: 'skeuomorphic',
  flatDesign: 'flat-design'
} as const;

export type DesignEras = typeof designEras[keyof typeof designEras];


export type SetState<T> =React.Dispatch<React.SetStateAction<T>>
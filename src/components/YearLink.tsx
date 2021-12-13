import React, { PropsWithChildren } from 'react'
import { DesignEras, SetState } from '../utils/constants'

interface YearLinkProps  {
  designEra: DesignEras,
  setDesignEra: SetState<DesignEras>
  selected: boolean
}
export default function YearLink({designEra, setDesignEra, selected, children}: PropsWithChildren<YearLinkProps>) {
  return (
    <div className={`year-link ${selected && 'year-link-selected'}`} onClick={() => setDesignEra(designEra)}> {children} </div>    
  )
}

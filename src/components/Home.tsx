import React, { useState } from 'react'
import { designEras, DesignEras } from '../utils/constants';
import AboutMe from './AboutMe';
import WhatIWasDoing from './WhatIWasDoing';
import YearList from './YearList' ;

export default function Home() {
  const [designEra, setDesignEra] = useState<DesignEras>(designEras.raw)
  return (
    <div id={designEra}>
      <div className="home">

      <YearList designEra={designEra} setDesignEra={setDesignEra}/>
      <WhatIWasDoing designEra={designEra}/>
      <div className='separator'></div>
      <AboutMe />
      </div>
    </div >
  )
}

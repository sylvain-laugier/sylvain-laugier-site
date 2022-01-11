import React, { useState } from 'react'
import { designEras, DesignEras } from '../utils/constants';
import AboutMe from './AboutMe';
import SocialMediaLinks from './SocialMediaLinks';
import Technologies from './Technologies';
import TitleIntro from './TitleIntro';
import WhatIWasDoing from './WhatIWasDoing';
import YearList from './YearList' ;

export default function Home() {
  const [designEra, setDesignEra] = useState<DesignEras>(designEras.raw)
  return (
    <div id={designEra}>
      <div className="home">

      <YearList designEra={designEra} setDesignEra={setDesignEra}/>
      <TitleIntro /> 
      <WhatIWasDoing designEra={designEra}/>
      <div className='separator'></div>
      <AboutMe />     
      <Technologies />
      <SocialMediaLinks />

      </div>
    </div >
  )
}

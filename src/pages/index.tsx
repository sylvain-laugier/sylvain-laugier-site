import React, { useState } from 'react'
import { designEras, DesignEras } from '../utils/constants';
import AboutMe from '../components/AboutMe';
import SocialMediaLinks from '../components/SocialMediaLinks';
import Technologies from '../components/Technologies';
import TitleIntro from '../components/TitleIntro';
import WhatIWasDoing from '../components/WhatIWasDoing';
import YearList from '../components/YearList' ;

// markup
const IndexPage = () => {

  const [designEra, setDesignEra] = useState<DesignEras>(designEras.raw)
  return (
    <main className="App" >
      <title>Home Page</title>


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
  
    </main>
  )
}

export default IndexPage

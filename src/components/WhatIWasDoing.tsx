import React from 'react'
import { designEras, DesignEras } from '../utils/constants'

interface WhatIWasDoingProps {
  designEra: DesignEras
}
export default function WhatIWasDoing({designEra}: WhatIWasDoingProps) {
  return (
    <div className='what-i-was-doing'>
      <h2>Ce que je faisais</h2>
      {getContent(designEra)}
    </div>
  )
}

function getContent(designEra: DesignEras) {
  switch(designEra) {
    case designEras.raw: {
      return `1996 est une année bissextile commençant un lundi.`
    }

    case designEras.skeuomorphic: {
      return `L'année 2009 est une année commune qui commence un jeudi. C'est la 2009e année de notre ère, la 9e année du IIIe millénaire et du xxie siècle et la 10e et dernière année de la décennie 2000-2009. 2009 a été déclarée Année mondiale de l'astronomie (décision de l'Assemblée générale des Nations unies en date du 19 décembre 2007). Ceci célèbre Galilée qui, il y a 400 ans, a pointé une lunette vers le ciel. Cela lui a permis de découvrir les quatre principaux satellites de Jupiter, les montagnes et cratères de la Lune et les taches solaires. `
    }

    case designEras.flatDesign: {
      return `L'année 2012 est une année bissextile commençant un dimanche. C'est la 2012e année de notre ère, à la 12e année du IIIe millénaire et du xxie siècle et à la 3e année de la décennie 2010-2019.`
    }
  }
}

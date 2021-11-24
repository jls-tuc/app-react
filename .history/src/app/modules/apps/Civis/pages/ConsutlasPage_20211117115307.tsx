import React from 'react'
import CivisHeader from '../../../../../../.history/src/app/modules/apps/Civis/components/CivisHeader_20211117115149'
import {InfoCard} from '../components/InfoCard'
import {TematicasCard} from '../components/TematicasCard'

const ConsutlasPage = () => {
  return (
    <div>
      <CivisHeader />
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-8'>
          <TematicasCard className='card-xxl-stretch mb-xl-3' />
        </div>
        <div className='col-xl-4'>
          <InfoCard className='mb-5 mb-xxl-4' />
        </div>
      </div>
    </div>
  )
}

export default ConsutlasPage

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {MixedWidget2} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      {/* <motion.div className='col-xxl-12'
        animate={{ x: 0, y: 10, opacity: 1 }}
        initial={{ x: 0, y: 900 }}
        transition={{
          delay: 0,
          x: { type: "spring", stiffness: 50 },
          default: { duration: 0.7 },
        }}>
        <MixedWidget2
          className=' mb-xl-8'
          chartColor='secondary'
          chartHeight='200px'
          strokeColor='#cb1e46'
        />
      </motion.div> */}
      {/* <div className='col-xxl-4'>
        <ListsWidget5 className='card-xxl-stretch' />
      </div>
      <div className='col-xxl-4'>
        <MixedWidget10
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='150px'
        />
        <MixedWidget11
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='175px'
        />
      </div> */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    {/* <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xl-8'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div> */}
    {/* end::Row */}

    {/* begin::Row */}
    {/* <div className='row gy-5 g-xl-8'>
      <div className='col-xl-4'>
        <ListsWidget2 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget6 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} />
         
      </div>
    </div> */}
    {/* end::Row */}

    {/* <div className='row g-5 gx-xxl-8'>
      <div className='col-xxl-4'>
        <MixedWidget8
          className='card-xxl-stretch mb-xl-3'
          chartColor='success'
          chartHeight='150px'
        />
      </div>
      <div className='col-xxl-8'>
        <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
      </div>
    </div> */}
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}

import React from 'react'
import { PageLink, PageTitle } from '../../../../../_metronic/layout/core'
import { Calendario } from './Calendario'


const agendaBreadCrumbs: Array<PageLink> = [
  {
    title: 'Agenda del Ministerio de Ciudadanía',
    path: '/agenda',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const AgendaPage: React.FC = () => {
  return (
    <>

      <PageTitle breadcrumbs={agendaBreadCrumbs}>Agenda</PageTitle>
      <Calendario />

    </>
  )
}

export default AgendaPage

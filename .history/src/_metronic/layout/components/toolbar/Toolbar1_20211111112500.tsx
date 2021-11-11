/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'

import {useLayout} from '../../core'
import {DefaultTitle} from '../header/page-title/DefaultTitle'

const Toolbar1: FC = () => {
  const {classes} = useLayout()

  return (
    <div className='toolbar py-1 py-lg-5' id='kt_toolbar'>
      {/* begin::Container */}
      <div
        id='kt_toolbar_container'
        className={clsx(classes.toolbarContainer.join(' '), 'd-flex flex-stack')}
      >
        <DefaultTitle />
      </div>
    </div>
  )
}

export {Toolbar1}

import React, { useEffect } from 'react'
import { VscCircleFilled } from 'react-icons/vsc'

import * as C from 'components'
import PropTypes from 'prop-types'
import * as UTIL from 'utils'
import { v4 as uuid_v4 } from 'uuid'

import * as S from './styles'

const SubItems = ({ subItems = [] }) => {
  useEffect(() => {
    UTIL.Components.handleSidebarExpanded(true, '300px')

    return () => UTIL.Components.handleSidebarExpanded(true, '250px')
  }, [])

  return (
    <S.Container>
      {subItems.map((subItem) => (
        <C.UI.Link url={subItem?.path} key={uuid_v4()}>
          <S.SubItem>
            <VscCircleFilled /> {subItem?.title || '*'}
          </S.SubItem>
        </C.UI.Link>
      ))}
    </S.Container>
  )
}

SubItems.propTypes = {
  subItems: PropTypes.array.isRequired
}

export default SubItems

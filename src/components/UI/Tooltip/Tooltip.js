import React from 'react'

import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import TooltipUIMaterial from '@material-ui/core/Tooltip'

const Tooltip = ({ children, title = '', placement, hasArrow, style = {} }) => {
  const useStyles = makeStyles(() => ({
    tooltip: {
      fontSize: 13,
      ...style
    }
  }))

  const classes = useStyles()

  return (
    <TooltipUIMaterial
      title={title}
      placement={placement}
      arrow={hasArrow}
      classes={classes}
    >
      {children}
    </TooltipUIMaterial>
  )
}

Tooltip.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
  placement: PropTypes.string,
  hasArrow: PropTypes.bool,
  style: PropTypes.object
}

export default Tooltip

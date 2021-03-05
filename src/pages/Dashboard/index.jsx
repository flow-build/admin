import React from 'react'

import Layout from 'components/Layout'
import PropTypes from 'prop-types'

import * as S from './styles'

const Dashboard = ({ className, ...props }) => (
  <Layout>
    <S.Wrapper className={className} {...props}>
      <h1>Dashboard</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nulla
        incidunt quisquam rerum maiores quae repellendus aut quis ad, provident
        dignissimos sint alias soluta placeat praesentium dicta voluptates?
        Provident, error.
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nulla
        incidunt quisquam rerum maiores quae repellendus aut quis ad, provident
        dignissimos sint alias soluta placeat praesentium dicta voluptates?
        Provident, error.
      </p>
    </S.Wrapper>
  </Layout>
)

Dashboard.propTypes = {
  className: PropTypes.string
}

Dashboard.defaultProps = {
  className: 'dashboard'
}

export default Dashboard

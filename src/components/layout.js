/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring/renderprops'
import Image from './image'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Spring
        from={{ height: location.pathname === '/' ? 0 : 1000 }}
        to={{ height: location.pathname === '/' ? 400 : 0 }}
      >
        {styles => (
          <div style={{ overflow: 'hidden', ...styles }}>
            {location.pathname === '/' ? <Image /> : null}
          </div>
        )}
      </Spring>
      {children}
      <footer>© {new Date().getFullYear()}, Tony Heimark</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout

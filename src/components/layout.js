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
import styled from 'styled-components'
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

  const ImageContainer = styled.div`
    height: auto;
    max-height: 500px;
    overflow: hidden;
  `

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Spring
        from={{ height: location.pathname === '/' ? 0 : 1000 }}
        to={{ height: location.pathname === '/' ? 400 : 0 }}
      >
        {styles => (
          <ImageContainer style={{ ...styles }}>
            {location.pathname === '/' ? <Image /> : null}
          </ImageContainer>
        )}
      </Spring>
      <div style={{ margin: '0 auto', maxWidth: '1200px' }}>{children}</div>
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

import { Link, withAssetPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import logo from '../images/gatsby-icon.png'

const HeaderWrapper = styled.header`
  background: #564763;
  margin-bottom: 0;
  img {
    margin-bottom: 0;
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0.3rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const Navigation = styled.ul`
  list-style: none;
  font-size: 1rem;
  font-family: Arial;
  margin: 10px 0;

  li {
    display: inline;
    margin: 15px;
  }

  a {
    color: white;
    text-decoration: none;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <div>
        <h1
          style={{
            margin: '0',

            display: 'inline',
          }}
        >
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img
              style={{
                width: '60px',
              }}
              src={logo}
              alt="gatsby logo"
            />
          </Link>
        </h1>
        <span
          style={{
            color: 'white',
            fontFamily: 'Arial',
            margin: '0 0 0 1.5rem',
            top: '26px',
            position: 'absolute',
          }}
        >
          Tony Heimark
        </span>
      </div>
      <nav>
        <Navigation>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </Navigation>
      </nav>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

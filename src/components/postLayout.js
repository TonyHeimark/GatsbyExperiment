import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import Image from './Figure'
import styled from 'styled-components'

import Archive from './archive'

const postLayout = props => {
  const { markdownRemark } = props.data

  const PostContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto 2rem;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 40px;

    .image-container {
      height: auto;
      max-height: 500px;
      overflow: hidden;
      grid-column: 1/3;
      margin-bottom: 20px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      .image-container {
        grid-column: 1;
      }
    }
  `

  const thumbnail = markdownRemark.frontmatter.thumbnail.substr(12)

  return (
    <Layout location={props.location}>
      <PostContainer>
        <div className="image-container">
          <Image alt="Gatsby in Space" filename={thumbnail} />
        </div>
        <div style={{ padding: '0 1rem' }}>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
        </div>
        <Archive />
      </PostContainer>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        thumbnail
      }
    }
  }
`

export default postLayout

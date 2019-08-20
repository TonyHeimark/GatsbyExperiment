import React from 'react'

import Layout from '../components/layout'
import Listing from '../components/listing'
import SEO from '../components/seo'

const Blog = ({ location }) => (
  <Layout location={location}>
    <SEO title="Blog" />
    <Listing />
  </Layout>
)

export default Blog

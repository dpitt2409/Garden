import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Main">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Ruler of the Galaxy"
        src="../images/star-wars.jpg"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
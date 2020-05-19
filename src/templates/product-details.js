import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import ProductCard from '../components/product-card'
import Img from 'gatsby-image'

class ProductDetails extends React.Component {
  render() {
    const product = get(this, 'props.data.contentfulProduct')
    return (
      <Layout>
        <h1>{product.name}</h1>
        {product.description}
        {product.image.map((img) => {
          return <Img fluid={img.fluid} />
        })}
      </Layout>
    )
  }
}
export default ProductDetails
export const productQuerySingle = graphql`
  query productQuerySingle($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProduct(slug: { eq: $slug }) {
      category
      description
      image {
        fluid(maxWidth: 500) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      name
      price
      sku
      stock
    }
  }
`

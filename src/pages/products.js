import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import ProductCard from "../components/product-card";
import productStyles from '../components/product-card.module.css';




class ProductIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const products = get(this, "props.data.allContentfulProduct.nodes")


    return (
      <Layout>
        <Helmet title={siteTitle} />
        <h1>Products</h1>
        <div className={productStyles.cardContainer}>
          {products.map(product => {
            return <ProductCard {...product} key={product.name} />
          })}
        </div>
      //stuff coming
      </Layout>
    )

  }
}

export default ProductIndex;

export const productQuery = graphql`
query productQuery {
    allContentfulProduct {
      nodes {
          name
          description
          price
          category
          stock
          slug
          image {
            fluid {
              src
            }
          }
      }
    }
  }
  
`


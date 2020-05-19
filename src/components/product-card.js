import React from 'react'
import { Link } from 'gatsby'
import styles from './product-card.module.css'
import Img from 'gatsby-image'

function ProductCard({ name, category, price, slug }) {
  return (
    <article className={styles.productCard}>
      <h1>
        <Link to={'/' + slug}>{name}</Link>
      </h1>
      <p>
        £ <span className="">{price}</span>
      </p>
    </article>
  )
}

export default ProductCard

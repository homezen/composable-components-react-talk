import React, {PropTypes} from 'react'
import {
  H1,
  P,
} from './base'

import styles from 'list-page-hero'

export const ListPageHero = ({
  imageUrl,
  title,
  introProse,
}) => (
  <div className={styles.container}>
    <div className={styles.imageWrapper} >
      <Image
        src={imageUrl}
        className={styles.image} />
    </div>

    <div className={styles.infoSection}>
      <H1>
        {title}
      </H1>
      <P>
        {introProse}
      </P>
    </div>
  </div>
)

ListPageHero.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  introProse: PropTypes.string.isRequired,
}


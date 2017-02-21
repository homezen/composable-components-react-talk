import React, {PropTypes} from 'react'

import {
  H3,
  P,
  Image,
} from './base'

import styles from './team-member.css'

export const Testimonial = ({
  imageUrl,
  name,
  quote,
}) => (
  <div className={styles.container}>
    <Image
      src={imageUrl}
      className={styles.headshot} />
    <H3>
      {quote}
    </H3>
    <P className={styles.title}>
      {name}
    </P>
  </div>
)

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
}

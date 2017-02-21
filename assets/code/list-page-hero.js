import React, {PropTypes} from 'react'

import {
  H1,
  P,
} from './base'
import {SplitPaneLayout} from './layouts'
import styles from './list-page-hero'

export const ListPageHero = ({
  imageUrl,
  title,
  introProse,
}) => (
  <SplitPaneLayout>
    <Image src={imageUrl} />
    <div className={styles.infoSection}>
      <H1>
        {title}
      </H1>
      <P>
        {introProse}
      </P>
    </div>
  </SplitPaneLayout>
)

ListPageHero.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  introProse: PropTypes.string.isRequired,
}


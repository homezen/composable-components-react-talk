import React, {PropTypes} from 'react'
import TipsLibraryMenuContainer from './tips-library-menu-container'
import TipsLibraryContentContainer from './tips-library-content-container'
import {
  StickyAsideLayout,
  SplitPaneLayout,
} from './layouts'
import {
  H1,
  P,
  Image,
} from './base'
import styles from './tips-library.css'


export const TipsLibrary = ({
  imageUrl,
  title,
  introProse,
}) => (
  <div>
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

    <StickyAsideLayout>
      <TipsLibraryMenuContainer />
      <TipsLibraryContentContainer />
    </StickyAsideLayout>
  </div>
)

TipsLibrary.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  introProse: PropTypes.string.isRequired,
}



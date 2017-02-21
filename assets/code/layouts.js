import React, {PropTypes, Children} from 'react'
import {Sticky, StickyContainer} from 'react-sticky'
import warning from 'warning'
import cn from 'classnames'
import styles from './layouts.css'

export const SplitPaneLayout = ({children}) => {
  warning(
    Children.count(children) === 2,
    'SplitPaneLayout required 2 children'
  )

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.content} >
          {children[0]}
        </div>
        <div className={styles.content} >
          {children[1]}
        </div>
      </div>
    </div>
  )
}

SplitPaneLayout.propTypes = {
  children: PropTypes.node.isRequired,
}


export const StickyAsideLayout = ({
  children,
  stackAsideOnBottom,
}) => {
  warning(
    Children.count(children) === 2,
    'StickyAsideLayout requires 2 children'
  )

  return (
    <div className={styles.stickyContainer}>
      <StickyContainer>
        <div className={cn(
          styles.container,
          stackAsideOnBottom && styles.reversed,
        )}
        >
          <div className={styles.aside}>
            <Sticky
              className={styles.asideDesk}
            >
              {children[0]}
            </Sticky>
            <div
              className={styles.asidePortable}
            >
              {children[0]}
            </div>
          </div>
          <div className={styles.content}>
            {children[1]}
          </div>
        </div>
      </StickyContainer>
    </div>
  )
}

StickyAsideLayout.propTypes = {
  children: PropTypes.node.isRequired,
  stackAsideOnBottom: PropTypes.bool.isRequired,
}

StickyAsideLayout.defaultProps = {
  stackAsideOnBottom: false,
}



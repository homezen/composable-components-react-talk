import React, {PropTypes} from 'react'

import {SplitPaneLayout} from './layouts'
import {Image} from './base'
import {
  BlogSignupFormContainer,
} from './blog-signup'

export const BlogHero = ({imageUrl}) => (
  <SplitPaneLayout>
    <Image src={imageUrl} />
    <BlogSignupFormContainer />
  </SplitPaneLayout>
)

BlogHero.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}

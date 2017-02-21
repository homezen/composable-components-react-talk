import React, {PropTypes} from 'react'
import {
  StickyAsideLayout,
  SplitPaneLayout,
} from './layouts'
import BlogMenuContainer from './blog-menu-container'
import BlogPostContainer from './blog-post-container'

import {Image} from './base'
import {
  BlogSignupFormContainer,
} from './blog-signup'

export const BlogPage = ({imageUrl}) => (
  <div>
    <SplitPaneLayout>
      <Image src={imageUrl} />
      <BlogSignupFormContainer />
    </SplitPaneLayout>

    <StickyAsideLayout>
      <BlogMenuContainer />
      <BlogPostContainer />
    </StickyAsideLayout>
  </div>
)

BlogPage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}


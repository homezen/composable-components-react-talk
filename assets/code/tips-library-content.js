import React from 'react'
import {StickyAsideLayout} from './layouts'
import BlogMenuContainer from './blog-menu-container'
import BlogPostContainer from './blog-post-container'

export const BlogContent = () => (
  <StickyAsideLayout>
    <BlogMenuContainer />
    <BlogPostContainer />
  </StickyAsideLayout>
)

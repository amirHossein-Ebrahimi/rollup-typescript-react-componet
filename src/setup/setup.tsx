import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import { Content, ContentProps } from '../components/content'
import { setupDomNode } from './setup-dom'

export const showContent = (props?: ContentProps) => {
  const contentRate = setupDomNode()
  render(
    <Content
      {...props}
      onDestroy={() => unmountComponentAtNode(contentRate)}
    />,
    contentRate,
  )
}

import * as React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'
import { linkResolver } from '../utils/linkResolver'
import { prismicRepo } from '../../prismic-configuration'

const PreviewPage = ({ isPreview, ...props }) => {
  if (isPreview === false) return 'Not a preview!'

  return <p>Loading</p>
}

export default withPrismicPreviewResolver(PreviewPage, [
  { repositoryName: prismicRepo, linkResolver },
])

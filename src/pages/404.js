import * as React from 'react'
import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews'
import { linkResolver } from './../utils/linkResolver'
import { prismicRepo } from '../../prismic-configuration'

const NotFoundPage = () => (
  <div className='not-found'>
    <h1>404</h1>
    <h3>The page you are looking for was not found</h3>
    <p>
      <a href='/'>
        <button type='button'>Return to homepage</button>
      </a>
    </p>
  </div>
)

// export default withPrismicUnpublishedPreview(NotFoundPage)
export default withPrismicUnpublishedPreview(NotFoundPage, [
  {
    repositoryName: prismicRepo,
    linkResolver,
    // !!! Add this if the 404 page is configured in the prismic projekt (i.e. there is a page with data to be fetched - don't forget the grapqhl query)
    // componentResolver: componentResolverFromMap({
    //   page: PageTemplate,
    // }),
  },
])

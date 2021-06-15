/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';

export default function IndexPage() {
  return(
    <div sx={{ height: `calc(100vh - 60px)` }}>
    <div sx={{ variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%' }}>
      <h1 sx={{ fontSize: 8, my: 0 }}>This is a really dope note taking app.</h1>
    </div>
  </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      content: {
        title: 'Look at my note app tho'
      }
    }
  }
}
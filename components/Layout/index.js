import propTypes from 'prop-types'
import Banner from '../Banner'
import Header from '../Header'
import { global, layout } from './styles'

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
        <footer>
          <Banner />
        </footer>
      </div>
      <style jsx>{layout}</style>
      <style jsx global>
        {global}
      </style>
    </>
  )
}

Layout.propTypes = {
  children: propTypes.node.isRequired
}

export default Layout

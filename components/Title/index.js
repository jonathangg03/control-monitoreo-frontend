import propTypes from 'prop-types'
import { fontSizes } from '../../styles/themes'

const Title = ({ content }) => {
  return (
    <>
      <h1>{content}</h1>
      <style jsx>{`
        h1 {
          padding-bottom: 20px;
          font-weight: 300;
          font-size: ${fontSizes.big};
        }
      `}</style>
    </>
  )
}

Title.propTypes = {
  content: propTypes.string.isRequired
}

export default Title

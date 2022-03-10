import propTypes from 'prop-types'
import styles from './styles'

const KeyUser = ({ user, keyName, units, date, retirement, delivery }) => {
  return (
    <>
      <p>{user}</p>
      <p>{keyName}</p>
      <p>{date}</p>
      <p>{retirement}</p>
      <p>{units}</p>
      <p>{delivery}</p>
      <style jsx>{styles}</style>
    </>
  )
}

KeyUser.propTypes = {
  user: propTypes.string.isRequired,
  keyName: propTypes.string.isRequired,
  units: propTypes.number.isRequired,
  date: propTypes.string.isRequired,
  retirement: propTypes.string.isRequired,
  delivery: propTypes.string.isRequired
}

export default KeyUser

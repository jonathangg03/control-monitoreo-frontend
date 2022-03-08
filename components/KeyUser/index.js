import styles from './styles'

const KeyUser = ({ user, keyName, units, date, retirement, delivery }) => {
  return (
    <>
      <p>{user}</p>
      <p>{keyName}</p>
      <p>{units}</p>
      <p>{date}</p>
      <p>{retirement}</p>
      <p>{delivery}</p>
      <style jsx>{styles}</style>
    </>
  )
}

export default KeyUser

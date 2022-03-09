import propTypes from 'prop-types'

import styles from './styles'

const Replacement = ({
  client,
  date,
  hour,
  caseNumber,
  partNumber,
  seriesNumber,
  units,
  partName,
  engineerName,
  description
}) => {
  return (
    <>
      <p>{client}</p>
      <p>{date}</p>
      <p>{hour}</p>
      <p>{caseNumber}</p>
      <p>{partNumber}</p>
      <p>{seriesNumber}</p>
      <p>{units}</p>
      <p>{partName}</p>
      <p>{engineerName}</p>
      <p>{description}</p>
      <style jsx>{styles}</style>
    </>
  )
}

Replacement.propTypes = {
  client: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  hour: propTypes.string.isRequired,
  caseNumber: propTypes.string.isRequired,
  partNumber: propTypes.string.isRequired,
  seriesNumber: propTypes.string.isRequired,
  units: propTypes.number.isRequired,
  partName: propTypes.string.isRequired,
  engineerName: propTypes.string.isRequired,
  description: propTypes.string.isRequired
}

export default Replacement

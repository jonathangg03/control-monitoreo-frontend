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

export default Replacement

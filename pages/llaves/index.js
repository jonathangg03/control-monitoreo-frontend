import KeyUserList from '../../components/KeyUserList'
import Title from '../../components/Title'
import mockKeys from './mockKeys'

const Keys = () => {
  return (
    <>
      <Title content={'Control de llaves'} />
      <KeyUserList keyUsers={mockKeys} />
    </>
  )
}

export default Keys

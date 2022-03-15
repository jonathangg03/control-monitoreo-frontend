import { useEffect, useState } from 'react'

const useFilter = ({ searchValue, registers, filter }) => {
  const [filteredRecords, setFilteredRecords] = useState([])

  useEffect(() => {
    setFilteredRecords(registers)
  }, [registers])

  const handleSearch = () => {
    if (searchValue) {
      const filterRegisters = registers.filter((register) => {
        if (
          register[filter].toLowerCase().includes(searchValue.toLowerCase())
        ) {
          return register
        }
      })
      setFilteredRecords(filterRegisters)
    } else {
      setFilteredRecords(registers)
    }
  }

  return {
    filteredRecords,
    handleSearch
  }
}

export default useFilter

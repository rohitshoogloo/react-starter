import React from 'react'
import FormInputGroup from '../../components/form/input/FormInputGroup'

const SearchBox = () => {
  return (
    <FormInputGroup 
      text={"Search Products"}
      placeholder={"Type your product here.."}
      name={"product-search-box"}
      label={"Search Products"}
    />
  )
}

export default SearchBox
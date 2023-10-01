import React, { useContext } from 'react'

import FormInputGroup from '../../components/form/input/FormInputGroup'
import { GlobalSearchContext } from '../../context/GlobalSearchContext';

const SearchBox = () => {

  const { updateSearchText } = useContext(GlobalSearchContext);
  return (
    <FormInputGroup 
      text={"Search Products"}
      placeholder={"Type your product here.."}
      name={"product-search-box"}
      label={"Search Products"}
      onChange={(e) => updateSearchText(e.target.value)}
    />
  )
}

export default SearchBox
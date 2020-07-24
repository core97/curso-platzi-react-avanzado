import React from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

// El prop 'id' llega en la ruta como parámetro
export const Home = ({ categoryId }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}

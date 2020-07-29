import React from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

// El prop 'categoryId' llega en la ruta como parámetro
export const Home = ({ categoryId }) => {
  return (
    <Layout
      title='Tu app de fotos de mascotas'
      subtitle='Encuentra fotos de animales dométicos muy bonitos'
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}

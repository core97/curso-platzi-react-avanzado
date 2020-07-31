import React from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

// El prop 'categoryId' llega en la ruta como parámetro
const HomePage = ({ categoryId }) => {
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

export default React.memo(HomePage, (prevProps, props) => {
  // Solo se renderizará de nuevo en el caso de que la prop 'categoryId' no sea igual
  return prevProps.categoryId === props.categoryId
})

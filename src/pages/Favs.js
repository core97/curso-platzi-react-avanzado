import React from 'react'

import { FavWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export default () => {
  return (
    <Layout
      title='Favoritos'
      subtitle='Aqui puedes encontar tus animales favoritos'
    >
      <FavWithQuery />
    </Layout>
  )
}

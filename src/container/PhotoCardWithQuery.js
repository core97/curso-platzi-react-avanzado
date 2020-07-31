import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import { PhotoCard } from '../components/PhotoCard'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

/**
 * Está el patrón de los hocs (high order component) o Render props (el más utilizado) que
 * convierten la prop especial 'children' y en lugar de renderizar un componente
 * como haríamos normalmente, lo que va a renderizar es una función. Esta función debe devolver
 * el componente que queremos renderizar. La función de las render props lo que va a recibir por
 * parámetro es la información que queremos inyectar en el componente a renderizar
 */
export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)

/*
Example Render props
https://medium.com/@seanmcp/how-to-create-a-render-prop-component-aa3ff54443e6

Create HOC:
const UserLogged = ({ children }) => {
  return children({ isAuth: false})
}

Use HOC:
...
<UserLogged>
  {
    ({ isAuth }) =>
      isAuth
        ? <Router>...</Router>
        : <Router>...</Router>
  }
</UserLogged>
*/

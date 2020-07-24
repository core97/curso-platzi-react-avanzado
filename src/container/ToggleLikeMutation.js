import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`
/**
 * Esto incremente automáticamente el número de likes gracias a
 * la magia de 'react-apollo'. En la mutación devolvemos el id
 * de la foto que nos gusta, y gracias a react-apollo detecta internamente
 * que esta id esta sufriendo una mutación y hace que estos cambios se
 * vean renderizados en la UI sin necesidad de tocar nada.
 */
export const ToggleLikeMutation = ({ children }) => {
  return <Mutation mutation={LIKE_PHOTO}>{children}</Mutation>
}

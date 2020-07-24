import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_PHOTOS = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

// HoC => High order component
export const withPhotos = graphql(GET_PHOTOS)

// Example:
// https://stackoverflow.com/questions/58057344/how-do-i-use-different-layouts-in-reach-router

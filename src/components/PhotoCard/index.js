import React from 'react'

import { FavButton } from '../FavButton'
import { ImgWrapper, Img, Article } from './styles'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavClick = () => {
                !liked &&
                  toggleLike({
                    variables: {
                      input: { id }
                    }
                  })
                setLiked(!liked)
              }
              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavClick}
                />
              )
            }}
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  )
}

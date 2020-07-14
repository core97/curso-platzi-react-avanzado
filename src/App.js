import React from 'react'

import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCard } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCard />
  </>
)

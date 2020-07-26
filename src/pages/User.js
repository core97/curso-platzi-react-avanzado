import React, { useContext } from 'react'

import { SubmitButton } from '../components/SubmitButton'
import { Context } from '../AuthContext'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h1>Usuario</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  )
}

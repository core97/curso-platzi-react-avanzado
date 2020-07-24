import React from 'react'

import Context from '../AuthContext'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        return (
          <form onSubmit={activateAuth}>
            <button>Iniciar sesion</button>
          </form>
        )
      }}
    </Context.Consumer>
  )
}

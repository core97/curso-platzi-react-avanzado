import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const [show, setShow] = useState(false)
  const element = useRef(null)

  // Carga el componente solo cuando se necesita
  useEffect(() => {
    // comprueba si IntersectionObserver esta disponible en el navegador
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer') // import dinámico
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  return [show, element]
}

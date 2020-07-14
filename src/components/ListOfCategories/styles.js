import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${(props) =>
    props.fixed &&
    css`
       {
        ${fadeIn({ time: '.5s' })}
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        position: fixed;
        right: 0; /* center horizontally */
        left: 0; /* center horizontally */
        margin: 0 auto; /* center horizontally */
        top: -20px;
        z-index: 1;
        max-width: 400px;
        padding: 5px;
        transform: scale(0.5);
      }
    `}
`
export const Item = styled.li`
  padding: 0px 8px;
`

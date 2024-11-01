import React from 'react'

import './styles.css';

function Button({ onClick }) {
  return (
    <button onClick={onClick}>
      Botão
    </button>
  )
}

export default Button

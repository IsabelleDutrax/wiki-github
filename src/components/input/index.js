import React from 'react'

import './styles.css';
// import { } from './styles.js';


function Input({value, onChange}) {
  return (
    <div className='inputContainer'>
      <input type="text" value={value} onChange={onChange} />
    </div>
  )
}

export default Input;

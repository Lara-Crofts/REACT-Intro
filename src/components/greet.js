//type rfc to automatically create file 

import React from 'react'

export default function greet(props) {
  return (
    <div>
      

      <h1> hello {props.name}, your favorite hero is {props.heroname}</h1>
    </div>
  )
}

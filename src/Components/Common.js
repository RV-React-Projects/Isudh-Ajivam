import React from 'react'
import Form from './Form'

function Common({value}) {
  return (
    <div className="Common">
      <Form/>
      <a href="#nothing">{value}</a>
    </div>
  )
}

export default Common

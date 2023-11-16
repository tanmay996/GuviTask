import React from 'react'
import {Link} from 'react-router-dom'
export default function Nopage() {
  return (
    <div>
      <h2 className='text-center'>No Page Found</h2>
      <h3 className='text-center'><Link to='/'>Back to Registration Form</Link></h3>
    </div>
  )
}

import React from 'react'
import MyContext from './MyContext'
import { useContext } from 'react'
const ComponentA = () => {
    const user = useContext(MyContext);
  return (
    <div>
      <h1>{`Hello ${user} Again!`}</h1>
    </div>
  )
}

export default ComponentA

import React from 'react'
import {useParams} from 'react-router-dom'
import Admin from './Admin'
function ShowData() {
    let {   getMyId    }  = useParams()
  return (
    <div>{getMyId=="admin" ? <Admin/>  : "null"}</div>
  )
}

export default ShowData
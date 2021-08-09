import React, { useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState({hits=[]})
  const [query, setQuery] = useState('react')

  useEffect(()=>{
    
  })

  //UI renndering
  return(
  <>
  <input value={query} onChange={e=>setQuery(e.target.value)}/>
    <ul>
      {data.hits.map(item=>(
        <li>
          {item.title}
        </li>
      ))}
    </ul>
  </>  
  )
}
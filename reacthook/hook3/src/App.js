import React, { useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  //data는 hits로 관리하고, hits안에 parsing 대상 데이터가 들어있음
  const [data, setData] = useState({ hits : [] })
  const [query, setQuery] = useState('react')

  useEffect(()=>{
    //이런거 비동기처리 logic 상에서 기본적으로 생각해야할 것들임
    let init = false
    
    async function get() {
      //query문에 대한 link에 대한 get API를 axois를 통해 받을 수 있음
      //그 결과를 result에 저장하고
      const result = await axios(`https://hn.algolia.com/api/v1/search?query=${query}`)
      //초기화 상태(init)가 false(초기화되지않은 상태)라면 위API를 통해 얻은 결과를 상태관리화
      if(!init) setData(result.data) 

    }

    //get함수 실행시 해당 링크에 대한 data를 parsing하여 result로부터 확보가능
    get()

    return () => {
      init = true
    }
  }, [query])

  //UI renndering
  return(
  <>
  {/*입력하는 Query문은 onChange, 즉 enter까지 눌렀을때 상태관리되어 virtual DOM이 바뀐다 */}
  {/*logic : 입력(input을 통해)받고, 입력받은 query에 따라 objectID를 저장하고, 기사들을 출력해냄 */}
  <input value={query} onChange={e => setQuery(e.target.value)} />
    <ul>
      {data.hits.map(item=>(
        <li key={item.objectId}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  </>  
  )
}

export default App
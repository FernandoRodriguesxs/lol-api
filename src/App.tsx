import { useState } from 'react'

export const App = () => {
  const [search, setSearch] = useState('') // estado da pesquisa setado sem valor inicial
  console.log(search)
  return (
    <>
      <div className="box-app">
        <h4>League of Legends App</h4>
        <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
        <button>Search</button>
      </div>
    </>
  )
}

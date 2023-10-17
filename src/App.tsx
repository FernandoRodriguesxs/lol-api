import { useState } from 'react'

// const api = {
//   key: 'RGAPI-bc6c10b4-c3b7-4318-97f0-44b8ffaf054e',
//   base: 'br1.api.riotgames.com',
// }

export const App = () => {
  const [search, setSearch] = useState('') // estado da pesquisa setado sem valor inicial
  console.log(search)

  const pesquisaPlayer = () => {
    fetch(`https://valorant-api.com/v1/agents`)
      .then((res) => res.json())
      .then((result) => {
        setSearch(result) // passando o result para o estado SetSearch
        console.log(setSearch) // Este log deve estar dentro do bloco .then
      })
      .catch((error) => {
        console.error('Ocorreu um erro na solicitação:', error)
      })
  }
  return (
    <>
      <div className="box-app">
        <h4>League of Legends App</h4>
        <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
        <button onClick={pesquisaPlayer}>Search</button>
      </div>
    </>
  )
}

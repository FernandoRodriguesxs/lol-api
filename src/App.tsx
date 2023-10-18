import { useEffect, useState } from 'react'

export const App = () => {
  const [agentsData, setAgentsData] = useState<any[]>([])

  const fetchValorantAgents = async () => {
    try {
      const response = await fetch('https://valorant-api.com/v1/agents')
      const data = await response.json()
      setAgentsData(data.data) // Assume que a resposta tem uma propriedade "data" com a lista de agentes
    } catch (error) {
      console.error('Erro ao buscar agentes:', error)
    }
  }

  useEffect(() => {
    fetchValorantAgents()
  }, [])

  return (
    <div className="box-app">
      <h1>Valorant App</h1>
      <section className="container-agents">
        {agentsData.map((agent) => (
          <ul key={agent.id}>
            <li>
              <img alt="#" src={agent?.displayIcon} />
              <h2>{agent?.displayName} </h2>
              <p>{agent?.description}</p>
            </li>
          </ul>
        ))}
      </section>
    </div>
  )
}

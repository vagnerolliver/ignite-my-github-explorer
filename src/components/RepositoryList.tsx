import { useEffect, useState } from 'react'
import { RepositoryItem } from './RepositoryItem'

import '../assets/styles/repository.scss'

interface Repository {
  name: string,
  description: string,
  html_url: string
}

export function RepositoryList() {
  let [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/vagnerolliver/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  },[])

  return (
    <section  className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  )
}
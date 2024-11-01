import { useState } from 'react';

import logo from './../assets/github.png';
// import { Container } from './styles';
import Input from './../components/input/index';
import Button from '../components/Button/index';
import ItemRepo from '../components/itemRepo';
import { api } from '../services/api';

import './styles.css';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    try {

      const { data } = await api.get(`repos/${currentRepo}`);

      // se encontrou ID do meu repo atual (currentRepo)
      if (data.id) {

        // veridica de o repositorio atual já existe
        const isExist = repos.find(repo => repo.id === data.id);

        if (!isExist) {
          //pega o que já tenho de estado e concateno com o novo estado
          setRepos(prev => [...prev, data]);

          //limpa
          setCurrentRepo('');
          return
        }
        alert('Este repositorio já existe na lista')
      }
    }
    catch (error) {
      console.error('Erro ao buscar o repositório:', error);
      alert('Repositório não encontrado. Verifique o nome e tente novamente.');
    }
  };

  const handleRemoveRepo = (id) => {
    console.log("removendo reistro: ", id)

    //utilizar filter
    setRepos ((prevRepos) => prevRepos.filter(repo => repo.id !== id));
    console.log("lista atualizada: ", repos)

  };

  return (
    <div className="App">
      <img src={logo} width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </div>
  );
}

export default App;


// IsabelleDutrax/Desafio-calculadora
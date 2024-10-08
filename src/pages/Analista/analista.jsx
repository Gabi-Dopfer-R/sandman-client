import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/MenuNavBar.css';

export default function Analista() {
  return (
    <div className='base'>
      <div className='text'>
        <h1>
          Gerenciamento de Analista
        </h1>

        <h4>      
          Bem-vindo à nossa página dedicada à gestão de analistas. 
          Aqui, você tem o controle total para adicionar ou remover 
          novos analistas conforme necessário. 
          Esta página foi projetada para facilitar esse processo. 
          Sinta-se à vontade para realizar as alterações necessárias e 
          garantir que sua equipe esteja sempre atualizada.
        </h4>
      </div>
          
      <div className='list'>
        <Link to="cadastrar">
          <button className='button'>
            Cadastrar Analista
          </button>
        </Link>
        <Link to="atualizar">
          <button className='button'>
            Atualizar Analista
          </button>
        </Link>
        <Link to="deletar">
          <button className='button'>
            Excluir Analista
          </button>
        </Link>
      </div>
    </div>
  );
}
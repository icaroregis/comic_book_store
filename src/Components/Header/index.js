import React from 'react';
import marvel_logo from '../../Assets/marvel_Logo.png';
import '../Header/styles.css';

const Header = () => {
  return (
    <div className='container-header'>
      <img className='imagem-header' src={marvel_logo} alt='Logo MARVEL' />
      <nav>
        <ul>
          <li>
            <a href='index.html'>Minha Conta</a>
          </li>
          <li>
            <a href='produtos.html'>Minhas Listas</a>
          </li>
          <li>
            <a href='produtos.html'>Meus Pedidos</a>
          </li>
          <li>
            <a href='produtos.html'>Central de Atendimento</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

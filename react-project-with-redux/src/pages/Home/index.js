import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

function Home() {
    return (
      <ProductList>
        <li>
          <img 
            src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/26/D12-1407-026/D12-1407-026_detalhe2.jpg?ims=326x" 
            alt="tesnis" 
          />
          <strong>Tênis muito legal</strong>
          <span>R$ 129.90</span>
          <button type="button">
            <div>
                <MdAddShoppingCart size={36} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
        <li>
          <img 
            src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/26/D12-1407-026/D12-1407-026_detalhe2.jpg?ims=326x" 
            alt="tesnis" 
          />
          <strong>Tênis muito legal</strong>
          <span>R$ 129.90</span>
          <button type="button">
            <div>
                <MdAddShoppingCart size={36} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
        <li>
          <img 
            src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/26/D12-1407-026/D12-1407-026_detalhe2.jpg?ims=326x" 
            alt="tesnis" 
          />
          <strong>Tênis muito legal</strong>
          <span>R$ 129.90</span>
          <button type="button">
            <div>
                <MdAddShoppingCart size={36} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
        <li>
          <img 
            src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/26/D12-1407-026/D12-1407-026_detalhe2.jpg?ims=326x" 
            alt="tesnis" 
          />
          <strong>Tênis muito legal</strong>
          <span>R$ 129.90</span>
          <button type="button">
            <div>
                <MdAddShoppingCart size={36} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
        <li>
          <img 
            src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/26/D12-1407-026/D12-1407-026_detalhe2.jpg?ims=326x" 
            alt="tesnis" 
          />
          <strong>Tênis muito legal</strong>
          <span>R$ 129.90</span>
          <button type="button">
            <div>
                <MdAddShoppingCart size={36} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
        <li>
          <img 
            src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/26/D12-1407-026/D12-1407-026_detalhe2.jpg?ims=326x" 
            alt="tesnis" 
          />
          <strong>Tênis muito legal</strong>
          <span>R$ 129.90</span>
          <button type="button">
            <div>
                <MdAddShoppingCart size={36} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      </ProductList>
    );
}


export default Home;


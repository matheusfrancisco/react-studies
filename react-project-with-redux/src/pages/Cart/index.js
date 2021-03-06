import React from 'react';
import { Container, ProductTable, Total } from './syles';

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

function Cart() {
    return (
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th/>
            </tr>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/26/D12-1407-026/D12-1407-026_detalhe2.jpg?ims=326x"
                    alt="Tênis"
                  />

                </td>
                <td>
                  <strong>Tênis muito massa</strong>
                  <span>R$129,90</span>
                </td>
                <td> 
                  <div>
                    <button type="button">
                      <MdRemoveCircleOutline size={20} color="#7159c1"/>
                    </button>
                    <input type="number" readOnly value={1} />
                    <button type="button">
                      <MdAddCircleOutline size={20} color="#7159c1"/>
                    </button>
                  </div>
                </td>
                <td>
                  <strong>R$258,80</strong>
                </td>
                <td>
                  <button type="button">
                    <MdDelete  size={20} color="#7159c1" />
                  </button>
                </td>
              </tr>
            </tbody>

          </thead>

        </ProductTable>
        <footer>
          <button type="button">Finalizar pedido</button>
          <Total>
            <span>TOTAL</span>
            <strong>R$1902,23</strong>
          </Total>
        </footer>
      </Container>
    );
}


export default Cart;


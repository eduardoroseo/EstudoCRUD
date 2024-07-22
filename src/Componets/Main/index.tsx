// import { BTN } from "../Button";
// import { EditIcon } from "../Edit Icon";

import { Buttons } from "../Bottons";

export const Main = () => {
  const Produtos = [
    {
      id: 1,
      Nome: "Para, c ta mal",
      Descricao: "Analgésico e Antipirético",
      Preco: 12.99,
      Estoque: 25,
    },
    {
      id: 2,
      Nome: "seakalm",
      Descricao: "tratamento da ansiedade leve",
      Preco: 15.88,
      Estoque: 12,
    },
  ];

  return (
    <div className="MainDiv">
      <table>
        <tr>
          <th>Produto</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Estoque</th>
          <th>Add | Edit | Del</th>
        </tr>
        <tbody>
          {Produtos.map((Produto) => (
            <tr>
              <td>{Produto.Nome}</td>
              <td>{Produto.Descricao}</td>
              <td>R$ {Produto.Preco}</td>
              <td>{Produto.Estoque}</td>
              <Buttons />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

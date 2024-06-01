import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionTable, TransactionsContainer } from "./styles";

export function Transactions(){
  return(
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionTable>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">
                R$ 12.000,00
              </PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2024</td>
          </tr>
          <tr>
            <td width="50%">Aluguel do apartamento</td>
            <td>
              <PriceHighlight variant="outcome">
                - R$ 1.200,00
              </PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2024</td>
          </tr>
          <tr>
            <td width="50%">Hamburguer</td>
            <td>
              <PriceHighlight variant="outcome">
                - R$ 59,89
              </PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>13/04/2024</td>
          </tr>
        </TransactionTable>
      </TransactionsContainer>
    </div>
  )
}
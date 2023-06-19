import { currencyFormat } from '../../../Helpers/currencyFormat'
import { useCart } from '../../../hooks/useCart'
import { Container } from '../styles'

export function ConfirmOrder() {
  const { cart, confirmOrder } = useCart()

  // acc for accumulation
  // totalAmount = acc dos item.subtotal do cart
  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0)

  return (
    <Container>
      <button type='button' onClick={confirmOrder}>
        Finalizar Pedido
      </button>
      <span>
        Total <strong>{currencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  )
}

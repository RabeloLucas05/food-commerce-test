import { useCart } from '../../hooks/useCart'

import { Container } from './styles'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'

export function MyOrder() {
  // importancia do hooks para poder usar em outros componentes
  const { cart } = useCart()

  return (
    <Container to={'cart'}>
      <span>Meu Pedido</span>
      <CartIcon />

      {/* se não estiver vazio, mostra no botão e o padStart faz começar com 0 */}
      {cart.length !== 0 && <span>{`${cart.length}`.padStart(2, '0')}</span>}
    </Container>
  )
}

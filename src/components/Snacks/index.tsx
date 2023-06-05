import { FiPlus } from 'react-icons/fi'

import { Container } from './styles'
import { currencyFormat } from '../../Helpers/currencyFormat'
import { SkeletonSnack } from './skeletonSnack'
import { useCart } from '../../hooks/useCart'

import { SnackData } from '../../interfaces/SnackData'

// tipagem TypeScript
interface SnacksProps {
  snacks: SnackData[]
}

// O array de objetos que entrará é definido em cada subpágina:  <Snacks snacks={data}></Snacks>, onde data é o array.
export function Snacks({ snacks }: SnacksProps) {
  const { cart, addSnackIntoCart } = useCart()

  return (
    <Container>
      {
        // função map com o componente SkeletonSnack para dar o "loading"
        !snacks.length
          ? [1, 2, 3, 4].map((n) => <SkeletonSnack key={n} />)
          : //  função map com outra arrow function que define oq aparecerá no container (grid)
            snacks.map((snack) => {
              // cria constante que verifica se no carrinho já tem o item
              const snackExistent = cart.find(
                (item) => item.id === snack.id && item.snack === snack.snack,
              )

              return (
                <div key={snack.id} className='snack'>
                  {/* se snackExistent for true, renderiza o span com quantidade */}
                  {snackExistent && <span>{snackExistent.quantity}</span>}

                  <h2>{snack.name}</h2>
                  <img src={snack.image} alt={snack.name} />
                  <p>{snack.description}</p>
                  <div>
                    <strong>{currencyFormat(snack.price)}</strong>
                    <button type='button' onClick={() => addSnackIntoCart(snack)}>
                      <FiPlus />
                    </button>
                  </div>
                </div>
              )
            })
      }
    </Container>
  )
}

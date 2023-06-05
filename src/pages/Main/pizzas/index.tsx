import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitles'
import { Snacks } from '../../../components/Snacks'

import { useSnack } from '../../../hooks/useSnacks'

export default function Pizzas() {
  const { pizzas } = useSnack()

  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}

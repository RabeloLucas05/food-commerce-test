import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitles'
import { Snacks } from '../../../components/Snacks'
;('../../../interfaces/SnackData')

import { useSnack } from '../../../hooks/useSnacks'

export default function Sodas() {
  const { drinks } = useSnack()

  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}

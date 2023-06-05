import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitles'
import { Snacks } from '../../../components/Snacks'
import { useSnack } from '../../../hooks/useSnacks'

export default function Sobremesas() {
  const { iceCreams } = useSnack()
  return (
    <>
      <Head title='Sobremesas' />
      <SnackTitle>Sobremesas</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}

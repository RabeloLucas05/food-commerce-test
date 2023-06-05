import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitles'
import { Snacks } from '../../../components/Snacks'

import { useSnack } from '../../../hooks/useSnacks'

export default function Burgers() {
  // COntext está definido no context/SnackContext.
  // utilização do hook useSnack que já puxa o SnackContext, exporta Snack Provider para o App.tsx e então passa os valores da const burgers para o componente Snacks que vai renderizar tudo com a função map em grid
  const { burgers } = useSnack()

  // define o title da função HEAD e altera o title do navegador
  return (
    <>
      <Head title='Hambúrgueres' description='Nossos melhores burguers' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      {/* burgers definido em const acima */}
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}

import { Head } from '../../../components/Head'
import { Container } from './styles'
import { OrderHeader } from '../../../components/OrderHearder'
import { Table } from './Table'

export default function MyCart() {
  return (
    <Container>
      <Head title='Carrinho' />
      <OrderHeader />
      <Table />
    </Container>
  )
}
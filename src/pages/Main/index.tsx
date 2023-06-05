import { Outlet } from 'react-router-dom'

import { Sidebar } from '../../components/Sidebar'
import { Container } from './styles'

import { MyOrder } from '../../components/MyOrder'

import logoImg from '../../assets/logo.svg'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} />
        {/* indicador de subpáginas (logo abaixo da logo), NavLink utilizado para navegar dentro do Sidebar */}
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  )
}

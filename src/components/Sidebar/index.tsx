import { useState } from 'react'

import { NavLink } from 'react-router-dom'

import { Container } from './styles'

// jeito de importar imagem
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaIcon } from '../../assets/soda.svg'
import { ReactComponent as IcecreamIcon } from '../../assets/ice-cream.svg'

import menuImg from '../../assets/menu.svg'

export function Sidebar() {
  const [menuOpen, SetMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    // faz a inversão do menuOpen "!"
    SetMenuOpen(!menuOpen)
  }

  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={handleToggleMenu}>
        <img src={menuImg} alt='Abrir e fechar o Menu' />
      </button>
      <nav>
        <ul>
          <li>
            {/* como usar o NavLink no lugar do "a", já adiciona a classe "active"
            Não esquecer do <Outlet/> que indica as subpáginas no "Main" */}
            <NavLink to='/'>
              <BurgerIcon />
              <span>Hamburgueres</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/pizzas'>
              <PizzaIcon />
              <span>Pizza</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/drinks'>
              <SodaIcon />
              <span>Bebidas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/ice-creams'>
              <IcecreamIcon />
              <span>Sobremesas</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

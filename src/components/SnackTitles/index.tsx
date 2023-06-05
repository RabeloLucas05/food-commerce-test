import { ReactNode } from 'react'

import { Title } from './styles'

// Necessário definir no Typescript sempre
interface TitleProps {
  children: ReactNode
}

// children é passado na própria subpágina (hambuerguer, pizza..)
// <SnackTitle>Hambúrgueres</SnackTitle> DESSA FORMA
export function SnackTitle({ children }: TitleProps) {
  return <Title>{children}</Title>
}

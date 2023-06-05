// interface necessária definir em TypeScript
interface HeadProps {
  title: string
  description?: string
}

// função para alterar o Title da páginano navegador.
export function Head({ title, description = '' }: HeadProps) {
  document.title = `Food Comerce | ${title}`
  document.querySelector('[name=description]')?.setAttribute('content', description)

  return null
}

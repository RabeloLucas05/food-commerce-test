// função que pega um parâmetro "name" e define cada emoji para cada caso

export function snackEmoji(name: string) {
  switch (name.toLowerCase()) {
    case 'burger':
      return '🍔'
    case 'pizza':
      return '🍕'
    case 'drink':
      return '🍹'
    case 'ice-cream':
      return '🍧'
    default:
      return '🧑‍🦰🔍'
  }
}

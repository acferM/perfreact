# Funções de performance em React

## memo

Usado para evitar que um componente renderize novamente sem haver nenhuma mudança em suas props.

### Casos de uso do memo

1. Pure Functional Components
2. Renderiza muito frequentemente
3. Re-renderiza com as mesmas props
4. Tamanho médio ou grande

### Como utilizar o memo

```tsx
import { memo } from 'react'

function InputComponent({ props }: InputProps) {
  return (
    // ...seu componente
  )
}
//                                        função opcional
export const Input = memo(InputComponent, (prevProps, nextProps) => {
  return // Condição que faz o componente renderizar novamente
})
```

## useMemo

Usado para que uma variável não seja re-calculada/re-alocada sempre que o componente pai renderizar novamente.

### Casos de uso do useMemo

1. Cálculos pesados
2. Igualdade referencial (ao repassar informação a componente filho)

### Como utilizar o useMemo

```tsx
import { useMemo } from 'react'

export function MyComponent({ products }) {
  const totalPrice = useMemo(() => {
    return products.reduce((total, product) => total + product.price)
  }, [products])

  return (
    <h1>{totalPrice}</h1>
  )
}
```

## useCallback

Usado para não recriar a função sempre que o componente pai renderizar.

### Casos de uso do useCallback

1. Funções que não recebem parâmetro e não dependem de informação externa
2. Componentes que recarregam muito frequentemente
3. Funções puras

### Como utilizar o useCallback

```tsx
import { useCallback } from 'react'

export function MyComponent() {
  const myFunction = useCallback(() => {
    // sua função...
  }, [])

  return (
    // seu componente...
  )
}
```
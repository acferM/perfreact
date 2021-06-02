export interface AddProductToWishListProducts {
  onAddToWishList: () => void
  onRequestClose: () => void
}

export function AddProductToWishList({ onAddToWishList, onRequestClose }: AddProductToWishListProducts) {
  return (
    <span>
      Deseja adicionar aos favoritos ?
      <button onClick={onAddToWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  )
}
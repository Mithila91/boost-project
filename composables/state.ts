interface Product {
  id: number
  name: string
  description: string
  image: string
}

interface CartProduct extends Product {
  quantity: number
}

export const useCart = () => {
  const cart = useState<CartProduct[]>('hello', () => [])

  const addToCart = (product: Product) => {
    const currentProduct = cart.value.find((p) => p.id === product.id)
    if (currentProduct) {
      currentProduct.quantity += 1
      // const newCart = cart.value.filter((p) => p.id !== product.id)
      // currentProduct.quantity = +1
      // newCart.push(currentProduct)
    } else {
      const cartProduct: CartProduct = { ...product, quantity: 1 }
      cart.value.push(cartProduct)
    }
  }

  return {
    cart: readonly(cart),
    addToCart,
  }
}

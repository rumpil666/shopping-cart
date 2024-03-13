export interface IBasketProduct {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedPrice: number
  thumbnail: string
}

export interface IBasketState {
  products: IBasketProduct[]
  loading: boolean
  error: string | null
}

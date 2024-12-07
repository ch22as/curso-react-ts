export interface LinkElement {
  name: string,
  url: string
}

export interface User {
  id: string,
  email: string,
  password: string,
  username: string,
  isDeveloper: boolean
}

export interface Product {
  id: string | number,
  name: string,
  price: number
}

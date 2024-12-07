import type { LinkElement, Product, User } from "../types"

const wordsArray = [
  "useEffect",
  "useState",
  "API",
  "npm",
  "node",
  "express",
  "route"
]

const totalTime = 10

export { wordsArray, totalTime }


export const links: LinkElement[]  = [
  // {
  //   name: "Contacto",
  //   url: "/contact"
  // },
  // {
  //   name: "About",
  //   url: "/about"
  // },
  {
    name: "Home",
    url: "/home"
  },
  {
    name: "Users",
    url: "/users"
  },
  {
    name: "Products",
    url: "/products"
  },
  // {
  //   name: "Redirection",
  //   url: "/redirect"
  // },
  {
    name: "Access",
    url: "/access"
  }
]

export const users: User[] = [
  {
    id: "1",
    email: "usuario1@gmail.com",
    isDeveloper: true,
    password: "1234",
    username: "usuario1",
  },
  {
    id: "2",
    email: "usuario2@gmail.com",
    isDeveloper: true,
    password: "1234",
    username: "usuario2",
  },
  {
    id: "3",
    email: "usuario3@gmail.com",
    isDeveloper: true,
    password: "1234",
    username: "usuario3",
  },
  {
    id: "4",
    email: "usuario4@gmail.com",
    isDeveloper: true,
    password: "1234",
    username: "usuario4",
  },
]

export const products: Product[] = [
  {
    id: "1",
    name: "product1",
    price: 10
  },
  {
    id: "2",
    name: "product2",
    price: 20
  },
  {
    id: "3",
    name: "product3",
    price: 30
  },
  {
    id: "4",
    name: "product4",
    price: 40
  },
  {
    id: "5",
    name: "product5",
    price: 50
  },
  {
    id: 6,
    name: "product6",
    price: 60
  },
]

import { Link, Outlet, useSearchParams } from "react-router-dom"
import { products } from "../../assets/constants"
import Eye from "../Users/icons/eye"

const Products = () => {

  const [searchParams] = useSearchParams()
  console.log(searchParams.get('product_id'))
  const productId = searchParams.get('product_id')
  const product  = products.find(prod => prod.id === Number(productId))

  if(!product)
    return (
      <div>
        <h3>products list</h3>
        <ul>
          { products.map((prod) => {
            return (
              <li key={prod.id}>
                { prod.name } { prod.price }
                <Link to={`/products?product_id=${prod.id}`}>
                  <Eye />
                </Link>
              </li>
            )}
          )}
        </ul>
        <Outlet />
      </div>
    )

  return <p>Nombre del producto { product.name }</p>
}

export default Products

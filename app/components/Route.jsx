
import Item from './item/Item'

const fetchProducts = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data =  res.json()    
    return data
}

 async function Route() {
    const products = await fetchProducts()
    return (
      <Item products={products} />
    )
   
}

export default Route
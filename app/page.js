import Image from 'next/image'
import Route from './components/Route'

const fetchProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`)
  const data =  res.json()    
  return data
}


export default async function Home() {
  const products = await fetchProducts()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Route products={products} />
    </main>
  )
}

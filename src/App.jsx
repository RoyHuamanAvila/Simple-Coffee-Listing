import { useEffect, useState } from "react"
import "./App.css"
import { ProductCard } from "./components"

const App = () => {
  const [products, setProducts] = useState([])
  const [view, setView] = useState("all_products")

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error("Error fetching products: ", error)
    }
  }

  const handleView = (e) => {
    setView(e.target.id)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="app">
      <header>
        <img src="/bg-cafe.jpg" alt="" />
      </header>
      <main>
        <img className="vector" src="/vector.svg" alt="vector" />
        <h1 className="title">Our Collection</h1>
        <p className="introduction">
          Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
        </p>
        <div className="view-options">
          <input type="radio" name="view" id="all_products" onClick={handleView} defaultChecked />
          <label htmlFor="all_products">All Products</label>

          <input type="radio" name="view" id="available" onClick={handleView} />
          <label htmlFor="available">Available Now</label>
        </div>

        <section className="product-list">
          {
            view === "all_products" ? products.map((product) => (
              <ProductCard key={product.id} {...product} />
            )) : products.filter((product) => product.available).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          }
        </section>
      </main>
    </div>
  )
}
export default App

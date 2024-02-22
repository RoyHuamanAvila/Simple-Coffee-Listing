import "./App.css"
import { ProductCard } from "./components"

const App = () => {
  return (
    <div className="app">
      <header>
        <img src="/bg-cafe.jpg" alt="" />
      </header>
      <main>
        <h1>Our Collection</h1>
        <p className="introduction">
          Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
        </p>
        <div className="view-options">
          <input type="radio" name="view" id="all_products" checked />
          <label for="all_products">All Products</label>

          <input type="radio" name="view" id="available" />
          <label for="available">Available Now</label>
        </div>

        <section className="product-list">
          <ProductCard />
        </section>
      </main>
    </div>
  )
}
export default App

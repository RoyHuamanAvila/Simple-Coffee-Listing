import './ProductCard.css'

const ProductCardView = () => {
  return (
    <article className="product">
      <div className="product__image">
        <img src="https://th.bing.com/th/id/R.3def92d3517ba909b24fc31de90c8aff?rik=MGaWsnMqRvdfnw&riu=http%3a%2f%2fwww.haushaltstipps.net%2fwp-content%2fuploads%2fcappucino-selber-machen.jpg&ehk=YsqilmUcfWVYnaE5QdXuWpAz4WZRxlrIbh8VMzVRjvo%3d&risl=&pid=ImgRaw&r=0" alt="Cappuccino" />
        <span className="product__image__label">Popular</span>
      </div>
      <div className="product__header">
        <h3 className="product__name">Cappuccino</h3>
        <span className="product__price">$5.20</span>
      </div>
      <div className="product__stats">
        <img src="./public/Star_fill.svg" alt="Star" />
        <p className="">4.7 <span className="votes-count">(65 votes)</span></p>
      </div>
    </article>
  )
}
export default ProductCardView

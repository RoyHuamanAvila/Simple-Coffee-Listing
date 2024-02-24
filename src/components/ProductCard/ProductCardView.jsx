import './ProductCard.css'
import PropTypes from 'prop-types';

const ProductCardView = (props) => {
  return (
    <article className="product" id={props.id}>
      <div className="product__image">
        <img src={props.image} alt={props.name} />
        {
          props.popular && <span className="product__image__label">Popular</span>
        }
      </div>
      <div className="product__header">
        <h3 className="product__name">{props.name}</h3>
        <span className="product__price">{props.price}</span>
      </div>
      <div className="product__stats">
        {
          props.votes > 0 ?
            <>
              <img src="/Star_fill.svg" alt="Star" />
              <p className='product__stats__rating'>{props.rating} <span className="votes-count">({props.votes} votes)</span></p>
            </>
            :
            <>
              <img src="/Star.svg" alt="Star" />
              <p className='no-ratings'>No ratings</p>
            </>
        }
        {
          !props.available && <span className='product__available'>Sold Out</span>
        }
      </div>
    </article>
  )
}

ProductCardView.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.number,
  votes: PropTypes.number,
  popular: PropTypes.bool,
  available: PropTypes.bool
}

export default ProductCardView

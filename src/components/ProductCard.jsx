import React from 'react'
import RatingWidget from './RatingWidget'

const ProductCard = ({product , handleRatingSubmit, yourRatings, setYourRatings}) => {
  return (
    <div>
        <h3>{product.name}</h3>
        <img
        style={{
            width:"250px",
            height:"250px"
        }}
        src={product.image} alt="" />
        <p>{product.description}</p>
        <p>Average Rating : {product.avgRating}</p>
        <RatingWidget 
        handleRatingSubmit={handleRatingSubmit}
        yourRatings={yourRatings}
        setYourRatings={setYourRatings}/>
    </div>
  )
}

export default ProductCard
import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    image: "https://picsum.photos/300/200?random=1",
    avgRating: 4.2,
    totalRatings: 10
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications.",
    image: "https://picsum.photos/300/200?random=2",
    avgRating: 3.8,
    totalRatings: 15
  },
  {
    id: 3,
    name: "Portable Speaker",
    description: "Powerful sound in a compact design.",
    image: "https://picsum.photos/300/200?random=3",
    avgRating: 4.5,
    totalRatings: 8
  }
];

function App() {
  const [products,setProducts] = useState(initialProducts);
  const [yourRatings,setYourRatings] = useState(
    initialProducts.map((ele,index)=>{
      return {
        id:ele.id,
        rating:0
      }
    })
  )
 
  function handleRatingSubmit(id,rate){
    console.log(id,rate)
    const newRating = yourRatings.map((ele)=>{
          return ele.id == id ?{...ele,rating:rate}:ele
    })
    console.log(newRating)
    setYourRatings(newRating);
    localStorage.setItem("ratings-products-stackblitz",JSON.stringify(newRating));
  }

  useEffect(()=>{
    const ratings = JSON.parse(localStorage.getItem("ratings-products-stackblitz"))
    if(!ratings){
      localStorage.setItem("ratings-products-stackblitz",JSON.stringify(yourRatings));
    }else{
      setYourRatings(ratings);
    }
  },[])

  return (
    <div>
     {
      products.map((product,index)=>(
        <ProductCard 
        key={product.id} 
        product={product} 
        handleRatingSubmit={handleRatingSubmit} 
        yourRatings={yourRatings[index]}
        setYourRatings={setYourRatings}
        />
      ))
     }
    </div>
  );
}

export default App;

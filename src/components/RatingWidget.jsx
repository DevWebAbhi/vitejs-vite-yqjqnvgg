import React, { useState } from 'react'

const RatingWidget = ({handleRatingSubmit,yourRatings,setYourRatings}) => {

  return (
    <div>
        {
            new Array(5).fill(0).map((ele,index)=>(
                <button
                style={{
                    background:index<yourRatings.rating?"yellow":"white"
                }}
                onClick={()=>handleRatingSubmit(yourRatings.id,index+1)}
                >R{index+1}</button>
            ))
        }
    </div>
  )
}

export default RatingWidget
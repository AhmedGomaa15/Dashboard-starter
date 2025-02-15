import React from 'react'
import './RightSide.css'
import Updates from '../Updates/Updates'
import CoustomerReview from '../CoustomerReview/CoustomerReview'

const RightSide = () => {
  return (
    <div className='RightSide'>
      <div>
        <h3>Updates</h3>
        <Updates/>
      </div>
      <div>
        <h3>Customer Review</h3>
        <CoustomerReview/>
      </div>
    </div>
  )
}

export default RightSide

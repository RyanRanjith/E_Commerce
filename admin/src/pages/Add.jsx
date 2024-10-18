import React from 'react'
import { assets } from '../assets/assets'

const Add = () => {
  return (
    <form>
      <div className="">
        <p>Uplod Image</p>
        <div className="">
          <label htmlFor="image1">
            <img src={assets.upload_area} alt="" />
            <input type="file" id='image1' hidden />
          </label>
        </div>
      </div>
    </form>
  )
}

export default Add

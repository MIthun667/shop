import React from 'react'
import Products from '../Products/Products'

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/photo/mac.jpg"
          className="card-img"
          alt="Backgroud"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-around">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrival</h5>
            <p className="card-text lead fs-2">
              CHECK OUT ALL TRANDS
            </p>
            <p className="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
      <Products></Products>
    </div>
  )
}

export default Home

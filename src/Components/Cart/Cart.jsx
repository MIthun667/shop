import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const state = useSelector((state) => state.handleButton);

    const dispatch = useDispatch(); 
    const handleButton = (product) =>{
        dispatch(handleButton(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://fakestoreapi.com/products/${product}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);


  return (
  <div>
      <div className="container">
          <div className="row">
              <div className="col-md-4">
                  <img src={product.image} alt={product.title} height= "200px" width="180px" />
              </div>
              <div className="col-md-4">
                  <h3>
                      {product.title}
                  </h3>
                  <p className="lead fw-bolder">
                      {product.qty} X $ {product.price} = $
                      {product.qty * product.price}
                  </p>
                  <button className="btn btn-outline-dark me-4" onClick={()=> handleButton(product)}>
                      <i className="fa fa-minus"></i>
                  </button>
                  <button className="btn btn-outline-dark" onClick={() => handleButton(product)}>
                      <i className="fa fa-plus"></i>
                  </button>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Cart;

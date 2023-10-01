import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft, FaMinus, FaPlus, FaRupeeSign, FaTimes } from "react-icons/fa";

import { CartDrawerContext } from '../../context/CartDrawerContext'
import { useCartStore } from '../../store';

const CartPage = () => {

  const { isCartOpen, toggleCart } = useContext(CartDrawerContext);
  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    if (isCartOpen) toggleCart();
  }, [])

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">{cart.length} items</h6>
                      </div>
                      {!cart.length ? "You do not have any items in cart." : null}
                      {cart && cart.map((item, index) => {
                        return (
                          <div key={index}>
                            <hr className="my-4" />
                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                                  className="img-fluid rounded-3" alt="Cotton T-shirt" />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">{item.product_name}</h6>
                                <h6 className="text-black mb-0">{item.product_category}</h6>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button className="btn btn-link px-2"
                                >
                                  <FaMinus />
                                </button>

                                <input id="form1" min="0" name="quantity" value="1" type="number"
                                  className="form-control form-control-sm" />

                                <button className="btn btn-link px-2">
                                  <FaPlus />
                                </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0">
                                  <FaRupeeSign /> {item.product_price}
                                </h6>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <Link to={"/"} className="text-muted">
                                  <FaTimes />
                                </Link>
                              </div>
                            </div>
                          </div>
                        )
                      })}

                      <hr className="my-4" />

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <Link to={"/"} className="text-body">
                            <FaLongArrowAltLeft />Back to shop
                          </Link>

                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">items {cart.length}</h5>
                        <h5><FaRupeeSign /> 0</h5>
                      </div>

                      <h5 className="text-uppercase mb-3">Shipping</h5>

                      <div className="mb-4 pb-2">
                        <select className="select">
                          <option value="1">Standard-Delivery- €5.00</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                        </select>
                      </div>

                      <h5 className="text-uppercase mb-3">Have Coupon code ?</h5>

                      <div className="mb-5">
                        <div className="form-outline">
                          <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                          <label className="form-label" for="form3Examplea2">Enter your code</label>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5><FaRupeeSign/> 0.00</h5>
                      </div>

                      <button type="button" className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark">Pay Now</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage
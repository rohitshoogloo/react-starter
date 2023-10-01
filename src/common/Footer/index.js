import React, { useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { FaRupeeSign, FaTrashAlt } from "react-icons/fa";
import { DarkThemeContext } from "../../context/DarkThemeContext";

import DrawerMenu from "../Navigation/DrawerMenu";

import { useCartStore } from "../../store";

const Footer = () => {
  const { theme } = useContext(DarkThemeContext);
  const cartItems = useCartStore((state) => state.cart);
  const clearItems = useCartStore((state) => state.emptyCart);

  return (
    <>
      <footer data-bs-theme={theme ? "dark" : null} className={`${theme ? "bg-dark" : null} footer mt-auto py-3 bg-light`}>
        <Container>
          <span className="text-muted">React Playground. &copy; Rohit Choudhary</span>
        </Container>
      </footer>
      {/* Cart Drawer */}
      <DrawerMenu title={"Shopping Cart"}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <p className="mb-0">You have 4 items in your cart</p>
          </div>
        </div>

        {cartItems && cartItems.map((product, index) => {
          return (
            <div key={index} className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                            className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }} />
                        </div>
                        <div className="ms-3">
                          <h5>{product.product_name}</h5>
                          <p className="small mb-0">{product.product_tags.toString()}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{ width: "50px" }}>
                          <h5 className="fw-normal mb-0">1</h5>
                        </div>
                        <div style={{ minWidth: "100px" }}>
                          <h5 className="mb-0"><FaRupeeSign /> {product.product_price}</h5>
                        </div>
                        <a href="#!" style={{ color: "#cecece" }}>
                          <FaTrashAlt />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
          )
        })}
        {cartItems.length ? (
          <div>
            <Button variant="danger" onClick={clearItems}>
              Delete All
            </Button>
          </div>
        ) : null}

      </DrawerMenu>
    </>
  );
};

export default Footer;

import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { DarkThemeContext } from "../../context/DarkThemeContext";
import { CartDrawerContext } from "../../context/CartDrawerContext";
import { useCartStore } from "../../store";

const ProductCard = (product) => {
  const { theme } = useContext(DarkThemeContext);
  const { product_name, product_image, product_description, product_category } =
    product.product;

    const { toggleCart } = useContext(CartDrawerContext);
    const addProduct = useCartStore((state) => state.addToCart);
  return (
    <Card style={{ width: "18rem" }} bg={theme ? "dark" : null} data-bs-theme={theme ? "dark" : null}>
      {product_image ? (
        <Card.Img variant="top" src={product_image} />
      ) : null}
      <Card.Body>
        <Card.Title>{product_name}</Card.Title>
        <Card.Text>{product_description}</Card.Text>
        <Button
          onClick={() => {
            //add product to cart
            addProduct(product.product);
            //toggle cart drawer
            toggleCart();
          }}
        variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

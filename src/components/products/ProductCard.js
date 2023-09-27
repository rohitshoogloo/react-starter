import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { DarkThemeContext } from "../../context/DarkThemeContext";

const ProductCard = (product) => {
  const { theme } = useContext(DarkThemeContext);
  const { product_name, product_image, product_description, product_category } =
    product.product;

  return (
    <Card style={{ width: "18rem" }} bg={theme ? "dark" : null} data-bs-theme={theme ? "dark" : null}>
      {product_image ? (
        <Card.Img variant="top" src={product_image} />
      ) : null}
      <Card.Body>
        <Card.Title>{product_name}</Card.Title>
        <Card.Text>{product_description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

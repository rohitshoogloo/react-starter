import React from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";

import ProductCard from "../../components/products/ProductCard";
import ProductCardSkeleton from "../../components/products/ProductCardSkeleton";

const Home = () => {
  const { isLoading, data, isError, error } = useQuery("products-list", () => {
    return axios.get(`https://api.jsonbin.io/v3/b/6513c3420574da7622b0eed4`, {
      headers: {
        "Content-type": "application/json",
        "X-Master-Key":
          "$2a$10$fV1vGpUxfZ.m2YCzXDNJf.SInBYFSY/JvmJY68imW3YJCxK5iBRl6",
        "X-Access-Key":
          "$2a$10$R.Tf7Cwzuo.d5FLGox7wJOwEPL58GI0d9RtsgFR2zjXmjiXfT4dAW",
      },
    });
  });

  if (isLoading) {
    return (
      <section className="products my-4">
        <Container>
          <Row>
            <Col>
              <ProductCardSkeleton />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  if (isError) return <>{error.message}</>;
  const products = data.data.record || [];

  return (
    <>
      <section className="products my-4">
        <Container>
          <Row>
            <Col>
              <div className="products-list d-flex gap-5 flex-wrap justify-space-evenly">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;

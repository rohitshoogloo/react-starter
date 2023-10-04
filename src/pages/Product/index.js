import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import ProductGallery from '../../components/products/ProductGallery'

const ProductPage = () => {
  return (
    <section id="product">
        <Container>
            <Row>
                <Col md={4}>
                    {/* Product Gallery */}
                    <ProductGallery />
                </Col>
                <Col md={8}>
                    {/* Product Details */}

                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ProductPage
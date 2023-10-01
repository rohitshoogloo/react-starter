import React, { useContext } from 'react'
import { Offcanvas } from 'react-bootstrap'

import { CartDrawerContext } from '../../context/CartDrawerContext'

const DrawerMenu = ({ children, title }) => {
    const { isCartOpen, toggleCart } = useContext(CartDrawerContext);
  return (
    <Offcanvas show={isCartOpen} onHide={toggleCart} backdrop="static" style={{ width: "80vw" }}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {children}
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default DrawerMenu
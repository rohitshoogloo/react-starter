import React, { useEffect } from 'react'

const ProductGallery = () => {

    useEffect(() => {

        const lightbox = document.querySelector(".lightbox");
        const lightboxImg = document.querySelector(".lightbox img");

        const handleMouseMove = (e) => {
            const { left, top, width, height } = e.target.getBoundingClientRect();
            const x = ((e.pageX - left) / width) * 100;
            const y = ((e.pageY - top) / height) * 100;
            const styles = `transform: scale(2); transform-origin: ${x}px ${y}px`;
            lightboxImg.style = styles;
        }
        const handleMouseLeave = () => {
            lightboxImg.style = '';
        }
        lightbox.addEventListener('mousemove', (e) => handleMouseMove(e));
        lightbox.addEventListener('mouseleave', handleMouseLeave);

    }, [])

    return (
        <div className="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
            <div className="row py-3 shadow-5">
                <div className="col-12 mb-1">
                    <div className="lightbox">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
                            alt="Gallery image 1"
                            className="ecommerce-gallery-main-img active w-100"
                        />
                    </div>
                </div>
                <div className="col-3 mt-1">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
                        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
                        alt="Gallery image 1"
                        className="active w-100"
                    />
                </div>
                <div className="col-3 mt-1">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                        alt="Gallery image 2"
                        className="w-100"
                    />
                </div>
                <div className="col-3 mt-1">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                        alt="Gallery image 3"
                        className="w-100"
                    />
                </div>
                <div className="col-3 mt-1">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/15a.webp"
                        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/15a.webp"
                        alt="Gallery image 4"
                        className="w-100"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductGallery
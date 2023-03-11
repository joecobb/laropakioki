import React from 'react'
import Header from '../components/Header'

const GalleryPage = ({ title, images, showOnlyPrice = false }) => {
    return (
        <div>
            <Header />

            <div className="container mb-5">
                <h1 className="mb-5" style={{ marginTop: 50 }}>
                    {title}
                </h1>
                <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-3">
                    {images.map((item) => (
                        <div className="col">
                            <img style={{ width: '100%' }} src={item.image} />
                            {showOnlyPrice ? (
                                <div
                                    style={{ background: '#FFE5B4' }}
                                    className="d-flex justify-content-between align-items-center flex-wrap small p-2 "
                                >
                                    <div>{item.price}</div>
                                </div>
                            ) : (
                                <div
                                    style={{ background: '#FFE5B4' }}
                                    className="d-flex justify-content-between align-items-center flex-wrap small p-2 "
                                >
                                    <div>
                                        <div className="fw-bold">
                                            {item.name}
                                        </div>
                                        <div>
                                            {item.sizes.includes('all sizes')
                                                ? item.sizes
                                                : `Sizes: ${item.sizes}`}
                                        </div>
                                        <div>Code: {item.code}</div>
                                    </div>
                                    <div>{item.price}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GalleryPage

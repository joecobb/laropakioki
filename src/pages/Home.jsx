import React from 'react'
import Header from '../components/Header'
import CasualWear from '../assets/1.jpg'

const Home = () => {
    return (
        <div>
            <Header />
            <div className="mt-4" style={{ background: '#0063B4' }}>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-6 py-4 "
                            style={{ height: '65vh' }}
                        >
                            <div className="text-center h-100">
                                <img className="main-img" src={CasualWear} />
                            </div>
                        </div>
                        <div className="col-md-6  py-5 h-100">
                            <div style={{ marginTop: 100 }} className="h-100 ">
                                <div
                                    className="d-flex justify-content-center
                 flex-column h-100 text-white
                "
                                >
                                    <p
                                        style={{
                                            maxWidth: 250,
                                            fontSize: 35,
                                            color: '#549CD7',
                                        }}
                                    >
                                        10026
                                    </p>
                                    <p style={{ maxWidth: 250, fontSize: 25 }}>
                                        Casual Wear, Free & Comfortable Suitable
                                        for baby bumps
                                    </p>
                                </div>
                            </div>
                            <a className="btn btn-outline-light">View More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 200,
                        marginBottom: 200,
                    }}
                >
                    <h3 className="mb-4">Checkout our social media channels</h3>
                    <a className="text-muted mx-3">
                        <i class="fa-brands fa-3x fa-square-facebook"></i>
                    </a>
                    <a className="text-muted mx-3">
                        <i class="fa-brands fa-3x fa-square-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home

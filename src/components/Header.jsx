import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img style={{ width: 180 }} src={Logo} />
            </div>
            <div className="container">
                <nav className="d-flex flex-wrap justify-content-center ">
                    <Link
                        className={`me-3 ${
                            window.location.pathname === '/' ? 'active' : ''
                        }`}
                        to="/"
                    >
                        HOME
                    </Link>
                    <Link
                        className={`me-3 ${
                            window.location.pathname === '/casual'
                                ? 'active'
                                : ''
                        }`}
                        to="/casual"
                    >
                        CASUAL WEAR
                    </Link>
                    <Link
                        className={`me-3 ${
                            window.location.pathname === '/corporate'
                                ? 'active'
                                : ''
                        }`}
                        to="/corporate"
                    >
                        CORPORATE WEAR
                    </Link>
                    <Link
                        className={`me-3 ${
                            window.location.pathname === '/maternity'
                                ? 'active'
                                : ''
                        }`}
                        to="/maternity"
                    >
                        MATERNITY
                    </Link>
                    <Link
                        className={`me-3 ${
                            window.location.pathname === '/classics'
                                ? 'active'
                                : ''
                        }`}
                        to="/classics"
                    >
                        CLASSICS
                    </Link>
                    <Link
                        className={`me-3 ${
                            window.location.pathname === '/accessories'
                                ? 'active'
                                : ''
                        }`}
                        to="/accessories"
                    >
                        ACCESSORIES
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Header

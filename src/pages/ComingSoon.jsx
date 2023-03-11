import React from 'react'
import Header from '../components/Header'

const ComingSoon = ({ title }) => {
    return (
        <>
            <Header />
            <div className="container mb-5">
                <h1 className="mb-5" style={{ marginTop: 50 }}>
                    {title}
                </h1>
                <div className="text-center" style={{ marginTop: 200 }}>
                    <h2>Coming Soon</h2>
                </div>
            </div>
        </>
    )
}

export default ComingSoon

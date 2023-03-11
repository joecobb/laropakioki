import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GalleryPage from './pages/GalleryPage'
import {
    AccessoriesImages,
    CasualWearImages,
    CorporateWearImages,
    MaternityWearImages,
} from './data/images.js'
import ComingSoon from './pages/ComingSoon'

function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/casual"
                    element={
                        <GalleryPage
                            title="Casual Wear"
                            images={CasualWearImages}
                        />
                    }
                />
                <Route
                    path="/corporate"
                    element={
                        <GalleryPage
                            title="Corporate Wear"
                            images={CorporateWearImages}
                        />
                    }
                />
                <Route
                    path="/maternity"
                    element={
                        <GalleryPage
                            title="Maternity"
                            images={MaternityWearImages}
                        />
                    }
                />
                <Route
                    path="/accessories"
                    element={
                        <GalleryPage
                            title="Accessories"
                            images={AccessoriesImages}
                            showOnlyPrice
                        />
                    }
                />
                <Route
                    path="/classics"
                    element={<ComingSoon title="Classics" />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App

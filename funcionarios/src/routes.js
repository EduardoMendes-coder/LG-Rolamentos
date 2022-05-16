import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Logon = lazy(() => import('./pages/Logon/index'));

const Rout = () => (
    <Router>
        <Suspense fallback={<div></div>}>
            <Routes>
                <Route path="/" element={<Logon/>} />
                <Route path="/Login" element={<Logon/>} />
            </Routes>
        </Suspense>
    </Router>
)

export default Rout;
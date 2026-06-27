import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import PageLoader from './components/ui/PageLoader'

// Code-split inner pages
const About = lazy(() => import('./pages/About'))
const Gold = lazy(() => import('./pages/Gold'))
const Silver = lazy(() => import('./pages/Silver'))
const Diamond = lazy(() => import('./pages/Diamond'))
const Gift = lazy(() => import('./pages/Gift'))
const Chit = lazy(() => import('./pages/Chit'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="gold"
          element={
            <Suspense fallback={<PageLoader />}>
              <Gold />
            </Suspense>
          }
        />
        <Route
          path="silver"
          element={
            <Suspense fallback={<PageLoader />}>
              <Silver />
            </Suspense>
          }
        />
        <Route
          path="diamond"
          element={
            <Suspense fallback={<PageLoader />}>
              <Diamond />
            </Suspense>
          }
        />
        <Route
          path="gift"
          element={
            <Suspense fallback={<PageLoader />}>
              <Gift />
            </Suspense>
          }
        />
        <Route
          path="chit"
          element={
            <Suspense fallback={<PageLoader />}>
              <Chit />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

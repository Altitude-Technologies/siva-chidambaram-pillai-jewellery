import { Outlet } from 'react-router-dom'
import SmoothScroll from '../ui/SmoothScroll'
import Cursor from '../ui/Cursor'
import ScrollProgress from '../ui/ScrollProgress'
import ScrollToTop from '../ui/ScrollToTop'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <SmoothScroll>
      <Cursor />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </SmoothScroll>
  )
}

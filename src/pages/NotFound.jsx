import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import Particles from '../components/ui/Particles'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="notfound dark-bg grain">
      <Particles count={18} />
      <div className="container notfound-inner">
        <span className="eyebrow center">Lost its lustre</span>
        <h1 className="notfound-code gold-text">404</h1>
        <p className="lead">
          This page seems to have slipped out of the vault. Let us guide you back to
          something precious.
        </p>
        <Button to="/" variant="gold">
          Return Home
        </Button>
        <div className="notfound-links">
          <Link to="/gold">Gold</Link>
          <Link to="/diamond">Diamond</Link>
          <Link to="/chit">Gold Scheme</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </section>
  )
}

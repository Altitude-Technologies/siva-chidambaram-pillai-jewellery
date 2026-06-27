import './Marquee.css'

/** Infinite gold marquee strip. items: array of strings. */
export default function Marquee({ items = [], speed = 28, dark = false }) {
  const row = [...items, ...items]
  return (
    <div className={`marquee ${dark ? 'marquee-dark' : ''}`}>
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {row.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <span className="marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

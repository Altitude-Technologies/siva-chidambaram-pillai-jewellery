import SplitText from './SplitText'
import Reveal from './Reveal'
import './SectionHeader.css'

/** Eyebrow label + split-reveal heading + optional intro paragraph. */
export default function SectionHeader({
  label,
  title,
  intro,
  align = 'left',
  light = false,
  className = '',
}) {
  return (
    <div className={`section-header align-${align} ${className}`}>
      {label && (
        <Reveal variant="fade">
          <span className={`eyebrow ${align === 'center' ? 'center' : ''}`}>
            {label}
          </span>
        </Reveal>
      )}
      <SplitText
        text={title}
        as="h2"
        className={`section-header-title display-md ${light ? 'on-light' : ''}`}
      />
      {intro && (
        <Reveal variant="fadeUp" delay={1}>
          <p className="section-header-intro lead">{intro}</p>
        </Reveal>
      )}
    </div>
  )
}

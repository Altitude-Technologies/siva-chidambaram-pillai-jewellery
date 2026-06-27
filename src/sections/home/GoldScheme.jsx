import { useState, useMemo } from 'react'
import { Coins, Sparkles, TrendingUp } from 'lucide-react'
import SplitText from '../../components/ui/SplitText'
import Reveal from '../../components/ui/Reveal'
import Button from '../../components/ui/Button'
import './GoldScheme.css'

const MONTHS = 11
const fmt = (n) => '₹' + Math.round(n).toLocaleString('en-IN')

export default function GoldScheme() {
  const [monthly, setMonthly] = useState(5000)

  const { paid, bonus, total } = useMemo(() => {
    const paid = monthly * MONTHS
    const bonus = monthly // one bonus instalment
    return { paid, bonus, total: paid + bonus }
  }, [monthly])

  return (
    <section className="scheme section dark-bg grain">
      <div className="scheme-coins" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="scheme-coin" style={{ '--c': i }}>
            <Coins size={20} />
          </span>
        ))}
      </div>

      <div className="container scheme-inner">
        <div className="scheme-copy">
          <Reveal variant="fade">
            <span className="eyebrow">AABARANA · Order Thittam</span>
          </Reveal>
          <SplitText
            text="Save Today.|Celebrate Tomorrow."
            as="h2"
            className="scheme-title display-md"
          />
          <Reveal variant="fadeUp" delay={1}>
            <p className="lead scheme-lead">
              Set aside a little each month and let it bloom into gold. Pay for eleven
              months, we add a generous bonus instalment, and you redeem the full value
              for any jewellery at the live rate.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={2} className="scheme-points">
            <span className="scheme-point">
              <Sparkles size={16} /> Bonus instalment on us
            </span>
            <span className="scheme-point">
              <TrendingUp size={16} /> Redeem at live gold rate
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={3}>
            <Button to="/chit" variant="gold">
              Explore AABARANA Scheme
            </Button>
          </Reveal>
        </div>

        <Reveal variant="scaleIn" className="scheme-calc">
          <div className="scheme-calc-glow" />
          <span className="scheme-calc-label">Gold Savings Calculator</span>
          <div className="scheme-amount">
            <span className="scheme-amount-val gold-text">{fmt(monthly)}</span>
            <span className="scheme-amount-sub">monthly for {MONTHS} months</span>
          </div>
          <input
            type="range"
            min="1000"
            max="25000"
            step="500"
            value={monthly}
            onChange={(e) => setMonthly(Number(e.target.value))}
            className="scheme-range"
            aria-label="Monthly amount"
          />
          <div className="scheme-quick">
            {[2000, 5000, 10000, 15000].map((v) => (
              <button
                key={v}
                className={`scheme-chip ${monthly === v ? 'is-active' : ''}`}
                onClick={() => setMonthly(v)}
              >
                {fmt(v)}
              </button>
            ))}
          </div>
          <div className="scheme-rows">
            <div className="scheme-row">
              <span>You pay ({MONTHS} months)</span>
              <strong>{fmt(paid)}</strong>
            </div>
            <div className="scheme-row">
              <span>Our bonus instalment</span>
              <strong className="gold-text">+ {fmt(bonus)}</strong>
            </div>
          </div>
          <div className="scheme-total">
            <span>Maturity Value</span>
            <strong>{fmt(total)}</strong>
          </div>
          <p className="scheme-disclaimer">
            Indicative illustration. Final gold weight is calculated on the live rate at
            maturity.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Safety net: if ANY <img> fails to load (offline, blocked CDN, bad
   URL), swap it for an on-brand maroon→gold gradient instead of the
   browser's broken-image icon. Layout never breaks.
------------------------------------------------------------------- */
const FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='10'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%235A1F24'/%3E%3Cstop offset='0.6' stop-color='%234A171B'/%3E%3Cstop offset='1' stop-color='%23C9A24B'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='8' height='10' fill='url(%23g)'/%3E%3C/svg%3E"

export function installImageFallback() {
  if (typeof window === 'undefined') return
  window.addEventListener(
    'error',
    (e) => {
      const el = e.target
      if (el && el.tagName === 'IMG' && el.dataset.fallback !== '1') {
        el.dataset.fallback = '1'
        el.src = FALLBACK
        el.style.objectFit = 'cover'
      }
    },
    true, // capture phase — img error events don't bubble
  )
}

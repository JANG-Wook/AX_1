import Section from '../Section'

/* ── 사이즈 토큰 ─────────────────────────────────────────────── */
const SIZES = [
  { key: 'xsmall', token: '--gradient-mask-size-xsmall', px: 24,  label: 'XSmall' },
  { key: 'small',  token: '--gradient-mask-size-small',  px: 32,  label: 'Small'  },
  { key: 'medium', token: '--gradient-mask-size-medium', px: 40,  label: 'Medium' },
  { key: 'xlarge', token: '--gradient-mask-size-xlarge', px: 56,  label: 'XLarge' },
  { key: 'large',  token: '--gradient-mask-size-large',  px: 64,  label: 'Large'  },
]

/* ── CSS 전용 사진 느낌 배경 ─────────────────────────────────── */
const PHOTO = {
  blue:   `linear-gradient(135deg, var(--color-primary-normal) 0%, var(--color-label-strong) 100%)`,
  sunset: `linear-gradient(to bottom, var(--color-status-cautionary) 0%, var(--color-status-negative) 55%, var(--color-label-strong) 100%)`,
  green:  `linear-gradient(135deg, var(--color-status-positive) 0%, var(--color-primary-normal) 60%, var(--color-label-strong) 100%)`,
  warm:   `linear-gradient(to bottom right, var(--color-status-cautionary) 0%, var(--color-status-negative) 100%)`,
}

/* ── 마스크 helper ───────────────────────────────────────────── */
function edgeMask(edge, sizeToken) {
  const s = `var(${sizeToken})`
  switch (edge) {
    case 'right':  return `linear-gradient(to right,  black calc(100% - ${s}), transparent 100%)`
    case 'left':   return `linear-gradient(to left,   black calc(100% - ${s}), transparent 100%)`
    case 'bottom': return `linear-gradient(to bottom, black calc(100% - ${s}), transparent 100%)`
    case 'top':    return `linear-gradient(to top,    black calc(100% - ${s}), transparent 100%)`
  }
}

/* ── 섹션 1: 사이즈 카드 ─────────────────────────────────────── */
function SizeCard({ token, label, px }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--spacing-8)' }}>
      {/* 정사각형 그라디언트 — 가로 크기 = 토큰 값 */}
      <div style={{
        width:        `var(${token})`,
        height:       `var(${token})`,
        background:   `linear-gradient(to right, transparent, var(--color-label-strong))`,
        borderRadius: 'var(--spacing-4)',
        flexShrink:   0,
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
        <span style={{
          fontSize:   'var(--font-size-label-2)',
          lineHeight: 'var(--line-height-label-2)',
          fontWeight: 'var(--font-weight-semibold)',
          color:      'var(--color-label-normal)',
        }}>{label}</span>
        <span style={{
          fontSize:   'var(--font-size-caption-2)',
          lineHeight: 'var(--line-height-caption-2)',
          fontWeight: 'var(--font-weight-regular)',
          color:      'var(--color-label-assistive)',
        }}>{px}px</span>
      </div>
    </div>
  )
}

/* ── 섹션 2: 사용 예시 카드 ──────────────────────────────────── */
const SIZE_M = '--gradient-mask-size-medium'

const USAGE_CASES = [
  {
    edge:    'right',
    bg:      'sunset',
    label:   'Right — 가로 스크롤 힌트',
    width:   '280px',
    height:  '120px',
  },
  {
    edge:    'bottom',
    bg:      'blue',
    label:   'Bottom — 컨텐츠 페이드',
    width:   '200px',
    height:  '160px',
  },
  {
    edge:    'left',
    bg:      'green',
    label:   'Left — 왼쪽 스크롤 힌트',
    width:   '280px',
    height:  '120px',
  },
  {
    edge:    'top',
    bg:      'warm',
    label:   'Top — 배너 상단 페이드',
    width:   '200px',
    height:  '160px',
  },
]

function UsageCard({ edge, bg, label, width, height }) {
  const mask = edgeMask(edge, SIZE_M)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-10)' }}>
      <div style={{
        width,
        height,
        background:      PHOTO[bg],
        borderRadius:    'var(--spacing-12)',
        WebkitMaskImage: mask,
        maskImage:       mask,
        flexShrink:      0,
      }} />
      <span style={{
        fontSize:   'var(--font-size-caption-1)',
        lineHeight: 'var(--line-height-caption-1)',
        fontWeight: 'var(--font-weight-regular)',
        color:      'var(--color-label-alternative)',
      }}>{label}</span>
    </div>
  )
}

/* ── 페이지 ──────────────────────────────────────────────────── */
export default function DecorateGradientMaskPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Decorate_Gradient_Mask</h2>

      {/* 섹션 1: 사이즈 종류 */}
      <Section title="사이즈 종류">
        <div style={{
          width:           '100%',
          backgroundColor: 'var(--color-fill-normal)',
          borderRadius:    'var(--spacing-12)',
          padding:         'var(--spacing-32)',
          boxSizing:       'border-box',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', alignItems: 'flex-end' }}>
            {SIZES.map(s => (
              <SizeCard key={s.key} token={s.token} label={s.label} px={s.px} />
            ))}
          </div>
        </div>
      </Section>

    </div>
  )
}

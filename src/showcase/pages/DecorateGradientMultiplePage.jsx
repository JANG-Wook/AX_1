import Section from '../Section'

const DIRECTIONS = [
  { key: 'top',    token: '--gradient-multiple-top',    label: 'Top'    },
  { key: 'right',  token: '--gradient-multiple-right',  label: 'Right'  },
  { key: 'bottom', token: '--gradient-multiple-bottom', label: 'Bottom' },
  { key: 'left',   token: '--gradient-multiple-left',   label: 'Left'   },
]

/* ── 두 레이어 블렌딩 (base + mask 레이어) ───────────────────── */
function BlendBox({ token, baseColor, overlayColor, width = '180px', height = '120px' }) {
  return (
    <div style={{
      position:     'relative',
      width,
      height,
      borderRadius: 'var(--spacing-8)',
      overflow:     'hidden',
      flexShrink:   0,
    }}>
      {/* 베이스 색상 */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: baseColor }} />
      {/* 마스크 적용 오버레이 색상 */}
      <div style={{
        position:              'absolute',
        inset:                 0,
        backgroundColor:       overlayColor,
        WebkitMaskImage:       `var(${token})`,
        maskImage:             `var(${token})`,
        color:                 'var(--color-label-normal)',
      }} />
    </div>
  )
}

/* ── 섹션 1: 방향 종류 ───────────────────────────────────────── */
function DirectionCard({ token, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
      <BlendBox
        token={token}
        baseColor="var(--color-primary-normal)"
        overlayColor="var(--color-label-strong)"
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
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
        }}>var({token})</span>
      </div>
    </div>
  )
}

/* ── 섹션 2: 사용 예시 ───────────────────────────────────────── */
const BLEND_EXAMPLES = [
  {
    label:        'Primary → Negative (Right)',
    token:        '--gradient-multiple-right',
    baseColor:    'var(--color-status-negative)',
    overlayColor: 'var(--color-primary-normal)',
    width:        '320px',
    height:       '80px',
  },
  {
    label:        'Primary → Negative (Bottom)',
    token:        '--gradient-multiple-bottom',
    baseColor:    'var(--color-status-negative)',
    overlayColor: 'var(--color-primary-normal)',
    width:        '160px',
    height:       '160px',
  },
  {
    label:        'Primary → Strong (Right)',
    token:        '--gradient-multiple-right',
    baseColor:    'var(--color-label-strong)',
    overlayColor: 'var(--color-primary-normal)',
    width:        '320px',
    height:       '80px',
  },
  {
    label:        'Primary → Strong (Bottom)',
    token:        '--gradient-multiple-bottom',
    baseColor:    'var(--color-label-strong)',
    overlayColor: 'var(--color-primary-normal)',
    width:        '160px',
    height:       '160px',
  },
]

/* ── 페이지 ──────────────────────────────────────────────────── */
export default function DecorateGradientMultiplePage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Decorate_Gradient_Multiple</h2>

      {/* 섹션 1: 방향 종류 */}
      <Section title="방향 종류">
        <div style={{
          width:           '100%',
          backgroundColor: 'var(--color-fill-normal)',
          borderRadius:    'var(--spacing-12)',
          padding:         'var(--spacing-32)',
          boxSizing:       'border-box',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-32)' }}>
            {DIRECTIONS.map(d => (
              <DirectionCard key={d.key} token={d.token} label={d.label} />
            ))}
          </div>
        </div>
      </Section>

    </div>
  )
}

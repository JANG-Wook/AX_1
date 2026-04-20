import Section from '../Section'

const DIRECTIONS = [
  { key: 'top',    token: '--gradient-solid-top',    label: 'Top'    },
  { key: 'right',  token: '--gradient-solid-right',  label: 'Right'  },
  { key: 'bottom', token: '--gradient-solid-bottom', label: 'Bottom' },
  { key: 'left',   token: '--gradient-solid-left',   label: 'Left'   },
]

/* ── 섹션 1: 방향 미리보기 ───────────────────────────────────── */
function DirectionCard({ token, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
      {/* primary 단일 레이어 + mask → 투명으로 페이드 (Solid 개념) */}
      <div style={{
        width:        '180px',
        height:       '120px',
        borderRadius: 'var(--spacing-8)',
        overflow:     'hidden',
        flexShrink:   0,
        position:     'relative',
      }}>
        <div style={{
          position:              'absolute',
          inset:                 0,
          backgroundColor:       'var(--color-primary-normal)',
          WebkitMaskImage:       `var(${token})`,
          maskImage:             `var(${token})`,
          color:                 'var(--color-label-normal)',
        }} />
      </div>

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
const MOCK_WIDTHS = [100, 82, 94, 68, 88, 76]

const OVERLAY_POS = {
  top:    { top: 0,    left: 0, right: 0,    height: '55%' },
  bottom: { bottom: 0, left: 0, right: 0,    height: '55%' },
  left:   { top: 0,   bottom: 0, left: 0,    width:  '50%' },
  right:  { top: 0,   bottom: 0, right: 0,   width:  '50%' },
}

function UsageCard({ token, label, side }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
      <div style={{
        width:        '200px',
        height:       '140px',
        backgroundColor: 'var(--color-bg-elevated)',
        border:       '1px solid var(--color-line-alternative)',
        borderRadius: 'var(--spacing-8)',
        position:     'relative',
        overflow:     'hidden',
        padding:      'var(--spacing-16)',
        boxSizing:    'border-box',
        flexShrink:   0,
      }}>
        {/* mock 컨텐츠 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
          {MOCK_WIDTHS.map((w, i) => (
            <div key={i} style={{
              height:          '8px',
              width:           `${w}%`,
              backgroundColor: 'var(--color-fill-strong)',
              borderRadius:    'var(--spacing-4)',
            }} />
          ))}
        </div>

        {/* 그라디언트 오버레이 */}
        <div style={{
          position:        'absolute',
          ...OVERLAY_POS[side],
          backgroundImage: `var(${token})`,
          color:           'var(--color-bg-elevated)',
        }} />
      </div>

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
export default function DecorateGradientSolidPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Decorate_Gradient_Solid</h2>

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

import Section from '../Section'

/* ── 비율 종류 ─────────────────────────────────────────────────
   ratio = width : height
   height를 고정하면 width = height × (w / h)
──────────────────────────────────────────────────────────────── */
const RATIOS = [
  { label: '1 : 1', w: 1, h: 1 },
  { label: '3 : 4', w: 3, h: 4 },
  { label: '2 : 3', w: 2, h: 3 },
  { label: '1 : 2', w: 1, h: 2 },
]

/* X 패턴 대각선 — 비율 박스 내부 */
const X_BG = `
  linear-gradient(to top right,
    transparent calc(50% - 0.5px),
    var(--color-line-normal) calc(50% - 0.5px),
    var(--color-line-normal) calc(50% + 0.5px),
    transparent calc(50% + 0.5px)
  ),
  linear-gradient(to bottom right,
    transparent calc(50% - 0.5px),
    var(--color-line-normal) calc(50% - 0.5px),
    var(--color-line-normal) calc(50% + 0.5px),
    transparent calc(50% + 0.5px)
  )
`.replace(/\n\s*/g, ' ')

/* 코드 스타일 뱃지 */
function CodeBadge({ children, accent = false }) {
  return (
    <span style={{
      display:         'inline-flex',
      alignItems:      'center',
      fontSize:        'var(--font-size-caption-2)',
      fontWeight:      'var(--font-weight-semibold)',
      lineHeight:      1,
      color:           accent ? 'var(--color-accent-bg-violet)' : 'var(--color-label-normal)',
      backgroundColor: accent ? 'var(--color-accent-bg-violet)' : 'var(--color-fill-strong)',
      opacity:         accent ? undefined : undefined,
      borderRadius:    'var(--spacing-4)',
      padding:         'var(--spacing-2) var(--spacing-6)',
      whiteSpace:      'nowrap',
      position:        'relative',
    }}>
      {accent && (
        <span style={{
          position:        'absolute',
          inset:           0,
          borderRadius:    'var(--spacing-4)',
          backgroundColor: 'var(--color-accent-bg-violet)',
          opacity:         0.12,
        }} />
      )}
      <span style={{
        position: 'relative',
        color:    accent ? 'var(--color-accent-bg-violet)' : 'var(--color-label-normal)',
      }}>{children}</span>
    </span>
  )
}

/* 비율 박스 */
function RatioBox({ width, height, dimColor = 'var(--color-status-negative)' }) {
  return (
    <div style={{
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      gap:            'var(--spacing-8)',
    }}>
      {/* 박스 본체 */}
      <div style={{
        width:           `${width}px`,
        height:          `${height}px`,
        backgroundColor: 'var(--color-fill-normal)',
        backgroundImage: X_BG,
        borderRadius:    'var(--spacing-4)',
        flexShrink:      0,
        border:          '1px solid var(--color-line-alternative)',
      }} />
      {/* W × H 표시 */}
      <span style={{
        fontSize:      'var(--font-size-caption-2)',
        lineHeight:    'var(--line-height-caption-2)',
        letterSpacing: 'var(--letter-spacing-caption-2)',
        fontWeight:    'var(--font-weight-regular)',
        color:         'var(--color-label-assistive)',
        whiteSpace:    'nowrap',
      }}>{width} × {height}</span>
    </div>
  )
}

/* ── 섹션 1: 비율 종류 ──────────────────────────────────────── */
const FIXED_H = 120

function RatioTypeCard({ ratio }) {
  const w = Math.round(FIXED_H * ratio.w / ratio.h)
  return (
    <div style={{
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      gap:            'var(--spacing-12)',
    }}>
      <RatioBox width={w} height={FIXED_H} />
      <span style={{
        fontSize:   'var(--font-size-caption-1)',
        lineHeight: 'var(--line-height-caption-1)',
        fontWeight: 'var(--font-weight-semibold)',
        color:      'var(--color-label-normal)',
      }}>{ratio.label}</span>
    </div>
  )
}

/* ── 섹션 2: 높이에 따른 크기 변화 ─────────────────────────── */
const HEIGHT_DEMOS = [60, 100, 140]

function HeightDemoCard({ height }) {
  return (
    <div style={{
      display:       'flex',
      flexDirection: 'column',
      alignItems:    'center',
      gap:           'var(--spacing-12)',
    }}>
      <div style={{ position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
        <RatioBox width={height} height={height} />

        {/* 높이 치수선 (우측) */}
        <div style={{
          position:  'absolute',
          top:       0,
          right:     `-var(--spacing-20)`,
          right:     '-28px',
          height:    `${height}px`,
          display:   'flex',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
            <div style={{ width: '6px', height: '1px', backgroundColor: 'var(--color-status-negative)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center', gap: '2px' }}>
              <div style={{ width: '1px', flex: 1, backgroundColor: 'var(--color-status-negative)' }} />
              <span style={{
                fontSize:        '9px',
                fontWeight:      'var(--font-weight-semibold)',
                color:           'var(--color-static-white)',
                backgroundColor: 'var(--color-status-negative)',
                borderRadius:    '100px',
                padding:         '1px 4px',
                whiteSpace:      'nowrap',
                lineHeight:      1,
              }}>{height}</span>
              <div style={{ width: '1px', flex: 1, backgroundColor: 'var(--color-status-negative)' }} />
            </div>
            <div style={{ width: '6px', height: '1px', backgroundColor: 'var(--color-status-negative)' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── 페이지 ──────────────────────────────────────────────────── */
export default function ElementRatioVerticalPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Basic_Ratio_Vertical</h2>

      {/* 섹션 1: 비율 종류 */}
      <Section title="비율 종류">
        <div style={{
          width:           '100%',
          backgroundColor: 'var(--color-fill-normal)',
          borderRadius:    'var(--spacing-12)',
          padding:         'var(--spacing-32)',
          boxSizing:       'border-box',
        }}>
          {/* 헤더: ratio = [prop값들] */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-24)' }}>
            <span style={{
              fontSize:   'var(--font-size-label-2)',
              fontWeight: 'var(--font-weight-semibold)',
              color:      'var(--color-label-strong)',
            }}>ratio =</span>
            {RATIOS.map(r => (
              <CodeBadge key={r.label}>{r.w}/{r.h}</CodeBadge>
            ))}
          </div>

          {/* 비율 박스들 — 동일 height, 다른 width */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--spacing-32)', flexWrap: 'wrap' }}>
            {RATIOS.map(r => (
              <RatioTypeCard key={r.label} ratio={r} />
            ))}
          </div>
        </div>
      </Section>

      {/* 섹션 2: height에 따른 크기 변화 */}
      <Section title="높이에 따른 크기 변화">
        <div style={{
          width:           '100%',
          backgroundColor: 'var(--color-fill-normal)',
          borderRadius:    'var(--spacing-12)',
          padding:         'var(--spacing-32)',
          boxSizing:       'border-box',
        }}>
          {/* 헤더: customize = [height] */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-24)' }}>
            <span style={{
              fontSize:   'var(--font-size-label-2)',
              fontWeight: 'var(--font-weight-semibold)',
              color:      'var(--color-label-strong)',
            }}>customize =</span>
            <CodeBadge accent>height</CodeBadge>
          </div>

          <p style={{
            fontSize:      'var(--font-size-caption-1)',
            lineHeight:    'var(--line-height-caption-1)',
            letterSpacing: 'var(--letter-spacing-caption-1)',
            fontWeight:    'var(--font-weight-regular)',
            color:         'var(--color-label-alternative)',
            marginBottom:  'var(--spacing-24)',
          }}>height가 변하면 width가 자동으로 비율에 맞게 조정됩니다. (ratio 1:1 기준)</p>

          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--spacing-48)', paddingRight: 'var(--spacing-16)' }}>
            {HEIGHT_DEMOS.map(h => (
              <HeightDemoCard key={h} height={h} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}

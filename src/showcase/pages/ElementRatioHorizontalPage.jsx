import Section from '../Section'

/* ── X 패턴 대각선 ───────────────────────────────────────────── */
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

/* ── 코드 뱃지 ───────────────────────────────────────────────── */
function CodeBadge({ children, accent = false }) {
  return (
    <span style={{
      display:      'inline-flex',
      alignItems:   'center',
      fontSize:     'var(--font-size-caption-2)',
      fontWeight:   'var(--font-weight-semibold)',
      lineHeight:   1,
      borderRadius: 'var(--spacing-4)',
      padding:      'var(--spacing-2) var(--spacing-6)',
      whiteSpace:   'nowrap',
      position:     'relative',
    }}>
      <span style={{
        position:        'absolute',
        inset:           0,
        borderRadius:    'var(--spacing-4)',
        backgroundColor: accent ? 'var(--color-accent-bg-violet)' : 'var(--color-fill-strong)',
        opacity:         accent ? 0.12 : 1,
      }} />
      <span style={{
        position: 'relative',
        color:    accent ? 'var(--color-accent-bg-violet)' : 'var(--color-label-normal)',
      }}>{children}</span>
    </span>
  )
}

/* ── 비율 박스 (시각적 박스만) ───────────────────────────────── */
function RatioBoxFrame({ width, height }) {
  return (
    <div style={{
      width:           `${width}px`,
      height:          `${height}px`,
      backgroundColor: 'var(--color-fill-normal)',
      backgroundImage: X_BG,
      borderRadius:    'var(--spacing-4)',
      border:          '1px solid var(--color-line-alternative)',
      flexShrink:      0,
    }} />
  )
}

/* ── 비율 박스 + W×H 레이블 ─────────────────────────────────── */
function RatioBox({ width, height }) {
  return (
    <div style={{
      display:       'flex',
      flexDirection: 'column',
      alignItems:    'center',
      gap:           'var(--spacing-8)',
    }}>
      <RatioBoxFrame width={width} height={height} />
      <span style={{
        fontSize:      'var(--font-size-caption-2)',
        lineHeight:    'var(--line-height-caption-2)',
        letterSpacing: 'var(--letter-spacing-caption-2)',
        fontWeight:    'var(--font-weight-regular)',
        color:         'var(--color-label-assistive)',
        whiteSpace:    'nowrap',
      }}>{width} × {Math.round(height)}</span>
    </div>
  )
}

/* ── 비율 데이터 ─────────────────────────────────────────────── */
const FIXED_W = 100

const RATIO_BASE = { badge: '1/1', w: 1, h: 1 }

const LANDSCAPE = [
  { badge: '5/4',    w: 5,    h: 4    },
  { badge: '4/3',    w: 4,    h: 3    },
  { badge: '3/2',    w: 3,    h: 2    },
  { badge: '16/10',  w: 16,   h: 10   },
  { badge: '1.618/1',w: 1.618,h: 1    },
  { badge: '16/9',   w: 16,   h: 9    },
  { badge: '2/1',    w: 2,    h: 1    },
  { badge: '21/9',   w: 21,   h: 9    },
]

const PORTRAIT = [
  { badge: '4/5',    w: 4,    h: 5    },
  { badge: '3/4',    w: 3,    h: 4    },
  { badge: '2/3',    w: 2,    h: 3    },
  { badge: '10/16',  w: 10,   h: 16   },
  { badge: '1/1.618',w: 1,    h: 1.618},
  { badge: '9/16',   w: 9,    h: 16   },
  { badge: '1/2',    w: 1,    h: 2    },
  { badge: '9/21',   w: 9,    h: 21   },
]

const rh = ({ w, h }) => FIXED_W * h / w

/* ── 섹션 2: 너비에 따른 크기 변화 ─────────────────────────── */
const WIDTH_DEMOS = [60, 100, 140]

function WidthDemoCard({ width }) {
  return (
    <div style={{
      display:       'flex',
      flexDirection: 'column',
      alignItems:    'center',
      gap:           'var(--spacing-12)',
    }}>
      <div style={{ position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <RatioBoxFrame width={width} height={width} />

        {/* 너비 치수선 (하단) */}
        <div style={{
          position:   'absolute',
          top:        '100%',
          left:       0,
          width:      `${width}px`,
          marginTop:  '4px',
          display:    'flex',
          alignItems: 'center',
        }}>
          <div style={{ width: '1px', height: '6px', backgroundColor: 'var(--color-status-negative)', flexShrink: 0 }} />
          <div style={{ display: 'flex', alignItems: 'center', flex: 1, gap: '2px' }}>
            <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--color-status-negative)' }} />
            <span style={{
              fontSize:        '9px',
              fontWeight:      'var(--font-weight-semibold)',
              color:           'var(--color-static-white)',
              backgroundColor: 'var(--color-status-negative)',
              borderRadius:    '100px',
              padding:         '1px 4px',
              whiteSpace:      'nowrap',
              lineHeight:      1,
            }}>{width}</span>
            <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--color-status-negative)' }} />
          </div>
          <div style={{ width: '1px', height: '6px', backgroundColor: 'var(--color-status-negative)', flexShrink: 0 }} />
        </div>
      </div>
    </div>
  )
}

/* ── 페이지 ──────────────────────────────────────────────────── */
export default function ElementRatioHorizontalPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Basic_Ratio_Horizontal</h2>

      {/* 섹션 1: 비율 종류 */}
      <Section title="비율 종류">
        <div style={{
          width:           '100%',
          backgroundColor: 'var(--color-fill-normal)',
          borderRadius:    'var(--spacing-12)',
          padding:         'var(--spacing-32)',
          boxSizing:       'border-box',
        }}>
          {/* 헤더: ratio = [뱃지 3줄] */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-24)' }}>
            <span style={{
              fontSize:   'var(--font-size-label-2)',
              fontWeight: 'var(--font-weight-semibold)',
              color:      'var(--color-label-strong)',
              marginTop:  '1px',
            }}>ratio =</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
              {/* 1행: 1/1 */}
              <div style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
                <CodeBadge>{RATIO_BASE.badge}</CodeBadge>
              </div>
              {/* 2행: 가로형 */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-6)' }}>
                {LANDSCAPE.map(r => <CodeBadge key={r.badge}>{r.badge}</CodeBadge>)}
              </div>
              {/* 3행: 세로형 */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-6)' }}>
                {PORTRAIT.map(r => <CodeBadge key={r.badge}>{r.badge}</CodeBadge>)}
              </div>
            </div>
          </div>

          {/* 컨텐츠: 비율 박스 3행 */}
          <div style={{
            backgroundColor: 'var(--color-fill-alternative)',
            borderRadius:    'var(--spacing-12)',
            padding:         'var(--spacing-24)',
            display:         'flex',
            flexDirection:   'column',
            gap:             'var(--spacing-24)',
          }}>
            {/* 1:1 단독 */}
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <RatioBox width={FIXED_W} height={rh(RATIO_BASE)} />
            </div>

            {/* 가로형 (height < width) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 'var(--spacing-24)' }}>
              {LANDSCAPE.map(r => (
                <RatioBox key={r.badge} width={FIXED_W} height={rh(r)} />
              ))}
            </div>

            {/* 세로형 (height > width) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 'var(--spacing-24)' }}>
              {PORTRAIT.map(r => (
                <RatioBox key={r.badge} width={FIXED_W} height={rh(r)} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 섹션 2: 너비에 따른 크기 변화 */}
      <Section title="너비에 따른 크기 변화">
        <div style={{
          width:           '100%',
          backgroundColor: 'var(--color-fill-normal)',
          borderRadius:    'var(--spacing-12)',
          padding:         'var(--spacing-32)',
          boxSizing:       'border-box',
        }}>
          {/* 헤더: customize = [width] */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-24)' }}>
            <span style={{
              fontSize:   'var(--font-size-label-2)',
              fontWeight: 'var(--font-weight-semibold)',
              color:      'var(--color-label-strong)',
            }}>customize =</span>
            <CodeBadge accent>width</CodeBadge>
          </div>

          <p style={{
            fontSize:      'var(--font-size-caption-1)',
            lineHeight:    'var(--line-height-caption-1)',
            letterSpacing: 'var(--letter-spacing-caption-1)',
            fontWeight:    'var(--font-weight-regular)',
            color:         'var(--color-label-alternative)',
            marginBottom:  'var(--spacing-24)',
          }}>width가 변하면 height가 자동으로 비율에 맞게 조정됩니다. (ratio 1:1 기준)</p>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-48)', paddingBottom: 'var(--spacing-16)' }}>
            {WIDTH_DEMOS.map(w => (
              <WidthDemoCard key={w} width={w} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}

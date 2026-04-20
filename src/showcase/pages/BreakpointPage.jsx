import Section from '../Section'

const BREAKPOINTS = [
  {
    name:        'xs',
    token:       '--breakpoint-xs',
    range:       '0 ~ 767px',
    minPx:       0,
    maxPx:       767,
    viewportW:   360,
    containerW:  null,
    label:       '모바일',
    description: '768px 미만 너비까지는 브레이크포인트 명칭으로 xs를 사용합니다. 모바일 환경을 고려합니다.',
  },
  {
    name:        'sm',
    token:       '--breakpoint-sm',
    range:       '768 ~ 991px',
    minPx:       768,
    maxPx:       991,
    viewportW:   768,
    containerW:  null,
    label:       '태블릿 세로',
    description: '768px부터 991px 미만 너비까지는 브레이크포인트 명칭으로 sm을 사용합니다. 태블릿 세로 환경 대응이 필요한 경우에 고려합니다.',
  },
  {
    name:        'md',
    token:       '--breakpoint-md',
    range:       '992 ~ 1199px',
    minPx:       992,
    maxPx:       1199,
    viewportW:   992,
    containerW:  null,
    label:       '태블릿 가로',
    description: '992px부터 1200px 미만 너비까지는 브레이크포인트 명칭으로 md를 사용합니다. 태블릿 가로 환경 대응이 필요한 경우에 고려합니다.',
  },
  {
    name:        'lg',
    token:       '--breakpoint-lg',
    range:       '1200 ~ 1599px',
    minPx:       1200,
    maxPx:       1599,
    viewportW:   1200,
    containerW:  1100,
    label:       '데스크톱',
    description: '1200px 이상 너비부터는 브레이크포인트 명칭으로 lg를 사용합니다. 데스크톱 환경을 고려합니다.',
  },
  {
    name:        'xl',
    token:       '--breakpoint-xl',
    range:       '1600px+',
    minPx:       1600,
    maxPx:       null,
    viewportW:   1600,
    containerW:  1440,
    label:       '와이드 데스크톱',
    description: '1600px 이상 너비를 고려할 때 브레이크포인트 명칭으로 xl을 사용합니다. 데스크톱 환경을 고려합니다.',
  },
]

const TOTAL = 1600
const BAR_WIDTH = 600

function BreakpointRuler() {
  const segments = BREAKPOINTS.map((bp, i) => {
    const next = BREAKPOINTS[i + 1]
    const end  = next ? next.minPx : TOTAL
    const width = ((end - bp.minPx) / TOTAL) * BAR_WIDTH
    return { ...bp, width }
  })

  const colors = [
    'var(--color-accent-bg-cyan)',
    'var(--color-accent-bg-lime)',
    'var(--color-accent-bg-light-blue)',
    'var(--color-accent-bg-violet)',
    'var(--color-accent-bg-purple)',
  ]
  const fgColors = [
    'var(--color-accent-fg-cyan)',
    'var(--color-accent-fg-lime)',
    'var(--color-accent-fg-light-blue)',
    'var(--color-accent-fg-violet)',
    'var(--color-accent-fg-purple)',
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
      {/* 색상 바 */}
      <div style={{ display: 'flex', borderRadius: 'var(--spacing-4)', overflow: 'hidden' }}>
        {segments.map((seg, i) => (
          <div
            key={seg.name}
            style={{
              width:           `${seg.width}px`,
              height:          'var(--spacing-24)',
              backgroundColor: colors[i],
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
            }}
          >
            <span style={{
              fontSize:      'var(--font-size-caption-2)',
              fontWeight:    'var(--font-weight-semibold)',
              color:         fgColors[i],
              letterSpacing: 'var(--letter-spacing-caption-2)',
            }}>{seg.name}</span>
          </div>
        ))}
      </div>

      {/* 눈금 레이블 */}
      <div style={{ position: 'relative', width: `${BAR_WIDTH}px`, height: 'var(--spacing-16)' }}>
        {BREAKPOINTS.map((bp, i) => {
          const leftPx = (bp.minPx / TOTAL) * BAR_WIDTH
          const isLast = i === BREAKPOINTS.length - 1
          return (
            <span key={bp.name} style={{
              position:      'absolute',
              left:          `${leftPx}px`,
              transform:     i === 0 ? 'none' : isLast ? 'translateX(-100%)' : 'translateX(-50%)',
              fontSize:      'var(--font-size-caption-2)',
              lineHeight:    'var(--line-height-caption-2)',
              letterSpacing: 'var(--letter-spacing-caption-2)',
              color:         'var(--color-label-assistive)',
              whiteSpace:    'nowrap',
            }}>
              {i === 0 ? '0' : isLast ? '1600px+' : `${bp.minPx}px`}
            </span>
          )
        })}
      </div>
    </div>
  )
}

/* 브레이크포인트 카드 */
function BreakpointCard({ bp, scale = 0.25 }) {
  const displayW = Math.round(bp.viewportW * scale)
  const displayH = Math.round(160)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
      {/* 뷰포트 프레임 */}
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <div style={{
          width:           `${displayW}px`,
          height:          `${displayH}px`,
          backgroundColor: 'var(--color-bg-elevated)',
          border:          '1px solid var(--color-line-neutral)',
          borderRadius:    'var(--spacing-4)',
          overflow:        'hidden',
          position:        'relative',
        }}>
          {/* GNB 영역 */}
          <div style={{
            position:        'absolute',
            top:             0,
            left:            0,
            right:           0,
            height:          `${Math.round(56 * scale)}px`,
            backgroundColor: 'var(--color-bg-elevated)',
            borderBottom:    '1px solid var(--color-line-alternative)',
          }} />

          {/* 컨테이너 영역 (lg, xl만 표시) */}
          {bp.containerW && (
            <div style={{
              position:        'absolute',
              top:             `${Math.round(56 * scale)}px`,
              left:            '50%',
              transform:       'translateX(-50%)',
              width:           `${Math.round(bp.containerW * scale)}px`,
              bottom:          0,
              backgroundColor: 'var(--color-fill-normal)',
              opacity:         0.5,
            }} />
          )}
        </div>

        {/* 가로 치수 */}
        <div style={{
          marginTop:  'var(--spacing-8)',
          display:    'flex',
          alignItems: 'center',
          gap:        'var(--spacing-4)',
          width:      `${displayW}px`,
        }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-status-negative)' }} />
          <span style={{
            fontSize:        'var(--font-size-caption-2)',
            fontWeight:      'var(--font-weight-semibold)',
            color:           'var(--color-static-white)',
            backgroundColor: 'var(--color-status-negative)',
            borderRadius:    'var(--spacing-20)',
            padding:         'var(--spacing-2) var(--spacing-8)',
            whiteSpace:      'nowrap',
          }}>{bp.viewportW}px</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-status-negative)' }} />
        </div>
      </div>

      {/* 텍스트 정보 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
          <span style={{
            fontSize:        'var(--font-size-label-1-normal)',
            lineHeight:      'var(--line-height-label-1-normal)',
            fontWeight:      'var(--font-weight-bold)',
            color:           'var(--color-label-normal)',
          }}>{bp.name}</span>
          <span style={{
            fontSize:      'var(--font-size-caption-1)',
            lineHeight:    'var(--line-height-caption-1)',
            letterSpacing: 'var(--letter-spacing-caption-1)',
            fontWeight:    'var(--font-weight-regular)',
            color:         'var(--color-label-assistive)',
          }}>{bp.range}</span>
        </div>
        <p style={{
          fontSize:      'var(--font-size-caption-1)',
          lineHeight:    'var(--line-height-caption-1)',
          letterSpacing: 'var(--letter-spacing-caption-1)',
          fontWeight:    'var(--font-weight-regular)',
          color:         'var(--color-label-alternative)',
          maxWidth:      `${displayW + 40}px`,
        }}>{bp.description}</p>
        <p style={{
          fontSize:      'var(--font-size-caption-2)',
          lineHeight:    'var(--line-height-caption-2)',
          letterSpacing: 'var(--letter-spacing-caption-2)',
          fontWeight:    'var(--font-weight-regular)',
          color:         'var(--color-label-disable)',
        }}>{bp.token}</p>
      </div>
    </div>
  )
}

export default function BreakpointPage() {
  return (
    <div>
      <h2 style={{
        fontSize:      'var(--font-size-title-3)',
        lineHeight:    'var(--line-height-title-3)',
        fontWeight:    'var(--font-weight-bold)',
        color:         'var(--color-label-normal)',
        marginBottom:  'var(--spacing-32)',
      }}>Breakpoint</h2>

      <Section title="범위 요약">
        <BreakpointRuler />
      </Section>

      <Section title="상세" gap="var(--spacing-48)">
        {BREAKPOINTS.map(bp => (
          <BreakpointCard key={bp.name} bp={bp} scale={0.25} />
        ))}
      </Section>
    </div>
  )
}

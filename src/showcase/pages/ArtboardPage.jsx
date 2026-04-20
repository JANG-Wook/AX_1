import Section from '../Section'

const labelStyle = {
  fontSize:      'var(--font-size-caption-1)',
  lineHeight:    'var(--line-height-caption-1)',
  letterSpacing: 'var(--letter-spacing-caption-1)',
  fontWeight:    'var(--font-weight-regular)',
  color:         'var(--color-label-alternative)',
}

const dimStyle = {
  fontSize:      'var(--font-size-caption-1)',
  lineHeight:    'var(--line-height-caption-1)',
  letterSpacing: 'var(--letter-spacing-caption-1)',
  fontWeight:    'var(--font-weight-regular)',
  color:         'var(--color-label-alternative)',
  marginTop:     'var(--spacing-4)',
  whiteSpace:    'pre-line',
}

const DIM_COLOR = 'var(--color-status-negative)'

/* 치수 라인 컴포넌트 — position:absolute 기반 */
function DimLine({ value, direction = 'horizontal', length }) {
  const isH = direction === 'horizontal'

  return (
    <div style={{
      position: 'relative',
      width:    isH ? `${length}px` : '1px',
      height:   isH ? '1px' : `${length}px`,
      flexShrink: 0,
    }}>
      {/* 메인 선 */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: DIM_COLOR }} />

      {/* 시작 끝 선 */}
      <div style={{
        position:        'absolute',
        [isH ? 'left' : 'top']: 0,
        [isH ? 'top' : 'left']: '50%',
        transform:       isH ? 'translate(0, -50%)' : 'translate(-50%, 0)',
        width:           isH ? '1px' : '8px',
        height:          isH ? '8px' : '1px',
        backgroundColor: DIM_COLOR,
      }} />

      {/* 끝 끝 선 */}
      <div style={{
        position:        'absolute',
        [isH ? 'right' : 'bottom']: 0,
        [isH ? 'top' : 'left']: '50%',
        transform:       isH ? 'translate(0, -50%)' : 'translate(-50%, 0)',
        width:           isH ? '1px' : '8px',
        height:          isH ? '8px' : '1px',
        backgroundColor: DIM_COLOR,
      }} />

      {/* 수치 뱃지 */}
      <div style={{
        position:        'absolute',
        left:            '50%',
        top:             '50%',
        transform:       'translate(-50%, -50%)',
        fontSize:        'var(--font-size-caption-2)',
        lineHeight:      'var(--line-height-caption-2)',
        fontWeight:      'var(--font-weight-semibold)',
        color:           'var(--color-static-white)',
        backgroundColor: DIM_COLOR,
        borderRadius:    'var(--spacing-20)',
        padding:         'var(--spacing-2) var(--spacing-8)',
        whiteSpace:      'nowrap',
        zIndex:          1,
      }}>{value}</div>
    </div>
  )
}

/* 아트보드 프레임 */
function Artboard({ width, height, label, description, scale = 1, unit = 'px' }) {
  const displayW = Math.round(width * scale)
  const displayH = Math.round(height * scale)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
      <p style={{
        fontSize:   'var(--font-size-label-2)',
        lineHeight: 'var(--line-height-label-2)',
        fontWeight: 'var(--font-weight-semibold)',
        color:      'var(--color-label-normal)',
      }}>{label}</p>

      {/* 프레임 + 치수 라인 */}
      <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
        <div style={{ display: 'flex', gap: 'var(--spacing-8)', alignItems: 'flex-start' }}>
          {/* 프레임 */}
          <div style={{
            width:           `${displayW}px`,
            height:          `${displayH}px`,
            backgroundColor: 'var(--color-bg-elevated)',
            border:          '1px solid var(--color-line-neutral)',
            borderRadius:    'var(--spacing-8)',
            flexShrink:      0,
          }} />
          {/* 세로 치수 */}
          <DimLine value={`${height}${unit}`} direction="vertical" length={displayH} />
        </div>
        {/* 가로 치수 */}
        <DimLine value={`${width}${unit}`} direction="horizontal" length={displayW} />
      </div>

      {description && <p style={dimStyle}>{description}</p>}
    </div>
  )
}

export default function ArtboardPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Artboard</h2>

      <Section title="Web Desktop">
        <Artboard
          label="Web Desktop"
          width={1440}
          height={960}
          scale={0.375}
          description="일반적인 브라우저 해상도인 1440×960px를 기준으로 합니다."
        />
      </Section>

      <Section title="Mobile" gap="var(--spacing-48)">
        <Artboard
          label="Web Mobile"
          width={375}
          height={635}
          scale={0.4}
          description="iPhone X Safari에서 표시되는 영역 크기인 375×635px를 기준으로 합니다."
        />
        <Artboard
          label="iOS"
          width={375}
          height={812}
          scale={0.4}
          unit="pt"
          description={`iPhone X 환경 해상도인 375×812pt를 기준으로 합니다.\n가능하다면 최소 해상도인 375×667pt를 고려하세요.`}
        />
        <Artboard
          label="Android"
          width={360}
          height={800}
          scale={0.4}
          unit="dp"
          description={`Pixel 8 환경 해상도인 360×800dp를 기준으로 합니다.\n가능하다면 최소 해상도인 360×640dp를 고려하세요.`}
        />
      </Section>
    </div>
  )
}

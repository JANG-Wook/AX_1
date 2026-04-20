import Section from '../Section'

/* ── 치수 뱃지 ──────────────────────────────────────────────── */
function Measure({ value }) {
  return (
    <span style={{
      display:         'inline-flex',
      alignItems:      'center',
      justifyContent:  'center',
      fontSize:        '10px',
      fontWeight:      'var(--font-weight-semibold)',
      lineHeight:      1,
      color:           'var(--color-static-white)',
      backgroundColor: 'var(--color-status-negative)',
      borderRadius:    '100px',
      padding:         '2px 6px',
      whiteSpace:      'nowrap',
      flexShrink:      0,
      zIndex:          4,
    }}>{value}</span>
  )
}

/* ── 가로 치수선 ─────────────────────────────────────────────── */
function HorizDimLine({ value, x, width, centerY, scale }) {
  const S = v => v * scale
  const TICK = 8

  return (
    <div style={{
      position:  'absolute',
      top:       S(centerY),
      left:      S(x),
      width:     S(width),
      transform: 'translateY(-50%)',
      display:   'flex',
      alignItems: 'center',
      zIndex:    3,
      pointerEvents: 'none',
    }}>
      <div style={{ width: '1px', height: TICK, backgroundColor: 'var(--color-status-negative)', flexShrink: 0 }} />
      <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-status-negative)' }} />
      <Measure value={value} />
      <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-status-negative)' }} />
      <div style={{ width: '1px', height: TICK, backgroundColor: 'var(--color-status-negative)', flexShrink: 0 }} />
    </div>
  )
}

/* ── Max-width 화면 ─────────────────────────────────────────── */
function MaxWidthScreen({ viewportW, viewportH, gnbH, outerMargin, colMargin, scale }) {
  const containerW = viewportW - outerMargin * 2
  const contentW   = containerW - colMargin * 2
  const S          = v => v * scale
  const cH         = viewportH - gnbH
  const halfH      = cH / 2

  return (
    <div style={{ position: 'relative', flexShrink: 0, width: S(viewportW), height: S(viewportH) }}>

      {/* 뷰포트 프레임 — overflow:hidden 으로 GNB·배경 클리핑 */}
      <div style={{
        position:        'absolute',
        inset:           0,
        backgroundColor: 'var(--color-bg-elevated)',
        border:          '1px solid var(--color-line-neutral)',
        borderRadius:    'var(--spacing-4)',
        overflow:        'hidden',
      }}>
        {/* GNB */}
        <div style={{ height: S(gnbH), borderBottom: '1px solid var(--color-line-alternative)' }} />

        {/* 컨텐츠 배경 (분홍) — colMargin 안쪽 */}
        <div style={{
          position:        'absolute',
          top:             S(gnbH),
          bottom:          0,
          left:            S(outerMargin + colMargin),
          width:           S(contentW),
          backgroundColor: 'var(--color-status-negative)',
          opacity:         0.12,
        }} />

        {/* 컨테이너 좌우 경계선 */}
        <div style={{
          position:        'absolute',
          top:             S(gnbH),
          bottom:          0,
          left:            S(outerMargin),
          width:           '1px',
          backgroundColor: 'var(--color-line-normal)',
        }} />
        <div style={{
          position:        'absolute',
          top:             S(gnbH),
          bottom:          0,
          right:           S(outerMargin),
          width:           '1px',
          backgroundColor: 'var(--color-line-normal)',
        }} />
      </div>

      {/* ── 치수선 · 뱃지 (overflow:hidden 바깥) ── */}

      {/* 상단 절반 중앙: 컨테이너 전체 너비 */}
      <HorizDimLine
        value={containerW}
        x={outerMargin}
        width={containerW}
        centerY={gnbH + halfH / 2}
        scale={scale}
      />

      {/* 하단 절반 중앙: 콘텐츠 너비 */}
      <HorizDimLine
        value={contentW}
        x={outerMargin + colMargin}
        width={contentW}
        centerY={gnbH + halfH + halfH / 2}
        scale={scale}
      />

      {/* 수직 중앙 기준 좌우 padding 뱃지 */}
      <div style={{
        position:  'absolute',
        top:       S(gnbH + halfH),
        transform: 'translateY(-50%)',
        left:      S(outerMargin),
        width:     S(colMargin),
        display:   'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:    3,
        pointerEvents: 'none',
      }}>
        <Measure value={colMargin} />
      </div>
      <div style={{
        position:  'absolute',
        top:       S(gnbH + halfH),
        transform: 'translateY(-50%)',
        right:     S(outerMargin),
        width:     S(colMargin),
        display:   'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:    3,
        pointerEvents: 'none',
      }}>
        <Measure value={colMargin} />
      </div>
    </div>
  )
}

/* ── 프리뷰 컨테이너 ─────────────────────────────────────────── */
function MaxWidthPreview({ children, description }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)', width: '100%' }}>
      <div style={{
        backgroundColor: 'var(--color-fill-normal)',
        borderRadius:    'var(--spacing-12)',
        padding:         'var(--spacing-40)',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        width:           '100%',
        boxSizing:       'border-box',
        overflowX:       'auto',
      }}>
        {children}
      </div>
      {description && (
        <p style={{
          fontSize:      'var(--font-size-caption-1)',
          lineHeight:    'var(--line-height-caption-1)',
          letterSpacing: 'var(--letter-spacing-caption-1)',
          fontWeight:    'var(--font-weight-regular)',
          color:         'var(--color-label-alternative)',
        }}>{description}</p>
      )}
    </div>
  )
}

export default function LayoutMaxWidthPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Layout_Max-width</h2>

      {/* 데스크톱 lg */}
      <Section title="데스크톱" column>
        <MaxWidthPreview description="여백을 포함한 그리드의 최대 너비는 1100px입니다.">
          <MaxWidthScreen
            viewportW={1200} viewportH={480} gnbH={60}
            outerMargin={50} colMargin={20} scale={0.42}
          />
        </MaxWidthPreview>
      </Section>

      {/* 데스크톱 xl */}
      <Section title="데스크톱(xl)" column>
        <MaxWidthPreview description="여백을 포함한 그리드의 최대 너비는 1440px입니다.">
          <MaxWidthScreen
            viewportW={1600} viewportH={480} gnbH={60}
            outerMargin={80} colMargin={20} scale={0.37}
          />
        </MaxWidthPreview>
      </Section>
    </div>
  )
}

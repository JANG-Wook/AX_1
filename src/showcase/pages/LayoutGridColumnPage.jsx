import React from 'react'
import Section from '../Section'

/* ── 측정 뱃지 ─────────────────────────────────────────────── */
function Measure({ value, type = 'margin' }) {
  const isMargin = type === 'margin'
  return (
    <span style={{
      display:         'inline-flex',
      alignItems:      'center',
      justifyContent:  'center',
      fontSize:        '10px',
      fontWeight:      'var(--font-weight-semibold)',
      lineHeight:      1,
      color:           isMargin ? 'var(--color-static-white)' : 'var(--color-label-alternative)',
      backgroundColor: isMargin ? 'var(--color-status-negative)' : 'var(--color-fill-strong)',
      borderRadius:    '100px',
      padding:         '2px 6px',
      whiteSpace:      'nowrap',
      flexShrink:      0,
      zIndex:          2,
    }}>{value}</span>
  )
}

/* ── 그리드 화면 ────────────────────────────────────────────── */
function GridScreen({ viewportW, viewportH, gnbH, outerMargin = 0, colMargin, gutter, colCount, scale, spans }) {
  const realColW = (viewportW - outerMargin * 2 - colMargin * 2 - gutter * (colCount - 1)) / colCount
  const S = v => v * scale

  // 컬럼 그룹 계산
  const groups = []
  let colsBefore = 0
  for (let i = 0; i < spans.length; i++) {
    const span = spans[i]
    const gx = outerMargin + colMargin + colsBefore * (realColW + gutter)
    const gw = span * realColW + (span - 1) * gutter
    groups.push({ span, x: gx, w: gw, num: i + 1 })
    colsBefore += span
  }

  const vH = S(viewportH)
  const gnbSH = S(gnbH)
  const cH = vH - gnbSH
  const showGutterBadge = S(gutter) >= 12
  // 측정 스트립 수직 위치: GNB 아래 컨텐츠 중앙
  const stripTop = gnbSH + cH / 2

  return (
    // 바깥 wrapper — overflow: visible 이므로 뱃지가 잘리지 않음
    <div style={{ position: 'relative', flexShrink: 0, width: S(viewportW), height: vH }}>
      {/* 뷰포트 프레임 (overflow: hidden 으로 컬럼 배경 클리핑) */}
      <div style={{
        position:        'absolute',
        inset:           0,
        backgroundColor: 'var(--color-bg-elevated)',
        border:          '1px solid var(--color-line-neutral)',
        borderRadius:    'var(--spacing-4)',
        overflow:        'hidden',
      }}>
        {/* GNB */}
        <div style={{ height: gnbSH, borderBottom: '1px solid var(--color-line-alternative)' }} />

        {/* 컬럼 배경 강조 */}
        {groups.map((g, i) => (
          <div key={i} style={{ position: 'absolute', top: gnbSH, bottom: 0, left: S(g.x), width: S(g.w) }}>
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--color-status-negative)', opacity: 0.12 }} />
          </div>
        ))}
      </div>

      {/* 측정 스트립 — viewport 바깥 레이어, 잘림 없음 */}
      <div style={{
        position:   'absolute',
        top:        stripTop,
        transform:  'translateY(-50%)',
        left:       S(outerMargin),
        right:      S(outerMargin),
        display:    'flex',
        alignItems: 'center',
        zIndex:     3,
        pointerEvents: 'none',
      }}>
        {/* 좌측 마진 뱃지 */}
        <div style={{ width: S(colMargin), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Measure value={colMargin} type="margin" />
        </div>

        {/* 컬럼 + 거터 뱃지 */}
        {groups.map((g, i) => (
          <React.Fragment key={i}>
            <div style={{ width: S(g.w), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Measure value={g.num} type="column" />
            </div>
            {i < groups.length - 1 && (
              <div style={{ width: S(gutter), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {showGutterBadge && <Measure value={gutter} type="margin" />}
              </div>
            )}
          </React.Fragment>
        ))}

        {/* 우측 마진 뱃지 */}
        <div style={{ width: S(colMargin), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Measure value={colMargin} type="margin" />
        </div>
      </div>
    </div>
  )
}

/* ── 프리뷰 컨테이너 ─────────────────────────────────────────── */
function GridPreview({ children, description }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)', width: '100%' }}>
      <div style={{
        backgroundColor: 'var(--color-fill-normal)',
        borderRadius:    'var(--spacing-12)',
        padding:         'var(--spacing-40)',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        gap:             'var(--spacing-32)',
        width:           '100%',
        boxSizing:       'border-box',
        overflowX:       'auto',
        flexWrap:        'nowrap',
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

export default function LayoutGridColumnPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Layout_Grid Column</h2>

      {/* 모바일 */}
      <Section title="모바일" column>
        <GridPreview description="모바일에서는 2단 컬럼 그리드를 사용합니다.">
          <GridScreen
            viewportW={375} viewportH={560} gnbH={56}
            outerMargin={0} colMargin={20} gutter={20} colCount={2} scale={0.7}
            spans={[1, 1]}
          />
        </GridPreview>
      </Section>

      {/* 태블릿 */}
      <Section title="태블릿" column>
        <GridPreview description="태블릿 대응이 필요한 경우에는 3단 컬럼 그리드를 쓰며, 컬럼을 묶어 사용할 수 있습니다.">
          <GridScreen
            viewportW={768} viewportH={480} gnbH={56}
            outerMargin={0} colMargin={20} gutter={20} colCount={3} scale={0.45}
            spans={[1, 1, 1]}
          />
          <GridScreen
            viewportW={768} viewportH={480} gnbH={56}
            outerMargin={0} colMargin={20} gutter={20} colCount={3} scale={0.45}
            spans={[1, 2]}
          />
        </GridPreview>
      </Section>

      {/* 데스크톱 */}
      <Section title="데스크톱" column>
        <GridPreview>
          <GridScreen
            viewportW={1200} viewportH={400} gnbH={60}
            outerMargin={50} colMargin={20} gutter={20} colCount={12} scale={0.37}
            spans={[1,1,1,1,1,1,1,1,1,1,1,1]}
          />
          <GridScreen
            viewportW={1200} viewportH={400} gnbH={60}
            outerMargin={50} colMargin={20} gutter={20} colCount={12} scale={0.37}
            spans={[4, 1, 6, 1]}
          />
        </GridPreview>
        <GridPreview description="데스크톱에서는 12단 컬럼 그리드를 쓰며, 컬럼을 묶어 사용할 수 있습니다.">
          <GridScreen
            viewportW={1600} viewportH={400} gnbH={60}
            outerMargin={80} colMargin={20} gutter={20} colCount={12} scale={0.3}
            spans={[1,1,1,1,1,1,1,1,1,1,1,1]}
          />
          <GridScreen
            viewportW={1600} viewportH={400} gnbH={60}
            outerMargin={80} colMargin={20} gutter={20} colCount={12} scale={0.3}
            spans={[3, 1, 7, 1]}
          />
        </GridPreview>
      </Section>
    </div>
  )
}

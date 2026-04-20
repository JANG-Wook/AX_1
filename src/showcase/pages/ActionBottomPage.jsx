import Section from '../Section'

/* ── 공통 버튼 스타일 ──────────────────────────────────────────── */
const BTN = {
  borderRadius: 'var(--spacing-12)',
  padding:      `var(--spacing-12) var(--spacing-24)`,
  fontSize:     'var(--font-size-body-1)',
  lineHeight:   'var(--line-height-body-1)',
  fontWeight:   'var(--font-weight-semibold)',
  textAlign:    'center',
  boxSizing:    'border-box',
  whiteSpace:   'nowrap',
  overflow:     'hidden',
}
const BTN_SOLID         = { ...BTN, backgroundColor: 'var(--color-primary-normal)', color: 'var(--color-static-white)', border: 'none' }
const BTN_OUTLINED      = { ...BTN, backgroundColor: 'transparent', border: '1px solid var(--color-line-neutral)', color: 'var(--color-primary-normal)' }
const BTN_NEUTRAL       = { ...BTN, backgroundColor: 'transparent', border: '1px solid var(--color-line-neutral)', color: 'var(--color-label-normal)', fontWeight: 'var(--font-weight-medium)' }
const BTN_CANCEL         = { ...BTN, backgroundColor: 'transparent', border: '1px solid var(--color-line-neutral)', color: 'var(--color-label-normal)', fontWeight: 'var(--font-weight-medium)', width: '100%' }
const BTN_PRIMARY_BORDER = { ...BTN, backgroundColor: 'transparent', border: '1px solid var(--color-primary-normal)', color: 'var(--color-primary-normal)' }

/* ── Sub Action (Strong — 텍스트 전용) ───────────────────────────── */
const SUB_TEXT = {
  textAlign:  'center',
  fontSize:   'var(--font-size-label-2)',
  lineHeight: 'var(--line-height-label-2)',
  fontWeight: 'var(--font-weight-semibold)',
  color:      'var(--color-label-alternative)',
  padding:    'var(--spacing-4) 0',
}
const SUB_TEXT_PRIMARY = { ...SUB_TEXT, color: 'var(--color-primary-normal)' }

/* ── 섹션 카드 배경 ─────────────────────────────────────────────── */
const CARD = {
  width:           '100%',
  backgroundColor: 'var(--color-fill-normal)',
  borderRadius:    'var(--spacing-12)',
  padding:         'var(--spacing-32)',
  boxSizing:       'border-box',
}

/* ── MockFrame — 폰 프레임 프리뷰 ───────────────────────────────── */
function MockFrame({ label, children, width = 375 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', flexShrink: 0 }}>
      {label && (
        <span style={{
          fontSize:   'var(--font-size-label-2)',
          lineHeight: 'var(--line-height-label-2)',
          fontWeight: 'var(--font-weight-semibold)',
          color:      'var(--color-label-normal)',
        }}>{label}</span>
      )}
      <div style={{
        width:           `${width}px`,
        border:          '1.5px solid var(--color-line-normal)',
        borderRadius:    'var(--spacing-16)',
        overflow:        'hidden',
        backgroundColor: 'var(--color-bg-elevated)',
      }}>
        <div style={{ height: '100px', backgroundColor: 'var(--color-fill-normal)' }} />
        {children}
      </div>
    </div>
  )
}

const CAPTION_STYLE = {
  fontSize:   'var(--font-size-caption-1)',
  lineHeight: 'var(--line-height-caption-1)',
  color:      'var(--color-label-alternative)',
}

/* ── ActionArea 래퍼 ─────────────────────────────────────────────── */
function ActionArea({ children, divider, extra, caption, safeAreaH = 0, compact }) {
  return (
    <div>
      {divider && (
        <div style={{ height: '1px', backgroundColor: 'var(--color-line-neutral)' }} />
      )}
      {extra && (
        <div style={{
          margin:          `var(--spacing-20) var(--spacing-20) 0`,
          height:          '48px',
          backgroundColor: 'var(--color-accent-bg-violet)',
          opacity:         0.14,
        }} />
      )}
      <div style={{
        padding:        'var(--spacing-20)',
        display:        'flex',
        flexDirection:  compact ? 'row' : 'column',
        gap:            'var(--spacing-12)',
        justifyContent: compact ? 'flex-end' : undefined,
        alignItems:     compact ? 'center' : undefined,
      }}>
        {compact ? (
          <>
            {/* Compact: caption은 버튼 왼쪽 flex-1 영역 */}
            <div style={{ flex: 1 }}>
              {caption && <p style={CAPTION_STYLE}>필요한 경우 설명을 덧붙입니다.</p>}
            </div>
            {children}
          </>
        ) : (
          <>
            {/* Strong/Neutral: caption은 버튼 위 */}
            {caption && (
              <p style={{ ...CAPTION_STYLE, textAlign: 'center', width: '100%' }}>
                필요한 경우 설명을 덧붙입니다.
              </p>
            )}
            {children}
          </>
        )}
      </div>
      {safeAreaH > 0 && (
        <div style={{ height: `${safeAreaH}px` }} />
      )}
    </div>
  )
}

/* ── StickyGradient ─────────────────────────────────────────────── */
function StickyGradient() {
  return (
    <div style={{
      height:     '36px',
      marginTop:  '-36px',
      background: 'linear-gradient(to bottom, transparent, var(--color-bg-elevated))',
      position:   'relative',
      zIndex:     1,
      pointerEvents: 'none',
    }} />
  )
}

/* ── Label 헤더 ─────────────────────────────────────────────────── */
function SubLabel({ children }) {
  return (
    <p style={{
      fontSize:   'var(--font-size-caption-1)',
      lineHeight: 'var(--line-height-caption-1)',
      fontWeight: 'var(--font-weight-semibold)',
      color:      'var(--color-label-assistive)',
      marginBottom: 'var(--spacing-16)',
    }}>{children}</p>
  )
}

/* ─────────────────────────────────────────────────────────────────
   페이지
───────────────────────────────────────────────────────────────── */
export default function ActionBottomPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-8)',
      }}>Bottom</h2>
      <p style={{
        fontSize:     'var(--font-size-body-2)',
        lineHeight:   'var(--line-height-body-2)',
        fontWeight:   'var(--font-weight-regular)',
        color:        'var(--color-label-alternative)',
        marginBottom: 'var(--spacing-32)',
      }}>화면 하단에 고정되는 주요 액션 영역입니다.</p>

      {/* ──────────────── 1. extra & divider ──────────────── */}
      <Section title="extra">
        <div style={CARD}>
          <SubLabel>extra = false / true</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', marginBottom: 'var(--spacing-32)' }}>
            <MockFrame label="extra=false">
              <ActionArea>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
              </ActionArea>
            </MockFrame>
            <MockFrame label="extra=true">
              <ActionArea extra>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
              </ActionArea>
            </MockFrame>
          </div>

          <SubLabel>extra=true + divider = false / true</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)' }}>
            <MockFrame label="divider=false">
              <ActionArea extra>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                <div style={{ ...BTN_OUTLINED, width: '100%' }}>대체 액션</div>
              </ActionArea>
            </MockFrame>
            <MockFrame label="divider=true">
              <ActionArea extra divider>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                <div style={{ ...BTN_OUTLINED, width: '100%' }}>대체 액션</div>
              </ActionArea>
            </MockFrame>
          </div>
        </div>
      </Section>

      {/* ──────────────── 2. variant ──────────────── */}
      <Section title="variant">
        <div style={CARD}>

          {/* Strong */}
          <SubLabel>variant = Strong</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', marginBottom: 'var(--spacing-32)' }}>

            <MockFrame label="Main Action">
              <ActionArea>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
              </ActionArea>
            </MockFrame>

            <MockFrame label="Main + Alternative">
              <ActionArea>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
                  <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                  <div style={{ ...BTN_OUTLINED, width: '100%' }}>대체 액션</div>
                </div>
              </ActionArea>
            </MockFrame>

            <MockFrame label="Main + Alternative + Sub">
              <ActionArea>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
                  <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                  <div style={{ ...BTN_OUTLINED, width: '100%' }}>대체 액션</div>
                </div>
                <div style={SUB_TEXT}>보조 액션</div>
              </ActionArea>
            </MockFrame>

          </div>

          {/* Neutral */}
          <SubLabel>variant = Neutral</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', marginBottom: 'var(--spacing-32)' }}>

            <MockFrame label="Alt + Main">
              <ActionArea>
                <div style={{ display: 'flex', gap: 'var(--spacing-12)' }}>
                  <div style={{ ...BTN_OUTLINED, flex: 1 }}>대체</div>
                  <div style={{ ...BTN_SOLID, flex: 1 }}>메인</div>
                </div>
              </ActionArea>
            </MockFrame>

            <MockFrame label="Sub + Main">
              <ActionArea>
                <div style={{ display: 'flex', gap: 'var(--spacing-12)' }}>
                  <div style={{ ...BTN_NEUTRAL }}>보조</div>
                  <div style={{ ...BTN_SOLID, flex: 1 }}>메인</div>
                </div>
              </ActionArea>
            </MockFrame>

            <MockFrame label="Sub + Alt + Main">
              <ActionArea>
                <div style={{ display: 'flex', gap: 'var(--spacing-12)' }}>
                  <div style={{ ...BTN_NEUTRAL }}>보조</div>
                  <div style={{ ...BTN_OUTLINED, flex: 1 }}>대체</div>
                  <div style={{ ...BTN_SOLID, flex: 1 }}>메인</div>
                </div>
              </ActionArea>
            </MockFrame>

          </div>

          {/* Compact (Web Only) */}
          <SubLabel>variant = Compact (Web Only)</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', marginBottom: 'var(--spacing-32)' }}>

            <MockFrame label="Alt + Main" width={375}>
              <ActionArea compact>
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인</div>
              </ActionArea>
            </MockFrame>

            <MockFrame label="Sub + Main" width={375}>
              <ActionArea compact>
                <div style={{ ...BTN_NEUTRAL }}>보조</div>
                <div style={{ ...BTN_SOLID }}>메인</div>
              </ActionArea>
            </MockFrame>

            <MockFrame label="Sub + Alt + Main" width={375}>
              <ActionArea compact>
                <div style={{ ...BTN_NEUTRAL }}>보조</div>
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인</div>
              </ActionArea>
            </MockFrame>

          </div>

          {/* compactContent sub-property */}
          <SubLabel>compactContent = false / true</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', marginBottom: 'var(--spacing-32)' }}>

            <MockFrame label="compactContent=false">
              <ActionArea compact>
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인</div>
              </ActionArea>
            </MockFrame>

            <MockFrame label="compactContent=true">
              <div style={{ padding: 'var(--spacing-20)', display: 'flex', gap: 'var(--spacing-12)', alignItems: 'center', justifyContent: 'flex-end' }}>
                <div style={{
                  flex:            1,
                  height:          '48px',
                  backgroundColor: 'var(--color-accent-bg-violet)',
                  opacity:         0.08,
                }} />
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인</div>
              </div>
            </MockFrame>

          </div>

          {/* Cancel */}
          <SubLabel>variant = Cancel</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)' }}>
            <MockFrame label="확인 (단일 버튼)">
              <ActionArea>
                <div style={{ ...BTN_CANCEL }}>확인</div>
              </ActionArea>
            </MockFrame>
          </div>

        </div>
      </Section>

      {/* ──────────────── 3. customize ──────────────── */}
      <Section title="customize">
        <div style={CARD}>
          <SubLabel>customize = button (메인 액션이 Outlined Primary로 커스텀된 케이스)</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)' }}>

            {/* Strong — 메인/대체 모두 커스텀 */}
            <MockFrame label="Strong">
              <ActionArea>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
                  <div style={{ ...BTN_PRIMARY_BORDER, width: '100%' }}>메인 액션</div>
                  <div style={{ ...BTN_NEUTRAL, width: '100%' }}>대체 액션</div>
                </div>
                <div style={SUB_TEXT_PRIMARY}>보조 액션</div>
              </ActionArea>
            </MockFrame>

            {/* Neutral — 보조(neutral) + 대체/메인 primary border */}
            <MockFrame label="Neutral">
              <ActionArea>
                <div style={{ display: 'flex', gap: 'var(--spacing-12)' }}>
                  <div style={{ ...BTN_NEUTRAL }}>보조</div>
                  <div style={{ ...BTN_PRIMARY_BORDER, flex: 1 }}>대체</div>
                  <div style={{ ...BTN_PRIMARY_BORDER, flex: 1 }}>메인</div>
                </div>
              </ActionArea>
            </MockFrame>

            {/* Compact — 보조(neutral) + 대체/메인 primary border, right-aligned */}
            <MockFrame label="Compact">
              <ActionArea compact>
                <div style={{ ...BTN_NEUTRAL }}>보조</div>
                <div style={{ ...BTN_PRIMARY_BORDER }}>대체</div>
                <div style={{ ...BTN_PRIMARY_BORDER }}>메인</div>
              </ActionArea>
            </MockFrame>

            {/* Cancel — primary border */}
            <MockFrame label="Cancel">
              <ActionArea>
                <div style={{ ...BTN_PRIMARY_BORDER, width: '100%' }}>확인</div>
              </ActionArea>
            </MockFrame>

          </div>
        </div>
      </Section>

      {/* ──────────────── 4. caption ──────────────── */}
      <Section title="caption">
        <div style={CARD}>
          <SubLabel>Strong — caption = false / true</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', marginBottom: 'var(--spacing-32)' }}>
            <MockFrame label="caption=false">
              <ActionArea>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
              </ActionArea>
            </MockFrame>
            <MockFrame label="caption=true">
              <ActionArea caption>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
              </ActionArea>
            </MockFrame>
          </div>

          <SubLabel>Compact — caption = false / true</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)' }}>
            <MockFrame label="caption=false">
              <ActionArea compact>
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인 액션</div>
              </ActionArea>
            </MockFrame>
            <MockFrame label="caption=true">
              <ActionArea compact caption>
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인 액션</div>
              </ActionArea>
            </MockFrame>
          </div>
        </div>
      </Section>

      {/* ──────────────── 5. sticky ──────────────── */}
      <Section title="sticky">
        <div style={CARD}>
          <SubLabel>sticky = false / true (스크롤 본문 위 그라디언트 페이드)</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', marginBottom: 'var(--spacing-32)' }}>
            <MockFrame label="sticky=false">
              <ActionArea>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
              </ActionArea>
            </MockFrame>
            <MockFrame label="sticky=true">
              <StickyGradient />
              <ActionArea>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
              </ActionArea>
            </MockFrame>
          </div>

          <SubLabel>sticky=true — 버튼 조합별</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)' }}>
            {[
              {
                label:   'Main only',
                content: <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>,
              },
              {
                label:   'Main + Alt',
                content: (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', width: '100%' }}>
                    <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                    <div style={{ ...BTN_OUTLINED, width: '100%' }}>대체 액션</div>
                  </div>
                ),
              },
              {
                label:   'Neutral Alt+Main',
                content: (
                  <div style={{ display: 'flex', gap: 'var(--spacing-12)', width: '100%' }}>
                    <div style={{ ...BTN_OUTLINED, flex: 1 }}>대체</div>
                    <div style={{ ...BTN_SOLID, flex: 1 }}>메인</div>
                  </div>
                ),
              },
              {
                label:   'Cancel',
                content: <div style={{ ...BTN_CANCEL }}>확인</div>,
              },
            ].map(({ label, content }) => (
              <MockFrame key={label} label={label}>
                <StickyGradient />
                <ActionArea>{content}</ActionArea>
              </MockFrame>
            ))}
          </div>
        </div>
      </Section>

      {/* ──────────────── 6. safeArea ──────────────── */}
      <Section title="safeArea">
        <div style={CARD}>
          <SubLabel>플랫폼별 하단 Safe Area</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)' }}>

            <MockFrame label="Web (0px)">
              <ActionArea safeAreaH={0}>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
              </ActionArea>
            </MockFrame>

            <MockFrame label="iOS (34px)">
              <div>
                <ActionArea safeAreaH={0}>
                  <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                </ActionArea>
                {/* Home Bar */}
                <div style={{
                  height:          '34px',
                  backgroundColor: 'var(--color-fill-normal)',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  borderTop:       '1px solid var(--color-line-alternative)',
                }}>
                  <div style={{
                    width:           '38%',
                    height:          '4px',
                    backgroundColor: 'var(--color-label-strong)',
                    borderRadius:    'var(--spacing-4)',
                    opacity:         0.35,
                  }} />
                </div>
              </div>
            </MockFrame>

            <MockFrame label="Android (14px)">
              <div>
                <ActionArea safeAreaH={0}>
                  <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                </ActionArea>
                {/* Navigation Bar */}
                <div style={{
                  height:          '14px',
                  backgroundColor: 'var(--color-fill-normal)',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  borderTop:       '1px solid var(--color-line-alternative)',
                }}>
                  <div style={{
                    width:           '32%',
                    height:          '2px',
                    backgroundColor: 'var(--color-label-strong)',
                    borderRadius:    'var(--spacing-4)',
                    opacity:         0.35,
                  }} />
                </div>
              </div>
            </MockFrame>

          </div>
        </div>
      </Section>
    </div>
  )
}

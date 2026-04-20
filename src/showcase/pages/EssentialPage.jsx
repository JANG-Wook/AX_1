import Section from '../Section'

/* ── 폰 프레임 ───────────────────────────────────────────────── */
function PhoneMockup({ label, statusH, homeH, homeLabel, isIOS }) {
  const frameW  = isIOS ? 220 : 210
  const contentH = 340

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
      {/* 플랫폼 레이블 */}
      <span style={{
        fontSize:   'var(--font-size-label-1)',
        lineHeight: 'var(--line-height-label-1)',
        fontWeight: 'var(--font-weight-semibold)',
        color:      'var(--color-label-normal)',
      }}>{label}</span>

      <div style={{ display: 'flex', alignItems: 'stretch', gap: 'var(--spacing-16)' }}>
        {/* 폰 프레임 */}
        <div style={{
          width:        `${frameW}px`,
          border:       '1.5px solid var(--color-line-normal)',
          borderRadius: 'var(--spacing-24)',
          overflow:     'hidden',
          flexShrink:   0,
          boxSizing:    'border-box',
        }}>
          {/* Status Bar */}
          <div style={{
            height:          `${statusH}px`,
            backgroundColor: 'var(--color-fill-normal)',
            borderBottom:    '1px solid var(--color-line-alternative)',
            boxSizing:       'border-box',
          }} />

          {/* Content Area */}
          <div style={{
            height:          `${contentH}px`,
            backgroundColor: 'var(--color-bg-elevated)',
          }} />

          {/* Home Bar / Navigation Bar */}
          <div style={{
            height:          `${homeH}px`,
            backgroundColor: 'var(--color-fill-normal)',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            borderTop:       '1px solid var(--color-line-alternative)',
            boxSizing:       'border-box',
          }}>
            <div style={{
              width:           isIOS ? '38%' : '32%',
              height:          isIOS ? '4px' : '2px',
              backgroundColor: 'var(--color-label-strong)',
              borderRadius:    'var(--spacing-4)',
              opacity:         0.35,
            }} />
          </div>
        </div>

        {/* 치수 주석 */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Status Bar 주석 */}
          <div style={{
            height:      `${statusH}px`,
            display:     'flex',
            alignItems:  'center',
            paddingLeft: 'var(--spacing-8)',
            gap:         'var(--spacing-6)',
            boxSizing:   'border-box',
          }}>
            <div style={{
              width:          '1px',
              alignSelf:      'stretch',
              borderLeft:     '1px dashed var(--color-line-normal)',
            }} />
            <span style={{
              fontSize:    'var(--font-size-caption-2)',
              lineHeight:  'var(--line-height-caption-2)',
              fontWeight:  'var(--font-weight-regular)',
              color:       'var(--color-label-alternative)',
              whiteSpace:  'nowrap',
            }}>Status Bar · {statusH}px</span>
          </div>

          {/* Content 영역 (빈 공간) */}
          <div style={{ flex: 1 }} />

          {/* Home Bar 주석 */}
          <div style={{
            height:      `${homeH}px`,
            display:     'flex',
            alignItems:  'center',
            paddingLeft: 'var(--spacing-8)',
            gap:         'var(--spacing-6)',
            boxSizing:   'border-box',
          }}>
            <div style={{
              width:      '1px',
              alignSelf:  'stretch',
              borderLeft: '1px dashed var(--color-line-normal)',
            }} />
            <span style={{
              fontSize:   'var(--font-size-caption-2)',
              lineHeight: 'var(--line-height-caption-2)',
              fontWeight: 'var(--font-weight-regular)',
              color:      'var(--color-label-alternative)',
              whiteSpace: 'nowrap',
            }}>{homeLabel} · {homeH}px</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── 페이지 ──────────────────────────────────────────────────── */
export default function EssentialPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-8)',
      }}>Essential</h2>

      <p style={{
        fontSize:     'var(--font-size-body-2)',
        lineHeight:   'var(--line-height-body-2)',
        fontWeight:   'var(--font-weight-regular)',
        color:        'var(--color-label-alternative)',
        marginBottom: 'var(--spacing-32)',
      }}>오토레이아웃을 사용하지 않고 Status Bar와 Home Bar를 표시할 때 사용합니다.</p>

      <Section title="platform 종류">
        <div style={{
          width:           '100%',
          backgroundColor: 'var(--color-fill-normal)',
          borderRadius:    'var(--spacing-12)',
          padding:         'var(--spacing-32)',
          boxSizing:       'border-box',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-48)' }}>
            <PhoneMockup
              label="iOS"
              statusH={44}
              homeH={34}
              homeLabel="Home Bar"
              isIOS={true}
            />
            <PhoneMockup
              label="Android"
              statusH={36}
              homeH={14}
              homeLabel="Navigation Bar"
              isIOS={false}
            />
          </div>
        </div>
      </Section>
    </div>
  )
}

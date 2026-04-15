/**
 * Tab 컴포넌트
 *
 * 탭 네비게이션 바입니다.
 *
 * Props:
 *  items            — Array<{ label: string, icon?: ReactNode }>  탭 항목
 *  value            — 활성 탭 인덱스                              기본: 0
 *  onChange         — (index: number) => void
 *  size             — 'small' | 'medium' | 'large'                기본: 'medium'
 *                     small=40px, medium=48px, large=56px
 *  resize           — 'hug' | 'fill'                              기본: 'hug'
 *                     hug: 탭 자연 너비, fill: 탭 균등 분할
 *  horizontalPadding — true | false  좌우 패딩 추가               기본: false
 *  trailingContent  — ReactNode  우측 고정 영역
 *  className        — 추가 클래스
 *
 * 사용 예:
 *  <Tab items={[{label:'홈'},{label:'탐색'}]} value={0} onChange={setTab} />
 *  <Tab items={tabs} value={tab} onChange={setTab} size="large" resize="fill" />
 *  <Tab items={tabs} value={tab} onChange={setTab} horizontalPadding trailingContent={<Icon />} />
 */

const SIZE_HEIGHT = {
  small:  40,
  medium: 48,
  large:  56,
}

export default function Tab({
  items            = [],
  value            = 0,
  onChange,
  size             = 'medium',
  resize           = 'hug',
  horizontalPadding = false,
  trailingContent,
  className        = '',
}) {
  const height = SIZE_HEIGHT[size] ?? 48

  const outerStyle = {
    position:   'relative',
    display:    'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    width:      '100%',
    height:     `${height}px`,
    overflow:   'hidden',
    paddingLeft:  horizontalPadding ? 'var(--spacing-16)' : undefined,
    paddingRight: horizontalPadding ? 'var(--spacing-16)' : undefined,
    boxSizing:  'border-box',
  }

  const dividerStyle = {
    position:     'absolute',
    left:         0,
    right:        0,
    bottom:       0,
    height:       '1px',
    backgroundColor: 'var(--color-line-alternative)',
  }

  const listStyle = {
    display:    'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    flex:       1,
    minWidth:   0,
    gap:        resize === 'fill' ? 0 : '24px',
  }

  return (
    <div style={outerStyle} className={className} role="tablist">
      <div style={dividerStyle} aria-hidden="true" />

      <div style={listStyle}>
        {items.map((item, index) => {
          const isActive = index === value

          const tabStyle = {
            position:      'relative',
            display:       'flex',
            alignItems:    'center',
            justifyContent: 'center',
            gap:           'var(--spacing-4)',
            height:        '100%',
            minWidth:      '32px',
            paddingTop:    'var(--spacing-12)',
            paddingBottom: 'var(--spacing-12)',
            flex:          resize === 'fill' ? 1 : undefined,
            cursor:        onChange ? 'pointer' : 'default',
            background:    'none',
            border:        'none',
            padding:       `var(--spacing-12) 0`,
            boxSizing:     'border-box',
            userSelect:    'none',
            WebkitTapHighlightColor: 'transparent',
          }

          const labelStyle = {
            fontSize:      'var(--font-size-headline-2)',
            lineHeight:    'var(--line-height-headline-2)',
            fontWeight:    'var(--font-weight-semibold)',
            letterSpacing: 'var(--letter-spacing-headline-2)',
            color:         isActive
              ? 'var(--color-label-strong)'
              : 'var(--color-label-assistive)',
            whiteSpace:    'nowrap',
          }

          const indicatorStyle = {
            position:        'absolute',
            left:            0,
            right:           0,
            bottom:          0,
            height:          '2px',
            backgroundColor: 'var(--color-label-strong)',
            zIndex:          1,
          }

          return (
            <button
              key={index}
              role="tab"
              aria-selected={isActive}
              style={tabStyle}
              onClick={() => onChange?.(index)}
            >
              {item.icon && (
                <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                  {item.icon}
                </span>
              )}
              <span style={labelStyle}>{item.label}</span>
              {isActive && <div style={indicatorStyle} aria-hidden="true" />}
            </button>
          )
        })}
      </div>

      {trailingContent && (
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          {trailingContent}
        </div>
      )}
    </div>
  )
}

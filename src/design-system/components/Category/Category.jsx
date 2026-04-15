/**
 * Category 컴포넌트
 *
 * 정보를 특정 주제나 그룹으로 나누어 구분하고 접근할 수 있는 칩 네비게이션입니다.
 *
 * Props:
 *  items            — Array<{ label: string, icon?: ReactNode }>  칩 항목
 *  value            — 활성 칩 인덱스                              기본: 0
 *  onChange         — (index: number) => void
 *  variant          — 'normal' | 'alternative'                    기본: 'normal'
 *                     normal:      활성 칩 검정 배경
 *                     alternative: 활성 칩 primary 컬러
 *  size             — 'small' | 'medium' | 'large' | 'xlarge'     기본: 'medium'
 *                     small=24px, medium=32px, large=36px, xlarge=40px
 *  scroll           — true | false  가로 스크롤 활성화             기본: false
 *  horizontalPadding — true | false  좌우 20px 패딩               기본: false
 *  verticalPadding  — true | false  상하 8px 스페이서             기본: false
 *  trailingContent  — ReactNode  우측 고정 영역
 *  className        — 추가 클래스
 *
 * 사용 예:
 *  <Category items={[{label:'전체'},{label:'인기'}]} value={0} onChange={setTab} />
 *  <Category items={tabs} value={tab} onChange={setTab} variant="alternative" size="large" />
 *  <Category items={tabs} value={tab} onChange={setTab} scroll horizontalPadding />
 */

const CHIP_PADDING_Y = {
  small:  '2px',
  medium: '6px',
  large:  '8px',
  xlarge: '10px',
}

export default function Category({
  items             = [],
  value             = 0,
  onChange,
  variant           = 'normal',
  size              = 'medium',
  scroll            = false,
  horizontalPadding = false,
  verticalPadding   = false,
  trailingContent,
  className         = '',
}) {
  const isAlternative = variant === 'alternative'
  const paddingY      = CHIP_PADDING_Y[size] ?? '6px'

  const outerStyle = {
    display:     'flex',
    flexDirection: 'row',
    alignItems:  'center',
    overflow:    'hidden',
    width:       '100%',
    paddingLeft:  horizontalPadding ? 'var(--spacing-20)' : undefined,
    paddingRight: horizontalPadding ? 'var(--spacing-20)' : undefined,
    boxSizing:   'border-box',
    gap:         'var(--spacing-20)',
  }

  const leadingStyle = {
    display:    'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex:       '1 0 0',
    minWidth:   0,
    overflowX:  scroll ? 'auto' : 'hidden',
    overflowY:  'hidden',
  }

  const wrapperStyle = {
    display:    'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap:        'var(--spacing-6)',
    flexShrink: 0,
    paddingTop:    verticalPadding ? '8px' : undefined,
    paddingBottom: verticalPadding ? '8px' : undefined,
  }

  return (
    <div style={outerStyle} className={className}>
      <div style={leadingStyle}>
        <div style={wrapperStyle}>
          {items.map((item, index) => {
            const isActive = index === value
            return (
              <ChipItem
                key={index}
                label={item.label}
                icon={item.icon}
                isActive={isActive}
                isAlternative={isAlternative}
                paddingY={paddingY}
                onClick={() => onChange?.(index)}
              />
            )
          })}
        </div>
      </div>

      {trailingContent && (
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          {trailingContent}
        </div>
      )}
    </div>
  )
}

function ChipItem({ label, icon, isActive, isAlternative, paddingY, onClick }) {
  const chipStyle = {
    position:   'relative',
    display:    'flex',
    alignItems: 'center',
    gap:        'var(--spacing-2)',
    paddingTop:    paddingY,
    paddingBottom: paddingY,
    paddingLeft:   'var(--spacing-8)',
    paddingRight:  'var(--spacing-8)',
    borderRadius:  '8px',
    flexShrink:    0,
    cursor:        onClick ? 'pointer' : 'default',
    background:    'none',
    border:        'none',
    boxSizing:     'border-box',
    userSelect:    'none',
    WebkitTapHighlightColor: 'transparent',
  }

  const labelStyle = {
    fontSize:      'var(--font-size-label-1)',
    lineHeight:    'var(--line-height-label-1-normal)',
    fontWeight:    'var(--font-weight-medium)',
    letterSpacing: 'var(--letter-spacing-label-1)',
    whiteSpace:    'nowrap',
    position:      'relative',
    color: isActive
      ? (isAlternative ? 'var(--color-primary-normal)' : 'var(--color-inverse-label)')
      : 'var(--color-label-alternative)',
  }

  return (
    <button style={chipStyle} onClick={onClick} aria-pressed={isActive}>
      {/* 활성 배경 레이어 */}
      {isActive && !isAlternative && (
        <div style={{
          position:        'absolute',
          inset:           0,
          borderRadius:    '8px',
          backgroundColor: 'var(--color-label-strong)',
        }} aria-hidden="true" />
      )}
      {isActive && isAlternative && (
        <>
          <div style={{
            position:        'absolute',
            inset:           0,
            borderRadius:    '8px',
            backgroundColor: 'var(--color-primary-normal)',
            opacity:         0.05,
          }} aria-hidden="true" />
          <div style={{
            position:     'absolute',
            inset:        0,
            borderRadius: '8px',
            border:       '1px solid var(--color-primary-normal)',
            opacity:      0.43,
            boxSizing:    'border-box',
          }} aria-hidden="true" />
        </>
      )}

      {/* 비활성 테두리 */}
      {!isActive && (
        <div style={{
          position:     'absolute',
          inset:        0,
          borderRadius: '8px',
          border:       '1px solid var(--color-line-neutral)',
          boxSizing:    'border-box',
        }} aria-hidden="true" />
      )}

      {icon && (
        <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0, position: 'relative' }}>
          {icon}
        </span>
      )}
      <span style={labelStyle}>{label}</span>
    </button>
  )
}

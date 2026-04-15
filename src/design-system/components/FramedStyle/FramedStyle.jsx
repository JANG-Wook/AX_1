/**
 * FramedStyle 컴포넌트
 *
 * 여러 요소를 프레임으로 감싸 그룹화하고,
 * 그룹 단위의 선택 상태를 강조할 때 사용합니다.
 *
 * Props:
 *  selected  — true | false              기본: false
 *  status    — 'normal' | 'negative'     기본: 'normal'
 *  disabled  — true | false              기본: false
 *  onClick   — 클릭 핸들러 () => void
 *  className — 추가 클래스
 *  children  — 카드 내부 콘텐츠 (slot)
 *
 * 사용 예:
 *  <FramedStyle onClick={toggle}>
 *    <MyContent />
 *  </FramedStyle>
 *
 *  <FramedStyle selected onClick={toggle}>
 *    <MyContent />
 *  </FramedStyle>
 *
 *  <FramedStyle selected status="negative">
 *    <MyContent />
 *  </FramedStyle>
 *
 *  <FramedStyle disabled>
 *    <MyContent />
 *  </FramedStyle>
 */

export default function FramedStyle({
  selected  = false,
  status    = 'normal',
  disabled  = false,
  onClick   = null,
  className = '',
  children,
}) {
  const isNegative   = status === 'negative'
  const showRing     = selected && !disabled
  const ringColor    = isNegative
    ? 'var(--color-status-negative)'
    : 'var(--color-primary-normal)'

  const outerStyle = {
    position:  'relative',
    isolation: 'isolate',
    display:   'flex',
    alignItems: 'center',
  }

  const containerStyle = {
    flex:            '1 0 0',
    display:         'flex',
    alignItems:      'center',
    justifyContent:  'center',
    backgroundColor: disabled
      ? 'var(--color-interaction-disable)'
      : 'var(--color-bg-normal)',
    borderRadius:    '14px',
    paddingTop:      'var(--spacing-4)',
    paddingBottom:   'var(--spacing-4)',
    paddingLeft:     'var(--spacing-16)',
    paddingRight:    'var(--spacing-16)',
    boxShadow:       'var(--shadow-normal-xsmall)',
    position:        'relative',
    zIndex:          1,
    cursor:          disabled ? 'not-allowed' : (onClick ? 'pointer' : 'default'),
    userSelect:      'none',
  }

  const innerBorderStyle = {
    position:     'absolute',
    inset:        0,
    borderRadius: '14px',
    border:       '1px solid var(--color-line-neutral)',
    pointerEvents: 'none',
  }

  const ringBaseStyle = {
    position:     'absolute',
    inset:        0,
    borderRadius: '14px',
    border:       '2px solid var(--color-bg-normal)',
    pointerEvents: 'none',
  }

  const ringStyle = {
    position:     'absolute',
    inset:        0,
    borderRadius: '14px',
    border:       `2px solid ${ringColor}`,
    opacity:      0.43,
    pointerEvents: 'none',
  }

  const contentStyle = {
    flex:     '1 0 0',
    position: 'relative',
    minWidth: 0,
  }

  const handleClick = () => {
    if (!disabled && onClick) onClick()
  }

  const handleKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <div style={outerStyle} className={className}>
      <div
        style={containerStyle}
        role={onClick ? 'button' : undefined}
        aria-pressed={onClick ? selected : undefined}
        aria-disabled={disabled}
        tabIndex={onClick && !disabled ? 0 : undefined}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {/* 드롭 섀도우는 containerStyle의 boxShadow로 처리 */}

        {/* 내부 테두리 */}
        <div aria-hidden="true" style={innerBorderStyle} />

        {/* 선택 링 — Base (흰색 gap) */}
        {showRing && (
          <div aria-hidden="true" style={ringBaseStyle} />
        )}

        {/* 선택 링 — Ring (primary / negative, opacity 43%) */}
        {showRing && (
          <div aria-hidden="true" style={ringStyle} />
        )}

        {/* 콘텐츠 슬롯 */}
        <div style={contentStyle}>
          {children}
        </div>
      </div>
    </div>
  )
}

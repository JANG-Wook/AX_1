/**
 * CheckMark 컴포넌트
 *
 * 박스 없이 체크 아이콘만 사용하는 경량 컨트롤.
 * 체크박스의 하위 항목을 표시할 때 사용합니다.
 * 상태에 따라 아이콘·라벨 색상만 변경됩니다.
 *
 * Props:
 *  checked   — true | false                기본: false
 *  size      — 'medium' | 'small'          기본: 'medium'
 *              medium: 체크 아이콘 24px
 *              small:  체크 아이콘 20px
 *  tight     — true | false  좌우 padding 축소  기본: false
 *  disabled  — true | false                기본: false
 *  label     — 라벨 텍스트. 없으면 숨김
 *  onChange  — 클릭/변경 핸들러 () => void
 *  className — 추가 클래스
 *
 * 사용 예:
 *  <CheckMark label="하위 항목" onChange={toggle} />
 *  <CheckMark checked label="선택된 하위 항목" />
 *  <CheckMark size="small" label="소형" />
 */

import Icon from '../Icon/Icon'

const ICON_SIZE = {
  medium: 24,
  small:  20,
}

export default function CheckMark({
  checked   = false,
  size      = 'medium',
  tight     = false,
  disabled  = false,
  label     = '',
  onChange  = null,
  className = '',
}) {
  const iconPx = ICON_SIZE[size]
  const padH   = tight ? '1px' : '0px'

  const wrapperStyle = {
    display:    'flex',
    gap:        'var(--spacing-4)',
    alignItems: 'flex-start',
    cursor:     disabled ? 'not-allowed' : 'pointer',
    opacity:    disabled ? 0.4 : 1,
    userSelect: 'none',
  }

  const controlStyle = {
    display:        'flex',
    flexDirection:  'column',
    alignItems:     'center',
    justifyContent: 'center',
    paddingLeft:    padH,
    paddingRight:   padH,
    position:       'relative',
    flexShrink:     0,
  }

  const labelStyle = {
    fontSize:      'var(--font-size-body-2)',
    fontWeight:    'var(--font-weight-regular)',
    lineHeight:    'var(--line-height-body-2-normal)',
    letterSpacing: 'var(--letter-spacing-body-2)',
    color:         checked
      ? 'var(--color-label-normal)'
      : 'var(--color-label-alternative)',
    paddingTop:    '1px',
    paddingBottom: '1px',
    whiteSpace:    'nowrap',
  }

  const handleClick = () => {
    if (!disabled && onChange) onChange()
  }

  const handleKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <div
      style={wrapperStyle}
      className={className}
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div style={controlStyle}>
        <Icon
          name="check"
          size={iconPx}
          color={checked
            ? 'var(--color-primary-normal)'
            : 'var(--color-label-assistive)'
          }
        />
      </div>

      {label && (
        <span style={labelStyle}>{label}</span>
      )}
    </div>
  )
}

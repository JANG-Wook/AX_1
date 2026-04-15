/**
 * Checkbox 컴포넌트
 *
 * Props:
 *  state    — 'unchecked' | 'checked' | 'indeterminate'  기본: 'unchecked'
 *  size     — 'medium' | 'small'                         기본: 'medium'
 *             medium: 박스 18×18px (터치 영역 24×24px)
 *             small:  박스 14×14px (터치 영역 20×20px)
 *  tight    — true | false   좌우 padding 축소            기본: false
 *  bold     — true | false   라벨 semibold                기본: false
 *  disabled — true | false                               기본: false
 *  label    — 라벨 텍스트. 없으면 숨김
 *  onChange — 클릭/변경 핸들러 () => void
 *  className — 추가 클래스
 *
 * 사용 예:
 *  <Checkbox label="동의합니다" onChange={toggle} />
 *  <Checkbox state="checked" label="선택됨" />
 *  <Checkbox state="indeterminate" label="일부 선택" />
 *  <Checkbox size="small" label="소형 체크박스" />
 *  <Checkbox bold label="굵은 라벨" />
 */

import Icon from '../Icon/Icon'

const BOX_SIZE = {
  medium: 18,
  small:  14,
}

const ICON_SIZE = {
  medium: 16,
  small:  12,
}

export default function Checkbox({
  state     = 'unchecked',
  size      = 'medium',
  tight     = false,
  bold      = false,
  disabled  = false,
  label     = '',
  onChange  = null,
  className = '',
}) {
  const isChecked       = state === 'checked'
  const isIndeterminate = state === 'indeterminate'
  const isActive        = isChecked || isIndeterminate

  const boxPx = BOX_SIZE[size]
  const iconPx = ICON_SIZE[size]

  /* 터치 영역 패딩: tight 모드에서는 수평 1px, 수직 3px */
  const padH = tight ? '1px' : '3px'
  const padV = '3px'

  const wrapperStyle = {
    display:    'flex',
    gap:        'var(--spacing-8)',
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
    padding:        `${padV} ${padH}`,
    position:       'relative',
    flexShrink:     0,
  }

  const boxStyle = {
    width:           `${boxPx}px`,
    height:          `${boxPx}px`,
    borderRadius:    '5px',
    border:          `1.5px solid ${isActive ? 'var(--color-primary-normal)' : 'var(--color-line-normal)'}`,
    backgroundColor: isActive ? 'var(--color-primary-normal)' : 'transparent',
    display:         'flex',
    alignItems:      'center',
    justifyContent:  'center',
    flexShrink:      0,
    boxSizing:       'border-box',
  }

  const labelStyle = {
    flex:          '1 0 0',
    fontSize:      'var(--font-size-body-2)',
    fontWeight:    bold ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
    lineHeight:    'var(--line-height-body-2-normal)',
    letterSpacing: 'var(--letter-spacing-body-2)',
    color:         'var(--color-label-normal)',
    paddingTop:    '1px',
    paddingBottom: '1px',
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
      aria-checked={isIndeterminate ? 'mixed' : isChecked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div style={controlStyle}>
        <div style={boxStyle}>
          {isChecked && (
            <Icon
              name="check"
              size={iconPx}
              color="var(--color-static-white)"
            />
          )}
          {isIndeterminate && (
            <Icon
              name="lineHorizontal"
              size={iconPx}
              color="var(--color-static-white)"
            />
          )}
        </div>
      </div>

      {label && (
        <div style={{ flex: '1 0 0', display: 'flex', alignItems: 'flex-start', minWidth: 0 }}>
          <span style={labelStyle}>{label}</span>
        </div>
      )}
    </div>
  )
}

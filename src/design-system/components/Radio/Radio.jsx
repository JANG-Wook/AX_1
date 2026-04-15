/**
 * Radio 컴포넌트
 *
 * Props:
 *  checked   — true | false                기본: false
 *  size      — 'medium' | 'small'          기본: 'medium'
 *              medium: 박스 20×20px (터치 영역 24×24px)
 *              small:  박스 16×16px (터치 영역 20×20px)
 *  tight     — true | false  좌우 padding 축소  기본: false
 *  disabled  — true | false                기본: false
 *  label     — 라벨 텍스트. 없으면 숨김
 *  onChange  — 클릭/변경 핸들러 () => void
 *  className — 추가 클래스
 *
 * 사용 예:
 *  <Radio label="옵션 A" onChange={() => setSelected('A')} />
 *  <Radio checked label="선택된 옵션" />
 *  <Radio size="small" label="소형 라디오" />
 *  <Radio disabled label="비활성" />
 *
 * 그룹 사용 예:
 *  {options.map(opt => (
 *    <Radio
 *      key={opt.value}
 *      checked={selected === opt.value}
 *      label={opt.label}
 *      onChange={() => setSelected(opt.value)}
 *    />
 *  ))}
 */

const BOX_SIZE = {
  medium: 20,
  small:  16,
}

/* 체크 내부 흰 점 크기 (박스 - border 3px - inner-padding 4px) */
const DOT_SIZE = {
  medium: 8,
  small:  6,
}

export default function Radio({
  checked   = false,
  size      = 'medium',
  tight     = false,
  disabled  = false,
  label     = '',
  onChange  = null,
  className = '',
}) {
  const boxPx = BOX_SIZE[size]
  const dotPx = DOT_SIZE[size]

  /* 터치 영역 패딩: tight 모드에서는 수평 1px, 수직 2px */
  const padH = tight ? '1px' : '2px'
  const padV = '2px'

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
    borderRadius:    '9999px',
    border:          `1.5px solid ${checked ? 'var(--color-primary-normal)' : 'var(--color-line-normal)'}`,
    backgroundColor: checked ? 'var(--color-primary-normal)' : 'transparent',
    display:         'flex',
    alignItems:      'center',
    justifyContent:  'center',
    flexShrink:      0,
    boxSizing:       'border-box',
    padding:         checked ? '2px' : 0,
  }

  const dotStyle = {
    width:           `${dotPx}px`,
    height:          `${dotPx}px`,
    borderRadius:    '9999px',
    backgroundColor: 'var(--color-static-white)',
    flexShrink:      0,
  }

  const labelStyle = {
    flex:          '1 0 0',
    fontSize:      'var(--font-size-body-2)',
    fontWeight:    'var(--font-weight-regular)',
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
      role="radio"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div style={controlStyle}>
        <div style={boxStyle}>
          {checked && <div style={dotStyle} />}
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

/**
 * IconButtonSolid 컴포넌트 (Button/Icon/Solid)
 *
 * 아이콘을 통해 강조되어야 할 주요 액션에 사용합니다.
 * 높은 시각 위계를 가집니다. 배경색과 아이콘 색상을 자유롭게 변경할 수 있습니다.
 *
 * Props:
 *  icon            — 표시할 아이콘 (ReactNode)                   필수
 *  size            — 'medium' | 'small' | 'custom'               기본: 'medium'
 *  customSize      — size='custom'일 때 버튼 전체 크기 (px 숫자) 기본: 28
 *  color           — 아이콘 색상 (CSS 변수 문자열)               기본: 'var(--color-static-white)'
 *  backgroundColor — 배경 색상 (CSS 변수 문자열)                 기본: 'var(--color-primary-normal)'
 *  disabled        — 비활성화 여부                               기본: false
 *  onClick         — 클릭 핸들러
 *  aria-label      — 스크린리더용 레이블 (필수)
 *  className       — 추가 클래스
 *
 * 사용 예:
 *  <IconButtonSolid icon={<PlusIcon />} aria-label="추가" />
 *  <IconButtonSolid icon={<EditIcon />} size="small" aria-label="편집" />
 *  <IconButtonSolid
 *    icon={<HeartIcon />}
 *    size="custom"
 *    customSize={36}
 *    backgroundColor="var(--color-status-negative)"
 *    aria-label="좋아요"
 *  />
 */

/* ── 사이즈 프리셋 (Outlined와 동일) ────────────────────────── */
const SIZE_PRESET = {
  medium: {
    buttonSize: 'var(--spacing-40)',
    padding:    'var(--spacing-10)',
  },
  small: {
    buttonSize: 'var(--spacing-32)',
    padding:    'var(--spacing-8)',
  },
}

export default function IconButtonSolid({
  icon,
  size            = 'medium',
  customSize      = 28,
  color           = 'var(--color-static-white)',
  backgroundColor = 'var(--color-primary-normal)',
  disabled        = false,
  onClick,
  className,
  ...props
}) {
  const isCustom = size === 'custom'

  const resolvedButtonSize = isCustom
    ? `${customSize}px`
    : SIZE_PRESET[size]?.buttonSize ?? SIZE_PRESET.medium.buttonSize

  const resolvedPadding = isCustom
    ? `${Math.round(customSize * 0.2)}px`
    : SIZE_PRESET[size]?.padding ?? SIZE_PRESET.medium.padding

  const buttonStyle = {
    display:         'inline-flex',
    alignItems:      'center',
    justifyContent:  'center',
    width:           resolvedButtonSize,
    height:          resolvedButtonSize,
    padding:         resolvedPadding,
    backgroundColor,
    border:          'none',
    borderRadius:    '50%',
    cursor:          disabled ? 'not-allowed' : 'pointer',
    opacity:         disabled ? 0.32 : 1,
    color,
    flexShrink:      0,
    boxSizing:       'border-box',
    overflow:        'hidden',
    transition:      'opacity 0.15s ease',
    outline:         'none',
    userSelect:      'none',
  }

  const iconWrapStyle = {
    display:    'flex',
    alignItems: 'center',
    width:      '100%',
    height:     '100%',
    flexShrink: 0,
  }

  return (
    <button
      type="button"
      className={className}
      style={buttonStyle}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      {...props}
    >
      <span style={iconWrapStyle} aria-hidden="true">
        {icon}
      </span>
    </button>
  )
}

/**
 * TextButton 컴포넌트
 *
 * 배경색이나 테두리가 없는 버튼으로, 텍스트만으로 구성됩니다.
 * 부가적이나 강조가 필요한 행동에 사용합니다. 낮은 시각 위계를 가집니다.
 *
 * Props:
 *  color        — 'primary' | 'assistive'                         기본: 'primary'
 *  size         — 'medium' | 'small'                              기본: 'medium'
 *  label        — 버튼 텍스트
 *  leadingIcon  — 텍스트 앞 아이콘 (ReactNode)
 *  trailingIcon — 텍스트 뒤 아이콘 (ReactNode)
 *  disabled     — 비활성화 여부                                   기본: false
 *  loading      — 로딩 상태 (스피너 표시, 클릭 차단)             기본: false
 *  onClick      — 클릭 핸들러
 *  className    — 추가 클래스
 *
 * 사용 예:
 *  <TextButton label="더 보기" />
 *  <TextButton color="assistive" label="닫기" />
 *  <TextButton size="small" leadingIcon={<Icon />} label="추가" />
 *  <TextButton loading label="처리 중" />
 *  <TextButton disabled label="비활성화" />
 */

import Spinner from '../Spinner/Spinner'

/* ── 사이즈별 스펙 ────────────────────────────────────────────── */
const SIZE = {
  medium: {
    paddingTop:    'var(--spacing-4)',
    paddingBottom: 'var(--spacing-4)',
    fontSize:      'var(--font-size-body-1)',
    lineHeight:    'var(--line-height-body-1-normal)',
    iconSize:      20,
    gap:           'var(--spacing-4)',
    spinnerSize:   16,
  },
  small: {
    paddingTop:    'var(--spacing-4)',
    paddingBottom: 'var(--spacing-4)',
    fontSize:      'var(--font-size-label-1)',
    lineHeight:    'var(--line-height-label-1-normal)',
    iconSize:      16,
    gap:           'var(--spacing-4)',
    spinnerSize:   14,
  },
}

/* ── color별 색상 스펙 ───────────────────────────────────────── */
const COLOR_SCHEME = {
  primary: {
    color:        'var(--color-primary-normal)',
    spinnerColor: 'var(--color-primary-normal)',
  },
  assistive: {
    color:        'var(--color-label-alternative)',
    spinnerColor: 'var(--color-label-alternative)',
  },
}

export default function TextButton({
  color        = 'primary',
  size         = 'medium',
  label,
  leadingIcon  = null,
  trailingIcon = null,
  disabled     = false,
  loading      = false,
  onClick,
  className,
  ...props
}) {
  const sz     = SIZE[size]     ?? SIZE.medium
  const scheme = COLOR_SCHEME[color] ?? COLOR_SCHEME.primary

  const isDisabled = disabled || loading

  const buttonStyle = {
    display:         'inline-flex',
    alignItems:      'center',
    justifyContent:  'center',
    gap:             sz.gap,
    position:        'relative',
    paddingTop:      sz.paddingTop,
    paddingBottom:   sz.paddingBottom,
    paddingLeft:     0,
    paddingRight:    0,
    backgroundColor: 'transparent',
    border:          'none',
    color:           scheme.color,
    fontWeight:      'var(--font-weight-semibold)',
    fontSize:        sz.fontSize,
    lineHeight:      sz.lineHeight,
    cursor:          isDisabled ? 'not-allowed' : 'pointer',
    opacity:         disabled ? 0.32 : 1,
    whiteSpace:      'nowrap',
    userSelect:      'none',
    outline:         'none',
    fontFamily:      'inherit',
    boxSizing:       'border-box',
    transition:      'opacity 0.15s ease',
  }

  const iconWrapStyle = {
    display:    'flex',
    alignItems: 'center',
    width:      `${sz.iconSize}px`,
    height:     `${sz.iconSize}px`,
    flexShrink: 0,
  }

  return (
    <button
      type="button"
      className={className}
      style={buttonStyle}
      disabled={isDisabled}
      onClick={!isDisabled ? onClick : undefined}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <Spinner
          size={sz.spinnerSize}
          color={scheme.spinnerColor}
          trackColor="transparent"
        />
      ) : (
        <>
          {leadingIcon && (
            <span style={iconWrapStyle} aria-hidden="true">
              {leadingIcon}
            </span>
          )}

          {label && <span>{label}</span>}

          {trailingIcon && (
            <span style={iconWrapStyle} aria-hidden="true">
              {trailingIcon}
            </span>
          )}
        </>
      )}
    </button>
  )
}

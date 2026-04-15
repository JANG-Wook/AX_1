/**
 * Textfield 컴포넌트
 *
 * Props:
 *  status          — 'normal' | 'positive' | 'negative'  기본: 'normal'
 *  disabled        — true | false                         기본: false
 *  heading         — 라벨 텍스트. 없으면 라벨 숨김
 *  required        — true 시 라벨 옆 * 배지 표시          기본: false
 *  description     — 하단 설명 텍스트. 없으면 숨김
 *  placeholder     — 입력 placeholder 문자열
 *  icon            — leading Icon name (Icon 컴포넌트 name prop)
 *  trailingContent — trailing 영역 커스텀 ReactNode
 *  className       — 추가 클래스
 *  ...props        — <input> 에 전달
 *
 * 사용 예:
 *  <Textfield placeholder="입력하세요" />
 *  <Textfield heading="이름" required description="실명을 입력해 주세요" />
 *  <Textfield status="negative" description="올바르지 않은 형식입니다" />
 *  <Textfield heading="검색" icon="search" />
 */

import Icon from '../Icon/Icon'

const BORDER_COLOR = {
  normal:   'var(--color-line-neutral)',
  positive: 'var(--color-status-positive)',
  negative: 'var(--color-status-negative)',
}

export default function Textfield({
  status       = 'normal',
  disabled     = false,
  heading      = '',
  required     = false,
  description  = '',
  placeholder  = '',
  icon         = '',
  trailingContent = null,
  className    = '',
  ...props
}) {
  const containerStyle = {
    display:       'flex',
    flexDirection: 'column',
    gap:           'var(--spacing-8)',
  }

  const inputBoxStyle = {
    display:        'flex',
    alignItems:     'center',
    gap:            'var(--spacing-8)',
    padding:        'var(--spacing-12)',
    borderRadius:   'var(--spacing-12)',
    border:         `1px solid ${disabled ? 'var(--color-line-neutral)' : BORDER_COLOR[status]}`,
    backgroundColor: disabled
      ? 'var(--color-fill-alternative)'
      : 'var(--color-bg-transparent)',
    backdropFilter: 'blur(32px)',
    boxShadow:      disabled ? 'none' : 'var(--shadow-normal-xsmall)',
    opacity:        disabled ? 0.4 : 1,
  }

  const inputStyle = {
    flex:            1,
    border:          'none',
    outline:         'none',
    background:      'transparent',
    fontFamily:      'var(--font-family-base)',
    fontSize:        'var(--font-size-body-1)',
    fontWeight:      'var(--font-weight-regular)',
    lineHeight:      'var(--line-height-body-1-normal)',
    letterSpacing:   'var(--letter-spacing-body-1)',
    color:           'var(--color-label-normal)',
    caretColor:      'var(--color-primary-normal)',
  }

  const headingStyle = {
    display:        'flex',
    alignItems:     'center',
    gap:            'var(--spacing-4)',
    fontSize:       'var(--font-size-label-1)',
    fontWeight:     'var(--font-weight-semibold)',
    lineHeight:     'var(--line-height-label-1-normal)',
    letterSpacing:  'var(--letter-spacing-label-1)',
    color:          'var(--color-label-neutral)',
  }

  const requiredStyle = {
    color:      'var(--color-status-negative)',
    fontSize:   'var(--font-size-label-1)',
    fontWeight: 'var(--font-weight-semibold)',
    lineHeight: 1,
  }

  const descriptionStyle = {
    fontSize:      'var(--font-size-caption-1)',
    fontWeight:    'var(--font-weight-regular)',
    lineHeight:    'var(--line-height-caption-1)',
    letterSpacing: 'var(--letter-spacing-caption-1)',
    color: status === 'negative' && !disabled
      ? 'var(--color-status-negative)'
      : status === 'positive' && !disabled
        ? 'var(--color-status-positive)'
        : 'var(--color-label-alternative)',
  }

  return (
    <div style={containerStyle} className={className}>
      {heading && (
        <div style={headingStyle}>
          <span>{heading}</span>
          {required && <span style={requiredStyle} aria-label="필수">*</span>}
        </div>
      )}

      <div style={inputBoxStyle}>
        {icon && (
          <Icon
            name={icon}
            size={20}
            color={disabled ? 'var(--color-label-disable)' : 'var(--color-label-alternative)'}
          />
        )}

        <input
          style={inputStyle}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={status === 'negative'}
          aria-required={required}
          {...props}
        />

        {trailingContent && (
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            {trailingContent}
          </div>
        )}
      </div>

      {description && (
        <span style={descriptionStyle}>{description}</span>
      )}
    </div>
  )
}

/**
 * SegmentedControl 컴포넌트
 *
 * 여러 옵션 중 하나를 선택할 수 있으며, 선택된 항목을 화면에 표시합니다.
 *
 * Props:
 *  variant   — 'solid' | 'outlined'           기본: 'solid'
 *              solid:    채워진 배경 트랙, 활성 세그먼트는 흰 카드 knob
 *              outlined: 테두리 트랙, 활성 세그먼트는 primary 색조 하이라이트
 *  size      — 'large' | 'medium' | 'small'   기본: 'large'
 *              large:  트랙 48px, track-radius 12px
 *              medium: 트랙 40px, track-radius 10px
 *              small:  트랙 32px, track-radius 8px
 *  items     — Array<{ label: string, icon?: string }>   2~6개
 *  value     — 활성 세그먼트 인덱스 (0-based)
 *  onChange  — (index: number) => void
 *  className — 추가 클래스
 *
 * 사용 예:
 *  <SegmentedControl
 *    items={[{ label: '전체' }, { label: '진행 중' }, { label: '완료' }]}
 *    value={selected}
 *    onChange={setSelected}
 *  />
 *  <SegmentedControl variant="outlined" size="medium" items={[...]} value={0} onChange={fn} />
 *  <SegmentedControl items={[{ label: '홈', icon: 'home' }, { label: '검색', icon: 'search' }]} value={0} onChange={fn} />
 */

import Icon from '../Icon/Icon'

const SIZES = {
  large: {
    trackH:      48,
    trackPad:    3,
    trackRadius: 12,
    knobRadius:  10,
    segPad:      9,
    iconSize:    20,
    fontSize:        'var(--font-size-headline-2)',
    fontWeight:      'var(--font-weight-medium)',
    lineHeight:      'var(--line-height-headline-2)',
    letterSpacing:   'var(--letter-spacing-headline-2)',
  },
  medium: {
    trackH:      40,
    trackPad:    2,
    trackRadius: 10,
    knobRadius:  8,
    segPad:      9,
    iconSize:    18,
    fontSize:        'var(--font-size-body-2)',
    fontWeight:      'var(--font-weight-medium)',
    lineHeight:      'var(--line-height-body-2-normal)',
    letterSpacing:   'var(--letter-spacing-body-2)',
  },
  small: {
    trackH:      32,
    trackPad:    2,
    trackRadius: 8,
    knobRadius:  6,
    segPad:      9,
    iconSize:    16,
    fontSize:        'var(--font-size-label-2)',
    fontWeight:      'var(--font-weight-medium)',
    lineHeight:      'var(--line-height-label-2)',
    letterSpacing:   'var(--letter-spacing-label-2)',
  },
}

export default function SegmentedControl({
  variant   = 'solid',
  size      = 'large',
  items     = [],
  value     = 0,
  onChange  = null,
  className = '',
}) {
  const {
    trackH, trackPad, trackRadius, knobRadius, segPad, iconSize,
    fontSize, fontWeight, lineHeight, letterSpacing,
  } = SIZES[size]

  const isSolid    = variant === 'solid'
  const isOutlined = variant === 'outlined'

  /* ── 트랙 스타일 ── */
  const trackStyle = {
    display:         'flex',
    alignItems:      'center',
    height:          `${trackH}px`,
    width:           '100%',
    padding:         `${trackPad}px`,
    boxSizing:       'border-box',
    borderRadius:    `${trackRadius}px`,
    position:        'relative',
    flexShrink:      0,
    ...(isSolid && {
      backgroundColor: 'var(--color-fill-normal)',
    }),
    ...(isOutlined && {
      border:     '1px solid var(--color-line-normal)',
      overflow:   'hidden',
    }),
  }

  /* ── 세그먼트별 렌더 ── */
  const renderSegment = (item, idx) => {
    const isActive = idx === value
    const isLast   = idx === items.length - 1

    const handleClick = () => {
      if (onChange) onChange(idx)
    }

    const handleKeyDown = (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        handleClick()
      }
    }

    /* 세그먼트 래퍼 */
    const segWrapStyle = {
      flex:            '1 0 0',
      height:          '100%',
      display:         'flex',
      alignItems:      'center',
      justifyContent:  'center',
      position:        'relative',
      cursor:          'pointer',
      userSelect:      'none',
    }

    /* 세그먼트 내부 (패딩 + 컨텐츠) */
    const segInnerStyle = {
      flex:            '1 0 0',
      height:          '100%',
      display:         'flex',
      alignItems:      'center',
      justifyContent:  'center',
      padding:         `${segPad}px`,
      position:        'relative',
      minWidth:        0,
    }

    /* 텍스트 스타일 */
    const textStyle = {
      fontSize,
      fontWeight,
      lineHeight,
      letterSpacing,
      color:       isActive
        ? (isSolid ? 'var(--color-label-normal)' : 'var(--color-primary-normal)')
        : 'var(--color-label-alternative)',
      overflow:    'hidden',
      textOverflow:'ellipsis',
      whiteSpace:  'nowrap',
      position:    'relative',
    }

    return (
      <div
        key={idx}
        style={segWrapStyle}
        role="tab"
        aria-selected={isActive}
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <div style={segInnerStyle}>

          {/* ── Solid: 활성 knob 배경 ── */}
          {isSolid && isActive && (
            <div
              aria-hidden="true"
              style={{
                position:        'absolute',
                inset:           0,
                backgroundColor: 'var(--color-bg-elevated)',
                borderRadius:    `${knobRadius}px`,
                boxShadow:       'var(--shadow-segment-knob)',
              }}
            />
          )}

          {/* ── Outlined: 활성 하이라이트 배경 ── */}
          {isOutlined && isActive && (
            <>
              <div
                aria-hidden="true"
                style={{
                  position:        'absolute',
                  inset:           0,
                  backgroundColor: 'var(--color-primary-normal)',
                  opacity:         0.05,
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset:    0,
                  border:   '1px solid var(--color-primary-normal)',
                  opacity:  0.43,
                }}
              />
            </>
          )}

          {/* ── Outlined: 비활성 세그먼트 우측 구분선 (마지막 제외) ── */}
          {isOutlined && !isActive && !isLast && (
            <div
              aria-hidden="true"
              style={{
                position:    'absolute',
                top:         '1px',
                bottom:      '1px',
                right:       0,
                left:        0,
                borderRight: '1px solid var(--color-line-normal)',
                pointerEvents: 'none',
              }}
            />
          )}

          {/* ── 컨텐츠: 아이콘 + 텍스트 ── */}
          <div
            style={{
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              gap:            'var(--spacing-4)',
              position:       'relative',
              flex:           '1 0 0',
              minWidth:       0,
              overflow:       'hidden',
            }}
          >
            {item.icon && (
              <Icon
                name={item.icon}
                size={iconSize}
                color={isActive
                  ? (isSolid ? 'var(--color-label-normal)' : 'var(--color-primary-normal)')
                  : 'var(--color-label-alternative)'
                }
              />
            )}
            {item.label && (
              <span style={textStyle}>{item.label}</span>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={className}
      role="tablist"
      style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
    >
      <div style={trackStyle}>
        {items.map((item, idx) => renderSegment(item, idx))}
      </div>
    </div>
  )
}

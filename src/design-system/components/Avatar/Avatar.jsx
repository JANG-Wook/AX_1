/**
 * Avatar 컴포넌트
 *
 * 사용자·기업·기관을 대표하는 프로필 이미지를 표시합니다.
 * src 없으면 variant에 맞는 플레이스홀더 아이콘을 보여줍니다.
 *
 * Props:
 *  variant   — 'person' | 'company' | 'academy'   기본: 'person'
 *              person  : 완전 원형 (border-radius 9999px)
 *              company : 둥근 사각형 (size × 0.25)
 *              academy : 둥근 사각형 (size × 0.25, company와 동일)
 *  size      — 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'   기본: 'medium'
 *              xsmall: 24px  small: 32px  medium: 40px
 *              large: 48px   xlarge: 56px
 *  src       — 이미지 URL. 없으면 플레이스홀더 표시
 *  alt       — 이미지 alt 텍스트                   기본: ''
 *  badge     — ReactNode  우측 하단 배지 슬롯       기본: null
 *  className — 추가 클래스
 *
 * 사용 예:
 *  <Avatar src="/profile.jpg" alt="홍길동" />
 *  <Avatar variant="company" size="large" src="/logo.png" alt="회사명" />
 *  <Avatar variant="person" size="medium" />                {/* 플레이스홀더 */}
 *  <Avatar src="/img.jpg" badge={<OnlineDot />} />          {/* 배지 슬롯 */}
 */

import Icon from '../Icon/Icon'

const SIZES = {
  xsmall: { px: 24 },
  small:  { px: 32 },
  medium: { px: 40 },
  large:  { px: 48 },
  xlarge: { px: 56 },
}

export default function Avatar({
  variant   = 'person',
  size      = 'medium',
  src       = '',
  alt       = '',
  badge     = null,
  className = '',
}) {
  const { px } = SIZES[size]

  const isPerson = variant === 'person'
  const borderRadius = isPerson ? '9999px' : `${px * 0.25}px`

  const iconSize = Math.round(px * 0.5)

  const outerStyle = {
    position:   'relative',
    display:    'inline-flex',
    flexShrink: 0,
    width:      `${px}px`,
    height:     `${px}px`,
  }

  const containerStyle = {
    width:           '100%',
    height:          '100%',
    borderRadius,
    overflow:        'hidden',
    display:         'flex',
    alignItems:      'center',
    justifyContent:  'center',
    backgroundColor: src
      ? 'var(--color-static-white)'
      : 'var(--color-fill-normal)',
    border:          '1px solid var(--color-line-alternative)',
    boxSizing:       'border-box',
    flexShrink:      0,
    position:        'relative',
  }

  const imgStyle = {
    position:  'absolute',
    inset:     0,
    width:     '100%',
    height:    '100%',
    objectFit: 'cover',
    display:   'block',
  }

  /* 배지 앵커: 우측 하단 꼭짓점에 size=0 div, 콘텐츠가 overflow */
  const badgeAnchorStyle = {
    position: 'absolute',
    right:    0,
    bottom:   0,
    width:    0,
    height:   0,
  }

  const placeholderIcon = isPerson ? 'personFill' : 'companyFill'

  return (
    <div style={outerStyle} className={className}>
      <div style={containerStyle}>
        {src ? (
          <img
            src={src}
            alt={alt}
            style={imgStyle}
            draggable={false}
          />
        ) : (
          <Icon
            name={placeholderIcon}
            size={iconSize}
            color="var(--color-label-disable)"
          />
        )}
      </div>

      {badge && (
        <div aria-hidden="true" style={badgeAnchorStyle}>
          {badge}
        </div>
      )}
    </div>
  )
}

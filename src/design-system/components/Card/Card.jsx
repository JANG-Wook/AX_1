/**
 * Card 컴포넌트
 *
 * 일반적인 상황에서 정보를 묶어 표시할 때 사용합니다.
 *
 * Props:
 *  platform       — 'desktop' | 'mobile'     기본: 'desktop'
 *                   desktop: 외부 gap 8px, 썸네일 3/2 비율, 제목 body-1/semibold
 *                   mobile:  외부 gap 6px, 썸네일 4/3 비율, 제목 body-2/semibold
 *  src            — 썸네일 이미지 URL          기본: ''
 *  alt            — 이미지 alt 텍스트          기본: ''
 *  title          — 카드 제목                  기본: ''
 *  caption        — 캡션 텍스트 (있으면 표시)   기본: ''
 *  extraCaption   — 추가 캡션 (있으면 표시)     기본: ''
 *  thumbnailOverlay — 썸네일 오버레이 표시      기본: true
 *  overlayCaption — 오버레이 위 캡션 텍스트     기본: ''
 *  saved          — 북마크 활성 상태            기본: false
 *  onToggleSave   — 북마크 토글 콜백 () => void
 *  skeleton       — 스켈레톤 로딩 상태          기본: false
 *  topContent     — ReactNode  제목 위 슬롯    기본: null
 *  bottomContent  — ReactNode  캡션 아래 슬롯  기본: null
 *  className      — 추가 클래스
 *
 * 사용 예:
 *  <Card src="/img.jpg" title="제목" caption="캡션" />
 *  <Card platform="mobile" src="/img.jpg" title="제목" caption="캡션" />
 *  <Card src="/img.jpg" title="제목" saved onToggleSave={toggle} />
 *  <Card src="/img.jpg" title="제목" overlayCaption="D-3" thumbnailOverlay />
 *  <Card src="/img.jpg" title="제목" bottomContent={<Badge />} />
 *  <Card skeleton />
 */

import Icon from '../Icon/Icon'

const PLATFORM = {
  desktop: {
    outerGap:          'var(--spacing-8)',
    thumbnailRatio:    '3/2',
    overlayPadding:    '14px',
    titleFontSize:     'var(--font-size-body-1)',
    titleLineHeight:   'var(--line-height-body-1-normal)',
    titleLetterSpacing:'var(--letter-spacing-body-1)',
    overlayCaptionSize:'var(--font-size-label-2)',
    overlayCaptionLH:  'var(--line-height-label-2)',
    overlayCaptionLS:  'var(--letter-spacing-label-2)',
    toggleIconSize:    24,
    containerPaddingX: 'var(--spacing-6)',
  },
  mobile: {
    outerGap:          'var(--spacing-6)',
    thumbnailRatio:    '4/3',
    overlayPadding:    '10px',
    titleFontSize:     'var(--font-size-body-2)',
    titleLineHeight:   'var(--line-height-body-2-normal)',
    titleLetterSpacing:'var(--letter-spacing-body-2)',
    overlayCaptionSize:'var(--font-size-caption-1)',
    overlayCaptionLH:  'var(--line-height-caption-1)',
    overlayCaptionLS:  'var(--letter-spacing-caption-1)',
    toggleIconSize:    20,
    containerPaddingX: '0px',
  },
}

export default function Card({
  platform        = 'desktop',
  src             = '',
  alt             = '',
  title           = '',
  caption         = '',
  extraCaption    = '',
  thumbnailOverlay = true,
  overlayCaption  = '',
  saved           = false,
  onToggleSave    = null,
  skeleton        = false,
  topContent      = null,
  bottomContent   = null,
  className       = '',
}) {
  const p = PLATFORM[platform] ?? PLATFORM.desktop

  /* ── 외부 래퍼 ── */
  const outerStyle = {
    display:       'flex',
    flexDirection: 'column',
    gap:           p.outerGap,
    alignItems:    'flex-start',
    width:         '100%',
  }

  /* ── 썸네일 래퍼 ── */
  const thumbWrapStyle = {
    position:     'relative',
    width:        '100%',
    aspectRatio:  p.thumbnailRatio,
    borderRadius: '12px',
    overflow:     'hidden',
    flexShrink:   0,
    backgroundColor: 'var(--color-fill-normal)',
  }

  const imgStyle = {
    position:   'absolute',
    inset:      0,
    width:      '100%',
    height:     '100%',
    objectFit:  'cover',
    display:    'block',
  }

  /* ── 오버레이 ── */
  const overlayStyle = {
    position:  'absolute',
    inset:     0,
    top:       0,
    left:      0,
    right:     0,
    padding:   p.overlayPadding,
    display:   'flex',
    gap:       'var(--spacing-4)',
    alignItems:'flex-start',
  }

  const gradientStyle = {
    position:   'absolute',
    inset:      0,
    background: 'linear-gradient(to bottom, var(--color-static-black), transparent)',
    opacity:    0.35,
    pointerEvents: 'none',
  }

  const overlayCaptionStyle = {
    flex:          '1 0 0',
    fontSize:      p.overlayCaptionSize,
    fontWeight:    'var(--font-weight-semibold)',
    lineHeight:    p.overlayCaptionLH,
    letterSpacing: p.overlayCaptionLS,
    color:         'var(--color-static-white)',
    textShadow:    'var(--shadow-text-overlay)',
    minWidth:      0,
  }

  /* ── 썸네일 내부 border ── */
  const thumbBorderStyle = {
    position:     'absolute',
    inset:        0,
    border:       '1px solid var(--color-line-alternative)',
    borderRadius: '12px',
    pointerEvents:'none',
  }

  /* ── 정보 컨테이너 ── */
  const infoStyle = {
    display:       'flex',
    flexDirection: 'column',
    gap:           'var(--spacing-6)',
    alignItems:    'flex-start',
    paddingLeft:   p.containerPaddingX,
    paddingRight:  p.containerPaddingX,
    width:         '100%',
    flexShrink:    0,
  }

  /* ── 텍스트 블록 ── */
  const contentStyle = {
    display:       'flex',
    flexDirection: 'column',
    gap:           'var(--spacing-4)',
    alignItems:    'flex-start',
    width:         '100%',
    flexShrink:    0,
  }

  const titleStyle = {
    fontSize:      p.titleFontSize,
    fontWeight:    'var(--font-weight-semibold)',
    lineHeight:    p.titleLineHeight,
    letterSpacing: p.titleLetterSpacing,
    color:         'var(--color-label-normal)',
    width:         '100%',
  }

  const captionStyle = {
    fontSize:      'var(--font-size-label-2)',
    fontWeight:    'var(--font-weight-medium)',
    lineHeight:    'var(--line-height-label-2)',
    letterSpacing: 'var(--letter-spacing-label-2)',
    color:         'var(--color-label-alternative)',
    width:         '100%',
  }

  /* ── 스켈레톤 rect 스타일 ── */
  const skeletonRect = (width = '100%', height = '16px') => ({
    backgroundColor: 'var(--color-fill-normal)',
    borderRadius:    '4px',
    width,
    height,
    flexShrink:      0,
  })

  /* ── 북마크 토글 ── */
  const handleSaveClick = (e) => {
    e.stopPropagation()
    if (onToggleSave) onToggleSave()
  }

  const toggleBtnStyle = {
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    flexShrink:     0,
    background:     'none',
    border:         'none',
    padding:        0,
    cursor:         onToggleSave ? 'pointer' : 'default',
  }

  return (
    <div style={outerStyle} className={className}>

      {/* ── 썸네일 영역 ── */}
      <div style={thumbWrapStyle}>
        {!skeleton && src && (
          <img src={src} alt={alt} style={imgStyle} draggable={false} />
        )}

        {/* 오버레이 */}
        {!skeleton && thumbnailOverlay && (
          <div style={overlayStyle}>
            {/* 그라데이션 */}
            <div aria-hidden="true" style={gradientStyle} />

            {/* 오버레이 캡션 */}
            {overlayCaption && (
              <span style={overlayCaptionStyle}>{overlayCaption}</span>
            )}

            {/* 북마크 토글 아이콘 */}
            {(onToggleSave !== null || saved) && (
              <button
                type="button"
                aria-label={saved ? '북마크 해제' : '북마크'}
                aria-pressed={saved}
                style={toggleBtnStyle}
                onClick={handleSaveClick}
              >
                <Icon
                  name={saved ? 'bookmarkFill' : 'bookmark'}
                  size={p.toggleIconSize}
                  color="var(--color-static-white)"
                />
              </button>
            )}
          </div>
        )}

        {/* 내부 테두리 */}
        <div aria-hidden="true" style={thumbBorderStyle} />
      </div>

      {/* ── 정보 영역 ── */}
      <div style={infoStyle}>
        {topContent && (
          <div style={{ width: '100%', flexShrink: 0 }}>
            {topContent}
          </div>
        )}

        <div style={contentStyle}>
          {skeleton ? (
            <>
              <div style={skeletonRect('70%', '20px')} />
              <div style={skeletonRect('50%', '16px')} />
            </>
          ) : (
            <>
              {title && <span style={titleStyle}>{title}</span>}
              {caption && <span style={captionStyle}>{caption}</span>}
              {extraCaption && <span style={captionStyle}>{extraCaption}</span>}
            </>
          )}
        </div>

        {bottomContent && (
          <div style={{ width: '100%', flexShrink: 0 }}>
            {bottomContent}
          </div>
        )}
      </div>
    </div>
  )
}

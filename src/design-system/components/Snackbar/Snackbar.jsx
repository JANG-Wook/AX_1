/**
 * Snackbar 컴포넌트
 *
 * 간단한 메시지와 상호작용을 안내하는 스낵바입니다.
 * 유리모피즘 배경에 메시지 + 선택적 아이콘 / 액션 버튼 / 닫기 버튼을 제공합니다.
 *
 * Props:
 *  message      — 메인 텍스트 (string)                              필수
 *  description  — 보조 설명 텍스트 (string)                         선택
 *  icon         — 왼쪽 아이콘 슬롯 (ReactNode)                      선택
 *  actionLabel  — 오른쪽 텍스트 버튼 레이블 (string)                 선택
 *  onAction     — 액션 버튼 클릭 핸들러 (() => void)                 선택
 *  onClose      — 제공 시 X 닫기 버튼 표시 (() => void)              선택
 *  className    — 추가 클래스
 *
 * 사용 예:
 *  <Snackbar message="저장되었습니다" actionLabel="실행 취소" onAction={handleUndo} />
 *  <Snackbar message="메시지" description="보조 설명" onClose={handleClose} />
 *  <Snackbar message="알림" icon={<Icon />} actionLabel="확인" onAction={fn} onClose={fn} />
 */

/* ── 닫기 아이콘 SVG ────────────────────────────────────────── */
function XIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5L15 15M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ── 메인 컴포넌트 ──────────────────────────────────────────── */
export default function Snackbar({
  message      = '',
  description,
  icon,
  actionLabel,
  onAction,
  onClose,
  className    = '',
}) {
  const outerStyle = {
    position:             'relative',
    display:              'inline-flex',
    alignItems:           'flex-start',
    overflow:             'hidden',
    paddingTop:           '11px',
    paddingBottom:        '11px',
    paddingLeft:          'var(--spacing-16)',
    paddingRight:         'var(--spacing-16)',
    borderRadius:         '12px',
    maxWidth:             '420px',
    backdropFilter:       'blur(32px)',
    WebkitBackdropFilter: 'blur(32px)',
    boxSizing:            'border-box',
  }

  const containerStyle = {
    display:    'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap:        'var(--spacing-12)',
    minHeight:  '32px',
    flex:       '1 0 0',
    minWidth:   0,
    position:   'relative',
  }

  const contentStyle = {
    display:    'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap:        'var(--spacing-8)',
    flex:       '1 0 0',
    minWidth:   0,
    position:   'relative',
  }

  const messageStyle = {
    display:        'flex',
    flexDirection:  'column',
    alignItems:     'flex-start',
    justifyContent: 'center',
    flex:           '1 0 0',
    minWidth:       0,
    paddingTop:     '5px',
    paddingBottom:  '5px',
    paddingLeft:    'var(--spacing-2)',
    paddingRight:   'var(--spacing-2)',
    position:       'relative',
  }

  const headingStyle = {
    fontSize:      'var(--font-size-body-2)',
    lineHeight:    'var(--line-height-body-2-normal)',
    letterSpacing: 'var(--letter-spacing-body-2)',
    fontWeight:    'var(--font-weight-semibold)',
    color:         'var(--color-static-white)',
    opacity:       0.88,
    width:         '100%',
    flexShrink:    0,
    position:      'relative',
  }

  const descriptionStyle = {
    fontSize:      'var(--font-size-label-2)',
    lineHeight:    'var(--line-height-label-2)',
    letterSpacing: 'var(--letter-spacing-label-2)',
    fontWeight:    'var(--font-weight-regular)',
    color:         'var(--color-static-white)',
    opacity:       0.88,
    width:         '100%',
    flexShrink:    0,
    overflow:      'hidden',
    textOverflow:  'ellipsis',
    whiteSpace:    'nowrap',
    position:      'relative',
  }

  const actionStyle = {
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'flex-end',
    paddingLeft:    'var(--spacing-2)',
    paddingRight:   'var(--spacing-2)',
    flexShrink:     0,
    position:       'relative',
  }

  const actionBtnStyle = {
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    paddingTop:     'var(--spacing-4)',
    paddingBottom:  'var(--spacing-4)',
    background:     'none',
    border:         'none',
    cursor:         'pointer',
    fontSize:       'var(--font-size-body-2)',
    lineHeight:     'var(--line-height-body-2-normal)',
    letterSpacing:  'var(--letter-spacing-body-2)',
    fontWeight:     'var(--font-weight-semibold)',
    color:          'var(--color-static-white)',
    whiteSpace:     'nowrap',
    flexShrink:     0,
    padding:        0,
    paddingTop:     'var(--spacing-4)',
    paddingBottom:  'var(--spacing-4)',
  }

  const closeBtnStyle = {
    display:        'flex',
    flexDirection:  'column',
    alignItems:     'center',
    justifyContent: 'center',
    padding:        'var(--spacing-2)',
    background:     'none',
    border:         'none',
    cursor:         'pointer',
    color:          'var(--color-static-white)',
    opacity:        0.61,
    flexShrink:     0,
    lineHeight:     0,
  }

  return (
    <div style={outerStyle} className={className} role="alert" aria-live="polite">
      {/* 배경 Layer 1: 역배경 */}
      <div
        style={{
          position:        'absolute',
          inset:           0,
          backgroundColor: 'var(--color-inverse-background)',
          opacity:         0.52,
        }}
        aria-hidden="true"
      />
      {/* 배경 Layer 2: 프라이머리 오버레이 */}
      <div
        style={{
          position:        'absolute',
          inset:           0,
          backgroundColor: 'var(--color-primary-normal)',
          opacity:         0.05,
        }}
        aria-hidden="true"
      />

      {/* 컨텐츠 영역 */}
      <div style={containerStyle}>
        <div style={contentStyle}>
          {/* 선택적 왼쪽 아이콘 */}
          {icon && (
            <div style={{
              display:        'flex',
              alignItems:     'center',
              alignSelf:      'stretch',
              maxHeight:      '40px',
              flexShrink:     0,
              position:       'relative',
            }}>
              {icon}
            </div>
          )}

          {/* 메시지 영역 */}
          <div style={messageStyle}>
            <p style={headingStyle}>{message}</p>
            {description && (
              <p style={descriptionStyle}>{description}</p>
            )}
          </div>
        </div>

        {/* 액션 버튼 */}
        {actionLabel && (
          <div style={actionStyle}>
            <button style={actionBtnStyle} onClick={onAction}>
              {actionLabel}
            </button>
          </div>
        )}

        {/* 닫기 버튼 */}
        {onClose && (
          <button
            style={closeBtnStyle}
            onClick={onClose}
            aria-label="닫기"
          >
            <XIcon />
          </button>
        )}
      </div>
    </div>
  )
}

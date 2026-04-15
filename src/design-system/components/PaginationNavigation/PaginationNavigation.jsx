/**
 * PaginationNavigation 컴포넌트
 *
 * 페이지 위치 표시와 이동을 위한 내비게이션입니다.
 *
 * Props:
 *  count           — 전체 페이지 수                              기본: 1
 *  value           — 현재 인덱스 (0-based)                      기본: 0
 *  onChange        — (index: number) => void
 *  variant         — 'extended' | 'compact' | 'minimize'        기본: 'compact'
 *                    extended:  넓은 레이아웃, leadingContent/trailingContent 슬롯 제공
 *                    compact:   모바일/좁은 레이아웃
 *                    minimize:  < 현재/전체 > 형태의 최소 표시
 *  leadingContent  — ReactNode  왼쪽 절대 슬롯 (extended only)
 *  trailingContent — ReactNode  오른쪽 절대 슬롯 (extended only)
 *  className       — 추가 클래스
 *
 * 사용 예:
 *  <PaginationNavigation count={10} value={2} onChange={setPage} />
 *  <PaginationNavigation count={50} value={24} onChange={setPage} variant="extended" />
 *  <PaginationNavigation count={20} value={9} onChange={setPage} variant="minimize" />
 */

/* ── 윈도우 알고리즘 ──────────────────────────────────────────
 * windowSize=9 (extended): count ≤ 11 이면 전체 표시
 * windowSize=5 (compact):  count ≤ 7  이면 전체 표시
 * 반환값: Array<{ page: number } | { ellipsis: true }>
 */
function getVisiblePages(count, value, windowSize) {
  const total   = Math.max(1, count)
  const current = Math.max(0, Math.min(value, total - 1)) + 1 // 1-indexed

  if (total <= windowSize + 2) {
    return Array.from({ length: total }, (_, i) => ({ page: i + 1 }))
  }

  const half     = Math.floor(windowSize / 2)
  const winStart = Math.max(2, Math.min(current - half, total - windowSize - 1))
  const winEnd   = Math.min(total - 1, winStart + windowSize - 1)

  const items = [{ page: 1 }]
  if (winStart > 2)      items.push({ ellipsis: true })
  for (let p = winStart; p <= winEnd; p++) items.push({ page: p })
  if (winEnd < total - 1) items.push({ ellipsis: true })
  items.push({ page: total })

  return items
}

/* ── 인라인 SVG 아이콘 ─────────────────────────────────────── */
function ChevronLeft({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 3L5 8L10 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronRight({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 3L11 8L6 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ── 공통 스타일 ──────────────────────────────────────────── */
const PAGE_BTN_BASE = {
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'center',
  minWidth:       '20px',
  height:         '30px',
  paddingTop:     'var(--spacing-4)',
  paddingBottom:  'var(--spacing-4)',
  background:     'none',
  border:         'none',
  cursor:         'pointer',
  flexShrink:     0,
  boxSizing:      'border-box',
  fontSize:       'var(--font-size-body-2)',
  lineHeight:     'var(--line-height-body-2-normal)',
  letterSpacing:  'var(--letter-spacing-body-2)',
  textAlign:      'center',
  whiteSpace:     'nowrap',
}

/* ── 서브컴포넌트: 페이지 버튼 ─────────────────────────────── */
function PageButton({ page, isActive, onClick }) {
  return (
    <button
      style={{
        ...PAGE_BTN_BASE,
        color:      isActive ? 'var(--color-label-strong)' : 'var(--color-label-neutral)',
        fontWeight: isActive ? 'var(--font-weight-medium)' : 'var(--font-weight-regular)',
      }}
      onClick={() => onClick?.(page - 1)}
      aria-current={isActive ? 'page' : undefined}
    >
      {page}
    </button>
  )
}

/* ── 서브컴포넌트: 이전/다음 아이콘 버튼 ──────────────────── */
function NavButton({ direction, disabled, iconSize, onClick }) {
  const isLeft    = direction === 'left'
  const color     = disabled
    ? 'var(--color-label-disable)'
    : 'var(--color-label-neutral)'

  return (
    <button
      style={{
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        width:          `${iconSize}px`,
        height:         `${iconSize}px`,
        background:     'none',
        border:         'none',
        cursor:         disabled ? 'not-allowed' : 'pointer',
        color,
        flexShrink:     0,
        padding:        0,
      }}
      disabled={disabled}
      onClick={onClick}
      aria-label={isLeft ? '이전 페이지' : '다음 페이지'}
    >
      {isLeft
        ? <ChevronLeft  size={iconSize} />
        : <ChevronRight size={iconSize} />
      }
    </button>
  )
}

/* ── 서브컴포넌트: 페이지 목록 ─────────────────────────────── */
function PageList({ items, currentPage, onPageClick }) {
  return (
    <div style={{
      display:    'flex',
      alignItems: 'center',
      gap:        'var(--spacing-16)',
    }}>
      {items.map((item, i) =>
        item.ellipsis
          ? (
            <span
              key={`ellipsis-${i}`}
              style={{
                fontSize:      'var(--font-size-body-2)',
                lineHeight:    'var(--line-height-body-2-normal)',
                letterSpacing: 'var(--letter-spacing-body-2)',
                fontWeight:    'var(--font-weight-regular)',
                color:         'var(--color-label-alternative)',
                userSelect:    'none',
              }}
            >
              …
            </span>
          )
          : (
            <PageButton
              key={item.page}
              page={item.page}
              isActive={item.page === currentPage}
              onClick={onPageClick}
            />
          )
      )}
    </div>
  )
}

/* ── 메인 컴포넌트 ──────────────────────────────────────────── */
export default function PaginationNavigation({
  count           = 1,
  value           = 0,
  onChange,
  variant         = 'compact',
  leadingContent,
  trailingContent,
  className       = '',
}) {
  const total      = Math.max(1, count)
  const current    = Math.max(0, Math.min(value, total - 1))
  const currentPage = current + 1 // 1-indexed for display

  const isFirst = current === 0
  const isLast  = current === total - 1

  const goPrev  = () => !isFirst && onChange?.(current - 1)
  const goNext  = () => !isLast  && onChange?.(current + 1)

  /* ── Minimize ─────────────────────────────────────────────── */
  if (variant === 'minimize') {
    return (
      <div
        style={{
          display:    'inline-flex',
          alignItems: 'center',
          gap:        'var(--spacing-12)',
        }}
        className={className}
      >
        <NavButton direction="left"  disabled={isFirst} iconSize={16} onClick={goPrev} />
        <span style={{
          fontSize:      'var(--font-size-label-2)',
          lineHeight:    'var(--line-height-label-2)',
          letterSpacing: 'var(--letter-spacing-label-2)',
          fontWeight:    'var(--font-weight-medium)',
          color:         'var(--color-label-neutral)',
          whiteSpace:    'nowrap',
        }}>
          {currentPage}/{total}
        </span>
        <NavButton direction="right" disabled={isLast}  iconSize={16} onClick={goNext} />
      </div>
    )
  }

  /* ── Compact / Extended 공통 페이지 목록 ────────────────────── */
  const windowSize = variant === 'extended' ? 9 : 5
  const iconSize   = variant === 'extended' ? 16 : 24
  const items      = getVisiblePages(total, current, windowSize)

  const pagesAndNav = (
    <div style={{
      display:    'inline-flex',
      alignItems: 'center',
      gap:        'var(--spacing-4)',
      minHeight:  '32px',
    }}>
      <NavButton direction="left"  disabled={isFirst} iconSize={iconSize} onClick={goPrev} />
      <PageList items={items} currentPage={currentPage} onPageClick={onChange} />
      <NavButton direction="right" disabled={isLast}  iconSize={iconSize} onClick={goNext} />
    </div>
  )

  /* ── Compact ──────────────────────────────────────────────── */
  if (variant === 'compact') {
    return (
      <div
        style={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
        }}
        className={className}
      >
        {pagesAndNav}
      </div>
    )
  }

  /* ── Extended ─────────────────────────────────────────────── */
  return (
    <div
      style={{
        position:       'relative',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        width:          '100%',
      }}
      className={className}
    >
      {leadingContent && (
        <div style={{
          position: 'absolute',
          left:     0,
          top:      0,
          bottom:   0,
          display:  'flex',
          alignItems: 'center',
        }}>
          {leadingContent}
        </div>
      )}

      {pagesAndNav}

      {trailingContent && (
        <div style={{
          position: 'absolute',
          right:    0,
          top:      0,
          bottom:   0,
          display:  'flex',
          alignItems: 'center',
        }}>
          {trailingContent}
        </div>
      )}
    </div>
  )
}

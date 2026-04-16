import { useState } from 'react'
import PaginationNavigation from '../../design-system/components/PaginationNavigation/PaginationNavigation'
import Section, { Case } from '../Section'

export default function PaginationNavPage() {
  const [p0, setP0] = useState(0)
  const [p1, setP1] = useState(4)
  const [p2, setP2] = useState(2)
  const [p3, setP3] = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>PaginationNavigation</h2>

      <Section title="Variant" gap="var(--spacing-24)" column>
        <Case label='variant="compact"'>
          <div style={{ width: '480px' }}>
            <PaginationNavigation variant="compact" count={10} value={p0} onChange={setP0} />
          </div>
        </Case>
        <Case label='variant="minimize"'>
          <div style={{ width: '480px' }}>
            <PaginationNavigation variant="minimize" count={10} value={p1} onChange={setP1} />
          </div>
        </Case>
        <Case label='variant="full"'>
          <div style={{ width: '480px' }}>
            <PaginationNavigation variant="full" count={10} value={p2} onChange={setP2} />
          </div>
        </Case>
      </Section>

      <Section title="Edge States" gap="var(--spacing-24)" column>
        <Case label="첫 페이지 (prev 비활성)">
          <div style={{ width: '480px' }}>
            <PaginationNavigation variant="compact" count={10} value={0} onChange={() => {}} />
          </div>
        </Case>
        <Case label="마지막 페이지 (next 비활성)">
          <div style={{ width: '480px' }}>
            <PaginationNavigation variant="compact" count={10} value={9} onChange={() => {}} />
          </div>
        </Case>
        <Case label="단일 페이지 (both 비활성)">
          <div style={{ width: '480px' }}>
            <PaginationNavigation variant="compact" count={1} value={0} onChange={() => {}} />
          </div>
        </Case>
      </Section>

      <Section title="With Leading / Trailing Content" gap="var(--spacing-24)" column>
        <Case label="leadingContent + trailingContent">
          <div style={{ width: '480px' }}>
            <PaginationNavigation
              variant="minimize"
              count={10}
              value={p3}
              onChange={setP3}
              leadingContent={
                <span style={{ fontSize: 'var(--font-size-caption-1)', color: 'var(--color-label-alternative)' }}>
                  총 100개
                </span>
              }
              trailingContent={
                <span style={{ fontSize: 'var(--font-size-caption-1)', color: 'var(--color-label-alternative)' }}>
                  10개씩 보기
                </span>
              }
            />
          </div>
        </Case>
      </Section>
    </div>
  )
}

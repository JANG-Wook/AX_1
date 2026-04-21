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

      <Section title="인터랙션 데모" gap="var(--spacing-24)" column>
        <Case label="버튼을 클릭하거나 마우스를 올려보세요">
          <div style={{ width: '480px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
            <PaginationNavigation variant="compact" count={20} value={p0} onChange={setP0} />
            <div style={{
              padding: 'var(--spacing-12)',
              borderRadius: 'var(--spacing-8)',
              backgroundColor: 'var(--color-fill-normal)',
              textAlign: 'center',
              fontSize: 'var(--font-size-body-2)',
              color: 'var(--color-label-alternative)',
            }}>
              현재 페이지: <strong style={{ color: 'var(--color-label-normal)' }}>{p0 + 1}</strong> / 20
            </div>
          </div>
        </Case>
      </Section>

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

import { useState } from 'react'
import SegmentedControl from '../../design-system/components/SegmentedControl/SegmentedControl'
import Section, { Case } from '../Section'

const ITEMS_TEXT = [
  { label: '일간' },
  { label: '주간' },
  { label: '월간' },
]

const ITEMS_2 = [
  { label: '목록' },
  { label: '격자' },
]

export default function SegmentedControlPage() {
  const [v0, setV0] = useState(0)
  const [v1, setV1] = useState(0)
  const [v2, setV2] = useState(0)
  const [v3, setV3] = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>SegmentedControl</h2>

      <Section title="인터랙션 데모" gap="var(--spacing-24)" column>
        <Case label="세그먼트를 클릭하거나 마우스를 올려보세요">
          <div style={{ width: '360px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
            <SegmentedControl variant="solid" items={ITEMS_TEXT} value={v0} onChange={setV0} />
            <div style={{
              padding: 'var(--spacing-12)',
              borderRadius: 'var(--spacing-8)',
              backgroundColor: 'var(--color-fill-normal)',
              textAlign: 'center',
              fontSize: 'var(--font-size-body-2)',
              color: 'var(--color-label-alternative)',
            }}>
              선택된 기간: <strong style={{ color: 'var(--color-label-normal)' }}>
                {ITEMS_TEXT[v0].label}
              </strong>
            </div>
          </div>
        </Case>
      </Section>

      <Section title="Variant" gap="var(--spacing-24)" column>
        <Case label='variant="solid"'>
          <SegmentedControl variant="solid" items={ITEMS_TEXT} value={v0} onChange={setV0} />
        </Case>
        <Case label='variant="outlined"'>
          <SegmentedControl variant="outlined" items={ITEMS_TEXT} value={v1} onChange={setV1} />
        </Case>
      </Section>

      <Section title="Size" gap="var(--spacing-24)" column>
        <Case label='size="large" · solid'>
          <SegmentedControl variant="solid" size="large" items={ITEMS_TEXT} value={v2} onChange={setV2} />
        </Case>
        <Case label='size="small" · solid'>
          <SegmentedControl variant="solid" size="small" items={ITEMS_TEXT} value={v2} onChange={setV2} />
        </Case>
        <Case label='size="large" · outlined'>
          <SegmentedControl variant="outlined" size="large" items={ITEMS_TEXT} value={v3} onChange={setV3} />
        </Case>
        <Case label='size="small" · outlined'>
          <SegmentedControl variant="outlined" size="small" items={ITEMS_TEXT} value={v3} onChange={setV3} />
        </Case>
      </Section>

      <Section title="Item Count" gap="var(--spacing-24)" column>
        <Case label="2 segments">
          <SegmentedControl variant="solid" items={ITEMS_2} value={v0} onChange={setV0} />
        </Case>
        <Case label="3 segments">
          <SegmentedControl variant="solid" items={ITEMS_TEXT} value={v0} onChange={setV0} />
        </Case>
        <Case label="4 segments">
          <SegmentedControl variant="solid" items={[{label:'A'},{label:'B'},{label:'C'},{label:'D'}]} value={v0} onChange={setV0} />
        </Case>
      </Section>
    </div>
  )
}

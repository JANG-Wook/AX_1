import { useState } from 'react'
import SegmentedControl from '../../design-system/components/SegmentedControl/SegmentedControl'
import Section, { Case } from '../Section'

const ITEMS = [
  { label: '일간' },
  { label: '주간' },
  { label: '월간' },
]

const ITEMS_ICON = [
  { label: '일간', icon: 'star' },
  { label: '주간', icon: 'star' },
  { label: '월간', icon: 'star' },
]

export default function SegmentedControlPage() {
  const [solid, setSolid] = useState(0)
  const [outlined, setOutlined] = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>SegmentedControl</h2>

      <Section title="Variant" gap="var(--spacing-24)">
        <Case label='variant="solid" (default)'>
          <div style={{ width: '335px' }}>
            <SegmentedControl variant="solid" items={ITEMS} value={solid} onChange={setSolid} />
          </div>
        </Case>
        <Case label='variant="outlined"'>
          <div style={{ width: '335px' }}>
            <SegmentedControl variant="outlined" items={ITEMS} value={outlined} onChange={setOutlined} />
          </div>
        </Case>
      </Section>

      <Section title="Size" gap="var(--spacing-24)" column>
        <Case label='size="small"'>
          <div style={{ display: 'flex', gap: 'var(--spacing-24)' }}>
            <div style={{ width: '335px' }}>
              <SegmentedControl variant="solid" size="small" items={ITEMS} value={solid} onChange={setSolid} />
            </div>
            <div style={{ width: '335px' }}>
              <SegmentedControl variant="outlined" size="small" items={ITEMS} value={outlined} onChange={setOutlined} />
            </div>
          </div>
        </Case>
        <Case label='size="medium"'>
          <div style={{ display: 'flex', gap: 'var(--spacing-24)' }}>
            <div style={{ width: '335px' }}>
              <SegmentedControl variant="solid" size="medium" items={ITEMS} value={solid} onChange={setSolid} />
            </div>
            <div style={{ width: '335px' }}>
              <SegmentedControl variant="outlined" size="medium" items={ITEMS} value={outlined} onChange={setOutlined} />
            </div>
          </div>
        </Case>
        <Case label='size="large" (default)'>
          <div style={{ display: 'flex', gap: 'var(--spacing-24)' }}>
            <div style={{ width: '335px' }}>
              <SegmentedControl variant="solid" size="large" items={ITEMS} value={solid} onChange={setSolid} />
            </div>
            <div style={{ width: '335px' }}>
              <SegmentedControl variant="outlined" size="large" items={ITEMS} value={outlined} onChange={setOutlined} />
            </div>
          </div>
        </Case>
      </Section>

      <Section title="Icon" gap="var(--spacing-24)">
        <Case label='icon=false (default)'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)', width: '335px' }}>
            <SegmentedControl variant="solid"    size="large"  items={ITEMS} value={solid}    onChange={setSolid} />
            <SegmentedControl variant="solid"    size="medium" items={ITEMS} value={solid}    onChange={setSolid} />
            <SegmentedControl variant="solid"    size="small"  items={ITEMS} value={solid}    onChange={setSolid} />
            <SegmentedControl variant="outlined" size="large"  items={ITEMS} value={outlined} onChange={setOutlined} />
            <SegmentedControl variant="outlined" size="medium" items={ITEMS} value={outlined} onChange={setOutlined} />
            <SegmentedControl variant="outlined" size="small"  items={ITEMS} value={outlined} onChange={setOutlined} />
          </div>
        </Case>
        <Case label='icon=true'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)', width: '335px' }}>
            <SegmentedControl variant="solid"    size="large"  items={ITEMS_ICON} value={solid}    onChange={setSolid} />
            <SegmentedControl variant="solid"    size="medium" items={ITEMS_ICON} value={solid}    onChange={setSolid} />
            <SegmentedControl variant="solid"    size="small"  items={ITEMS_ICON} value={solid}    onChange={setSolid} />
            <SegmentedControl variant="outlined" size="large"  items={ITEMS_ICON} value={outlined} onChange={setOutlined} />
            <SegmentedControl variant="outlined" size="medium" items={ITEMS_ICON} value={outlined} onChange={setOutlined} />
            <SegmentedControl variant="outlined" size="small"  items={ITEMS_ICON} value={outlined} onChange={setOutlined} />
          </div>
        </Case>
      </Section>
    </div>
  )
}

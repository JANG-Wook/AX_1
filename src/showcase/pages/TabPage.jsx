import { useState } from 'react'
import Tab from '../../design-system/components/Tab/Tab'
import Section, { Case } from '../Section'

const ITEMS_2 = ['개요', '상세']
const ITEMS_3 = ['전체', '진행중', '완료']
const ITEMS_4 = ['홈', '탐색', '알림', '설정']

export default function TabPage() {
  const [t0, setT0] = useState(0)
  const [t1, setT1] = useState(0)
  const [t2, setT2] = useState(0)
  const [t3, setT3] = useState(0)
  const [t4, setT4] = useState(0)
  const [t5, setT5] = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Tab</h2>

      <Section title="Size" gap="var(--spacing-24)" column>
        <Case label='size="medium" (48px)'>
          <div style={{ width: '480px' }}>
            <Tab items={ITEMS_3} value={t0} onChange={setT0} size="medium" />
          </div>
        </Case>
        <Case label='size="small" (40px)'>
          <div style={{ width: '480px' }}>
            <Tab items={ITEMS_3} value={t1} onChange={setT1} size="small" />
          </div>
        </Case>
      </Section>

      <Section title="Resize" gap="var(--spacing-24)" column>
        <Case label='resize="hug" (각 탭이 텍스트 너비에 맞춤)'>
          <div style={{ width: '480px' }}>
            <Tab items={ITEMS_3} value={t2} onChange={setT2} resize="hug" />
          </div>
        </Case>
        <Case label='resize="fill" (각 탭이 균등 분할)'>
          <div style={{ width: '480px' }}>
            <Tab items={ITEMS_3} value={t3} onChange={setT3} resize="fill" />
          </div>
        </Case>
      </Section>

      <Section title="Item Count" gap="var(--spacing-24)" column>
        <Case label="2 items">
          <div style={{ width: '480px' }}>
            <Tab items={ITEMS_2} value={t4} onChange={setT4} />
          </div>
        </Case>
        <Case label="4 items">
          <div style={{ width: '480px' }}>
            <Tab items={ITEMS_4} value={t5} onChange={setT5} />
          </div>
        </Case>
      </Section>

      <Section title="horizontalPadding" gap="var(--spacing-24)" column>
        <Case label='horizontalPadding=false (기본)'>
          <div style={{ width: '480px', backgroundColor: 'var(--color-bg-normal-alternative)' }}>
            <Tab items={ITEMS_3} value={t0} onChange={setT0} />
          </div>
        </Case>
        <Case label='horizontalPadding=true'>
          <div style={{ width: '480px', backgroundColor: 'var(--color-bg-normal-alternative)' }}>
            <Tab items={ITEMS_3} value={t0} onChange={setT0} horizontalPadding />
          </div>
        </Case>
      </Section>
    </div>
  )
}

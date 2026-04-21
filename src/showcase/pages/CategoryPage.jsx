import { useState } from 'react'
import Category from '../../design-system/components/Category/Category'
import Section, { Case } from '../Section'

const ITEMS_KO = ['전체', '인기', '최신', '추천', '완료', '진행중']

export default function CategoryPage() {
  const [tab0, setTab0] = useState(0)
  const [tab1, setTab1] = useState(0)
  const [tab2, setTab2] = useState(0)
  const [tab3, setTab3] = useState(0)
  const [tab4, setTab4] = useState(0)
  const [tab5, setTab5] = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Category</h2>

      <Section title="인터랙션 데모" gap="var(--spacing-24)" column>
        <Case label="칩을 클릭하거나 마우스를 올려보세요">
          <div style={{ width: '480px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
            <Category
              items={[
                { label: '전체' }, { label: '인기' }, { label: '최신' },
                { label: '추천' }, { label: '완료' },
              ]}
              value={tab0}
              onChange={setTab0}
            />
            <div style={{
              padding: 'var(--spacing-12)',
              borderRadius: 'var(--spacing-8)',
              backgroundColor: 'var(--color-fill-normal)',
              textAlign: 'center',
              fontSize: 'var(--font-size-body-2)',
              color: 'var(--color-label-alternative)',
            }}>
              선택된 카테고리: <strong style={{ color: 'var(--color-label-normal)' }}>
                {['전체', '인기', '최신', '추천', '완료'][tab0]}
              </strong>
            </div>
          </div>
        </Case>
      </Section>

      <Section title="Variant" gap="var(--spacing-24)" column>
        <Case label='variant="normal"'>
          <div style={{ width: '480px' }}>
            <Category items={ITEMS_KO} value={tab0} onChange={setTab0} variant="normal" />
          </div>
        </Case>
        <Case label='variant="alternative"'>
          <div style={{ width: '480px' }}>
            <Category items={ITEMS_KO} value={tab1} onChange={setTab1} variant="alternative" />
          </div>
        </Case>
      </Section>

      <Section title="Size" gap="var(--spacing-24)" column>
        {(['small', 'medium', 'large', 'xlarge']).map((size, i) => (
          <Case key={size} label={`size="${size}"`}>
            <div style={{ width: '480px' }}>
              <Category
                items={['전체', '인기', '최신', '추천']}
                value={i === 0 ? tab2 : i === 1 ? tab3 : i === 2 ? tab4 : tab5}
                onChange={i === 0 ? setTab2 : i === 1 ? setTab3 : i === 2 ? setTab4 : setTab5}
                size={size}
              />
            </div>
          </Case>
        ))}
      </Section>

      <Section title="Scroll" gap="var(--spacing-24)" column>
        <Case label='scroll=true (넘치는 항목 스크롤)'>
          <div style={{ width: '300px' }}>
            <Category
              items={['전체', '디자인', '개발', '마케팅', '기획', '운영', '인사', '재무']}
              value={tab0}
              onChange={setTab0}
              scroll
            />
          </div>
        </Case>
      </Section>

      <Section title="Padding Options" gap="var(--spacing-24)" column>
        <Case label='horizontalPadding=true'>
          <div style={{ width: '480px', backgroundColor: 'var(--color-bg-normal-alternative)', borderRadius: 'var(--spacing-8)' }}>
            <Category items={ITEMS_KO} value={tab0} onChange={setTab0} horizontalPadding />
          </div>
        </Case>
        <Case label='verticalPadding=true'>
          <div style={{ width: '480px', backgroundColor: 'var(--color-bg-normal-alternative)', borderRadius: 'var(--spacing-8)' }}>
            <Category items={ITEMS_KO} value={tab0} onChange={setTab0} verticalPadding />
          </div>
        </Case>
      </Section>
    </div>
  )
}

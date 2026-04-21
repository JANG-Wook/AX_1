import { useState } from 'react'
import Menu from '../../design-system/components/Menu/Menu'
import Section, { Case } from '../Section'

const basicItems = [
  { label: '복사',    onClick: () => {} },
  { label: '붙여넣기', onClick: () => {} },
  { label: '삭제',    onClick: () => {} },
]

const withCaptionItems = [
  { label: '최신순',   caption: '최근 등록된 항목부터 표시',  onClick: () => {} },
  { label: '인기순',   caption: '조회수가 높은 항목부터 표시', onClick: () => {} },
  { label: '가나다순', caption: '알파벳 오름차순으로 정렬',   onClick: () => {} },
]

const withStateItems = [
  { label: '전체',   active: true,  onClick: () => {} },
  { label: '미완료', active: false, onClick: () => {} },
  { label: '완료',   active: false, onClick: () => {} },
  { label: '삭제됨', disabled: true, onClick: () => {} },
]

const checkboxItems = [
  { label: '알림 받기',   active: true,  onClick: () => {} },
  { label: '이메일 수신', active: true,  onClick: () => {} },
  { label: '문자 수신',   active: false, onClick: () => {} },
  { label: '푸시 알림',   active: false, disabled: true, onClick: () => {} },
]

const radioItems = [
  { label: '높음',  active: true,  onClick: () => {} },
  { label: '보통',  active: false, onClick: () => {} },
  { label: '낮음',  active: false, onClick: () => {} },
]

const withTitleItems = [
  { type: 'title', label: '편집' },
  { label: '복사',    onClick: () => {} },
  { label: '붙여넣기', onClick: () => {} },
  { type: 'title', label: '관리' },
  { label: '이름 변경', onClick: () => {} },
  { label: '삭제',     onClick: () => {}, disabled: false },
]

const manyItems = Array.from({ length: 12 }, (_, i) => ({
  label: `항목 ${i + 1}`,
  onClick: () => {},
}))

export default function MenuPage() {
  const [lastClicked, setLastClicked] = useState(null)

  const demoItems = [
    { label: '복사',     onClick: () => setLastClicked('복사') },
    { label: '붙여넣기', onClick: () => setLastClicked('붙여넣기') },
    { label: '삭제',     onClick: () => setLastClicked('삭제') },
  ]

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Menu</h2>

      <Section title="인터랙션 데모">
        <Case label="메뉴 항목에 마우스를 올리거나 클릭해보세요">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
            <Menu items={demoItems} />
            <div style={{
              padding: 'var(--spacing-12)',
              borderRadius: 'var(--spacing-8)',
              backgroundColor: 'var(--color-fill-normal)',
              fontSize: 'var(--font-size-body-2)',
              color: 'var(--color-label-alternative)',
            }}>
              {lastClicked
                ? <><strong style={{ color: 'var(--color-label-normal)' }}>"{lastClicked}"</strong> 클릭됨</>
                : '항목을 클릭해보세요'
              }
            </div>
          </div>
        </Case>
      </Section>

      <Section title="Variant = normal">
        <Case label='기본'>
          <Menu items={basicItems} />
        </Case>
        <Case label='active / disabled 상태'>
          <Menu items={withStateItems} />
        </Case>
        <Case label='caption 있음'>
          <Menu items={withCaptionItems} />
        </Case>
      </Section>

      <Section title="Variant = checkbox">
        <Case label='checkbox'>
          <Menu variant="checkbox" items={checkboxItems} />
        </Case>
        <Case label='checkbox + cellPadding="12px"'>
          <Menu variant="checkbox" cellPadding="12px" items={checkboxItems} />
        </Case>
      </Section>

      <Section title="Variant = radio">
        <Case label='radio'>
          <Menu variant="radio" items={radioItems} />
        </Case>
        <Case label='radio + caption'>
          <Menu variant="radio" items={withCaptionItems.map((it, i) => ({ ...it, active: i === 0 }))} />
        </Case>
      </Section>

      <Section title="With Title Items">
        <Case label='type="title" 구분선'>
          <Menu items={withTitleItems} />
        </Case>
      </Section>

      <Section title="With Action Area">
        <Case label='checkbox + actionArea'>
          <Menu
            variant="checkbox"
            items={checkboxItems}
            actionArea={{
              leadingLabel:    '초기화',
              onLeadingAction:  () => {},
              trailingLabel:   '적용',
              onTrailingAction: () => {},
            }}
          />
        </Case>
      </Section>

      <Section title="Scrollable">
        <Case label='scrollable (maxHeight: 400px)' >
          <div style={{ width: '200px' }}>
            <Menu items={manyItems} scrollable />
          </div>
        </Case>
      </Section>
    </div>
  )
}

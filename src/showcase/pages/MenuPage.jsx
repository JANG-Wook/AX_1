import { useState } from 'react'
import Menu from '../../design-system/components/Menu/Menu'
import Section, { Case } from '../Section'

/* ── 공통 아이템 셋 ── */
const basicItems = [
  { label: '전체',    onClick: () => {} },
  { label: '진행 중', onClick: () => {} },
  { label: '완료',   onClick: () => {} },
  { label: '보류',   onClick: () => {} },
  { label: '삭제됨',  onClick: () => {} },
]

const activeItems = [
  { label: '전체',    active: true,  onClick: () => {} },
  { label: '진행 중',  onClick: () => {} },
  { label: '완료',   onClick: () => {} },
  { label: '보류',   onClick: () => {} },
  { label: '삭제됨',  onClick: () => {} },
]

const captionItems = [
  { label: '최신순',   caption: '최근 등록된 항목부터 표시',  onClick: () => {} },
  { label: '인기순',   caption: '조회수가 높은 항목부터 표시', onClick: () => {} },
  { label: '가나다순', caption: '알파벳 오름차순으로 정렬',   onClick: () => {} },
]

const disabledItems = [
  { label: '전체',    onClick: () => {} },
  { label: '진행 중', onClick: () => {} },
  { label: '완료',   disabled: true, onClick: () => {} },
  { label: '보류',   disabled: true, onClick: () => {} },
  { label: '삭제됨',  disabled: true, onClick: () => {} },
]

const radioItems = [
  { label: '높음',    active: true,  onClick: () => {} },
  { label: '보통',   onClick: () => {} },
  { label: '낮음',   onClick: () => {} },
  { label: '없음',   onClick: () => {} },
]

const checkboxItems = [
  { label: '알림 받기',   active: true,  onClick: () => {} },
  { label: '이메일 수신', active: true,  onClick: () => {} },
  { label: '문자 수신',   onClick: () => {} },
  { label: '푸시 알림',   onClick: () => {} },
  { label: '마케팅 수신', disabled: true, onClick: () => {} },
]

const manyItems = Array.from({ length: 12 }, (_, i) => ({
  label: `항목 ${i + 1}`,
  onClick: () => {},
}))

export default function MenuPage() {
  const [activeBasic, setActiveBasic]   = useState(0)
  const [activeRadio, setActiveRadio]   = useState(0)
  const [activeCheck, setActiveCheck]   = useState([0, 1])

  const interactiveBasic = basicItems.map((it, i) => ({
    ...it,
    active: i === activeBasic,
    onClick: () => setActiveBasic(i),
  }))

  const interactiveRadio = radioItems.map((it, i) => ({
    ...it,
    active: i === activeRadio,
    onClick: () => setActiveRadio(i),
  }))

  const interactiveCheck = checkboxItems.map((it, i) => ({
    ...it,
    active: activeCheck.includes(i),
    disabled: i === 4,
    onClick: () => {
      if (i === 4) return
      setActiveCheck(prev =>
        prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
      )
    },
  }))

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Menu</h2>

      {/* ── Variant ─────────────────────────────────────────── */}
      <Section title="Variant" gap="var(--spacing-24)">
        <Case label="Normal">
          <Menu items={interactiveBasic} />
        </Case>
        <Case label="Radio">
          <Menu variant="radio" items={interactiveRadio} />
        </Case>
        <Case label="Checkbox">
          <Menu variant="checkbox" items={interactiveCheck} />
        </Case>
      </Section>

      {/* ── Cell Padding ─────────────────────────────────────── */}
      <Section title="Cell Padding" gap="var(--spacing-24)">
        <Case label="8px (기본)">
          <Menu items={basicItems} cellPadding="8px" />
        </Case>
        <Case label="12px">
          <Menu items={basicItems} cellPadding="12px" />
        </Case>
      </Section>

      {/* ── Item/Cell State ──────────────────────────────────── */}
      <Section title="Item/Cell State" gap="var(--spacing-24)">
        <Case label="기본">
          <Menu items={basicItems} />
        </Case>
        <Case label="Active">
          <Menu items={activeItems} />
        </Case>
        <Case label="Caption">
          <Menu items={captionItems} />
        </Case>
        <Case label="Disabled">
          <Menu items={disabledItems} />
        </Case>
      </Section>

      {/* ── Checkbox State ───────────────────────────────────── */}
      <Section title="Checkbox Item/Cell State" gap="var(--spacing-24)">
        <Case label="기본 (unchecked)">
          <Menu variant="checkbox" items={[
            { label: '알림 받기',   onClick: () => {} },
            { label: '이메일 수신', onClick: () => {} },
            { label: '문자 수신',   onClick: () => {} },
          ]} />
        </Case>
        <Case label="Active (checked)">
          <Menu variant="checkbox" items={[
            { label: '알림 받기',   active: true,  onClick: () => {} },
            { label: '이메일 수신', active: true,  onClick: () => {} },
            { label: '문자 수신',   onClick: () => {} },
          ]} />
        </Case>
        <Case label="Disabled">
          <Menu variant="checkbox" items={[
            { label: '알림 받기',   onClick: () => {} },
            { label: '이메일 수신', active: true, disabled: true, onClick: () => {} },
            { label: '문자 수신',   disabled: true, onClick: () => {} },
          ]} />
        </Case>
      </Section>

      {/* ── Radio State ──────────────────────────────────────── */}
      <Section title="Radio Item/Cell State" gap="var(--spacing-24)">
        <Case label="기본 (unselected)">
          <Menu variant="radio" items={[
            { label: '높음', onClick: () => {} },
            { label: '보통', onClick: () => {} },
            { label: '낮음', onClick: () => {} },
          ]} />
        </Case>
        <Case label="Active (selected)">
          <Menu variant="radio" items={[
            { label: '높음', active: true, onClick: () => {} },
            { label: '보통', onClick: () => {} },
            { label: '낮음', onClick: () => {} },
          ]} />
        </Case>
        <Case label="Disabled">
          <Menu variant="radio" items={[
            { label: '높음', active: true, onClick: () => {} },
            { label: '보통', disabled: true, onClick: () => {} },
            { label: '낮음', disabled: true, onClick: () => {} },
          ]} />
        </Case>
      </Section>

      {/* ── Menu Action Area ─────────────────────────────────── */}
      <Section title="Menu Action Area" gap="var(--spacing-24)">
        <Case label="actionArea = false">
          <Menu
            variant="checkbox"
            items={checkboxItems}
          />
        </Case>
        <Case label="actionArea = true">
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

      {/* ── Scrollable ───────────────────────────────────────── */}
      <Section title="Scrollable">
        <Case label="스크롤 가능 (maxHeight: 400px)">
          <div style={{ width: '240px' }}>
            <Menu items={manyItems} scrollable />
          </div>
        </Case>
      </Section>
    </div>
  )
}

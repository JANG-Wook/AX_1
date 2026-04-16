import Select from '../../design-system/components/Select/Select'
import Section, { Case } from '../Section'

export default function SelectPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Select</h2>

      <Section title="Status" gap="var(--spacing-24)">
        <Case label='status="normal"'>
          <div style={{ width: '240px' }}>
            <Select status="normal" placeholder="선택해주세요" />
          </div>
        </Case>
        <Case label='status="normal" (값 있음)'>
          <div style={{ width: '240px' }}>
            <Select status="normal" value="서울특별시" />
          </div>
        </Case>
        <Case label='status="negative"'>
          <div style={{ width: '240px' }}>
            <Select status="negative" value="잘못된 선택" />
          </div>
        </Case>
      </Section>

      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label="disabled (비어 있음)">
          <div style={{ width: '240px' }}>
            <Select disabled placeholder="선택 불가" />
          </div>
        </Case>
        <Case label="disabled (값 있음)">
          <div style={{ width: '240px' }}>
            <Select disabled value="고정된 값" />
          </div>
        </Case>
      </Section>

      <Section title="With Heading" gap="var(--spacing-24)" column>
        <Case label="heading">
          <div style={{ width: '320px' }}>
            <Select heading="지역 선택" placeholder="선택해주세요" />
          </div>
        </Case>
        <Case label="heading + required">
          <div style={{ width: '320px' }}>
            <Select heading="지역 선택" required placeholder="선택해주세요" />
          </div>
        </Case>
        <Case label="heading + required + description">
          <div style={{ width: '320px' }}>
            <Select heading="카테고리" required description="관심 있는 분야를 선택해주세요" placeholder="선택해주세요" />
          </div>
        </Case>
        <Case label='heading + required + description + status="negative"'>
          <div style={{ width: '320px' }}>
            <Select heading="카테고리" required status="negative" description="카테고리를 선택해주세요" placeholder="선택해주세요" />
          </div>
        </Case>
      </Section>

      <Section title="Render = chip" gap="var(--spacing-24)" column>
        <Case label='render="chip" (값 없음)'>
          <div style={{ width: '320px' }}>
            <Select render="chip" heading="태그" placeholder="태그를 선택해주세요" value={[]} />
          </div>
        </Case>
        <Case label='render="chip" (칩 2개)'>
          <div style={{ width: '320px' }}>
            <Select
              render="chip"
              heading="태그"
              value={['React', 'TypeScript']}
              onRemoveChip={() => {}}
            />
          </div>
        </Case>
        <Case label='render="chip" (칩 4개 — 2개 숨김)'>
          <div style={{ width: '320px' }}>
            <Select
              render="chip"
              heading="태그"
              value={['React', 'TypeScript', 'Vite', 'TailwindCSS']}
              onRemoveChip={() => {}}
            />
          </div>
        </Case>
      </Section>
    </div>
  )
}

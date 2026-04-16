import Radio from '../../design-system/components/Radio/Radio'
import Section, { Case } from '../Section'

export default function RadioPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Radio</h2>

      <Section title="State" gap="var(--spacing-24)">
        <Case label='checked=false'>
          <Radio checked={false} label="선택 안 됨" />
        </Case>
        <Case label='checked=true'>
          <Radio checked={true} label="선택됨" />
        </Case>
      </Section>

      <Section title="Size" gap="var(--spacing-24)">
        <Case label='size="medium"'>
          <Radio checked={false} size="medium" label="Medium" />
        </Case>
        <Case label='size="small"'>
          <Radio checked={false} size="small" label="Small" />
        </Case>
      </Section>

      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label='disabled unchecked'>
          <Radio checked={false} disabled label="비활성 (미선택)" />
        </Case>
        <Case label='disabled checked'>
          <Radio checked={true} disabled label="비활성 (선택됨)" />
        </Case>
      </Section>

      <Section title="Tight Mode" gap="var(--spacing-24)">
        <Case label='tight=false'>
          <Radio checked={false} tight={false} label="기본 패딩" />
        </Case>
        <Case label='tight=true'>
          <Radio checked={false} tight={true} label="좁은 패딩" />
        </Case>
      </Section>

      <Section title="Radio Group Example" gap="var(--spacing-8)" column>
        <Radio checked={true}  label="옵션 A — 기본 플랜" />
        <Radio checked={false} label="옵션 B — 프로 플랜" />
        <Radio checked={false} label="옵션 C — 엔터프라이즈" disabled />
      </Section>
    </div>
  )
}

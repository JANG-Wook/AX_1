import Checkbox from '../../design-system/components/Checkbox/Checkbox'
import Section, { Case } from '../Section'

export default function CheckboxPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Checkbox</h2>

      <Section title="State" gap="var(--spacing-24)">
        <Case label='state="unchecked"'>
          <Checkbox state="unchecked" label="선택 안 됨" />
        </Case>
        <Case label='state="checked"'>
          <Checkbox state="checked" label="선택됨" />
        </Case>
        <Case label='state="indeterminate"'>
          <Checkbox state="indeterminate" label="일부 선택" />
        </Case>
      </Section>

      <Section title="Size" gap="var(--spacing-24)">
        <Case label='size="medium"'>
          <Checkbox state="unchecked" size="medium" label="Medium" />
        </Case>
        <Case label='size="small"'>
          <Checkbox state="unchecked" size="small" label="Small" />
        </Case>
      </Section>

      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label='disabled unchecked'>
          <Checkbox state="unchecked" disabled label="비활성 (미선택)" />
        </Case>
        <Case label='disabled checked'>
          <Checkbox state="checked" disabled label="비활성 (선택됨)" />
        </Case>
        <Case label='disabled indeterminate'>
          <Checkbox state="indeterminate" disabled label="비활성 (일부)" />
        </Case>
      </Section>

      <Section title="Tight Mode" gap="var(--spacing-24)">
        <Case label='tight=false (기본)'>
          <Checkbox state="unchecked" tight={false} label="기본 패딩" />
        </Case>
        <Case label='tight=true'>
          <Checkbox state="unchecked" tight={true} label="좁은 패딩" />
        </Case>
      </Section>

      <Section title="Bold Label" gap="var(--spacing-24)">
        <Case label='bold=false'>
          <Checkbox state="checked" label="일반 레이블" />
        </Case>
        <Case label='bold=true'>
          <Checkbox state="checked" bold label="굵은 레이블" />
        </Case>
      </Section>

      <Section title="Size × State Matrix" gap="var(--spacing-24)">
        {(['medium', 'small']).map(size =>
          (['unchecked', 'checked', 'indeterminate']).map(state => (
            <Case key={`${size}-${state}`} label={`${size}\n${state}`}>
              <Checkbox state={state} size={size} label="레이블" />
            </Case>
          ))
        )}
      </Section>
    </div>
  )
}

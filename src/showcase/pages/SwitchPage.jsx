import Switch from '../../design-system/components/Switch/Switch'
import Section, { Case } from '../Section'

export default function SwitchPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Switch</h2>

      <Section title="State" gap="var(--spacing-24)">
        <Case label='active=false'>
          <Switch active={false} />
        </Case>
        <Case label='active=true'>
          <Switch active={true} />
        </Case>
      </Section>

      <Section title="Size" gap="var(--spacing-24)">
        <Case label='size="medium" · off'>
          <Switch active={false} size="medium" />
        </Case>
        <Case label='size="medium" · on'>
          <Switch active={true} size="medium" />
        </Case>
        <Case label='size="small" · off'>
          <Switch active={false} size="small" />
        </Case>
        <Case label='size="small" · on'>
          <Switch active={true} size="small" />
        </Case>
      </Section>

      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label='disabled · off'>
          <Switch active={false} disabled />
        </Case>
        <Case label='disabled · on'>
          <Switch active={true} disabled />
        </Case>
      </Section>
    </div>
  )
}

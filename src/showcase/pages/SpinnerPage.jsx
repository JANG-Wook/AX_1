import Spinner from '../../design-system/components/Spinner/Spinner'
import Section, { Case } from '../Section'

export default function SpinnerPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Circular</h2>

      <Section title="Size" gap="var(--spacing-24)">
        {[16, 20, 24, 28, 36, 48].map(size => (
          <Case key={size} label={`size={${size}}`} center>
            <Spinner size={size} />
          </Case>
        ))}
      </Section>

      <Section title="Color" gap="var(--spacing-24)">
        <Case label='primary-normal (기본)' center>
          <Spinner size={28} />
        </Case>
        <Case label='status-negative' center>
          <Spinner size={28} color="var(--color-status-negative)" />
        </Case>
        <Case label='status-positive' center>
          <Spinner size={28} color="var(--color-status-positive)" />
        </Case>
        <Case label='label-assistive' center>
          <Spinner size={28} color="var(--color-label-assistive)" />
        </Case>
      </Section>

      <Section title="Animate" gap="var(--spacing-24)">
        <Case label='animate=true (기본)' center>
          <Spinner size={28} animate={true} />
        </Case>
        <Case label='animate=false (정지)' center>
          <Spinner size={28} animate={false} />
        </Case>
      </Section>
    </div>
  )
}

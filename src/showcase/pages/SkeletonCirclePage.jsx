import SkeletonCircle from '../../design-system/components/SkeletonCircle/SkeletonCircle'
import Section, { Case } from '../Section'

export default function SkeletonCirclePage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Circle</h2>

      <Section title="Size" gap="var(--spacing-24)">
        {[24, 32, 40, 48, 56, 72].map(size => (
          <Case key={size} label={`size={${size}}`} center>
            <SkeletonCircle size={size} />
          </Case>
        ))}
      </Section>

      <Section title="Color" gap="var(--spacing-24)">
        <Case label='color="normal"'>
          <SkeletonCircle size={48} color="normal" />
        </Case>
        <Case label='color="white"'>
          <div style={{
            padding:         'var(--spacing-16)',
            backgroundColor: 'var(--color-inverse-background)',
            borderRadius:    'var(--spacing-8)',
          }}>
            <SkeletonCircle size={48} color="white" />
          </div>
        </Case>
      </Section>
    </div>
  )
}

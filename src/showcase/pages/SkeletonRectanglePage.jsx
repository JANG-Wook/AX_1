import SkeletonRect from '../../design-system/components/SkeletonRect/SkeletonRect'
import Section, { Case } from '../Section'

export default function SkeletonRectanglePage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Rectangle</h2>

      <Section title="Color" gap="var(--spacing-24)">
        <Case label='color="normal"'>
          <SkeletonRect color="normal" width={120} height={64} radius={8} />
        </Case>
        <Case label='color="white"'>
          <div style={{
            padding:         'var(--spacing-16)',
            backgroundColor: 'var(--color-inverse-background)',
            borderRadius:    'var(--spacing-8)',
          }}>
            <SkeletonRect color="white" width={120} height={64} radius={8} />
          </div>
        </Case>
      </Section>

      <Section title="Shape" gap="var(--spacing-24)">
        <Case label='radius=0'>
          <SkeletonRect width={120} height={64} radius={0} />
        </Case>
        <Case label='radius=8'>
          <SkeletonRect width={120} height={64} radius={8} />
        </Case>
        <Case label='radius=16'>
          <SkeletonRect width={120} height={64} radius={16} />
        </Case>
        <Case label='radius=60 (pill)'>
          <SkeletonRect width={120} height={36} radius={60} />
        </Case>
      </Section>

      <Section title="Aspect Ratio" gap="var(--spacing-24)">
        <Case label='aspectRatio="1/1"'>
          <div style={{ width: '100px' }}>
            <SkeletonRect aspectRatio="1/1" radius={8} />
          </div>
        </Case>
        <Case label='aspectRatio="16/9"'>
          <div style={{ width: '160px' }}>
            <SkeletonRect aspectRatio="16/9" radius={8} />
          </div>
        </Case>
        <Case label='aspectRatio="4/3"'>
          <div style={{ width: '120px' }}>
            <SkeletonRect aspectRatio="4/3" radius={8} />
          </div>
        </Case>
      </Section>
    </div>
  )
}

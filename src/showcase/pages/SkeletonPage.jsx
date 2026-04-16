import SkeletonRect from '../../design-system/components/SkeletonRect/SkeletonRect'
import SkeletonCircle from '../../design-system/components/SkeletonCircle/SkeletonCircle'
import SkeletonText from '../../design-system/components/SkeletonText/SkeletonText'
import Section, { Case } from '../Section'

export default function SkeletonPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Skeleton</h2>

      {/* ── SkeletonRect ──────────────────────────────────────── */}
      <Section title="SkeletonRect · Color" gap="var(--spacing-24)">
        <Case label='color="normal"'>
          <SkeletonRect color="normal" width={120} height={64} radius={8} />
        </Case>
        <Case label='color="white"' background="var(--color-inverse-background)">
          <div style={{ padding: 'var(--spacing-16)' }}>
            <SkeletonRect color="white" width={120} height={64} radius={8} />
          </div>
        </Case>
      </Section>

      <Section title="SkeletonRect · Shape" gap="var(--spacing-24)">
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

      <Section title="SkeletonRect · Aspect Ratio" gap="var(--spacing-24)">
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

      {/* ── SkeletonCircle ─────────────────────────────────────── */}
      <Section title="SkeletonCircle · Size" gap="var(--spacing-24)">
        {[24, 32, 40, 48, 56, 72].map(size => (
          <Case key={size} label={`size={${size}}`} center>
            <SkeletonCircle size={size} />
          </Case>
        ))}
      </Section>

      <Section title="SkeletonCircle · Color" gap="var(--spacing-24)">
        <Case label='color="normal"'>
          <SkeletonCircle size={48} color="normal" />
        </Case>
        <Case label='color="white"' background="var(--color-inverse-background)">
          <div style={{ padding: 'var(--spacing-16)' }}>
            <SkeletonCircle size={48} color="white" />
          </div>
        </Case>
      </Section>

      {/* ── SkeletonText ───────────────────────────────────────── */}
      <Section title="SkeletonText · Length" gap="var(--spacing-16)" column>
        <Case label='length="100%"'>
          <div style={{ width: '320px' }}>
            <SkeletonText length="100%" />
          </div>
        </Case>
        <Case label='length="75%"'>
          <div style={{ width: '320px' }}>
            <SkeletonText length="75%" />
          </div>
        </Case>
        <Case label='length="50%"'>
          <div style={{ width: '320px' }}>
            <SkeletonText length="50%" />
          </div>
        </Case>
      </Section>

      <Section title="SkeletonText · Align" gap="var(--spacing-16)" column>
        {(['leading', 'center', 'trailing']).map(align => (
          <Case key={align} label={`align="${align}"`}>
            <div style={{ width: '320px' }}>
              <SkeletonText length="60%" align={align} />
            </div>
          </Case>
        ))}
      </Section>

      <Section title="SkeletonText · Height" gap="var(--spacing-16)" column>
        {[14, 18, 22, 28].map(h => (
          <Case key={h} label={`height={${h}}`}>
            <div style={{ width: '240px' }}>
              <SkeletonText length="80%" height={h} />
            </div>
          </Case>
        ))}
      </Section>

      {/* ── 카드 스켈레톤 조합 예시 ───────────────────────────── */}
      <Section title="Composition Example — 카드 스켈레톤">
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)',
          width: '280px', padding: 'var(--spacing-16)',
          backgroundColor: 'var(--color-bg-elevated)',
          borderRadius: 'var(--spacing-12)',
          border: '1px solid var(--color-line-neutral)',
        }}>
          <SkeletonRect aspectRatio="16/9" radius={8} />
          <div style={{ display: 'flex', gap: 'var(--spacing-12)', alignItems: 'center' }}>
            <SkeletonCircle size={40} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
              <SkeletonText length="80%" height={18} />
              <SkeletonText length="50%" height={14} />
            </div>
          </div>
          <SkeletonText length="100%" height={14} />
          <SkeletonText length="90%" height={14} />
          <SkeletonText length="60%" height={14} />
        </div>
      </Section>
    </div>
  )
}

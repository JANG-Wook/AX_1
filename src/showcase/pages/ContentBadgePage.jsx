import ContentBadge from '../../design-system/components/ContentBadge/ContentBadge'
import Section from '../Section'

export default function ContentBadgePage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>ContentBadge</h2>

      <Section title="Variant" background="var(--color-fill-alternative)" gap="var(--spacing-24)" wrap={false}>
        <ContentBadge variant="solid">텍스트</ContentBadge>
        <ContentBadge variant="outlined">텍스트</ContentBadge>
      </Section>

      <Section title="Icon" background="var(--color-fill-alternative)" gap="var(--spacing-24)" wrap={false}>
        <ContentBadge variant="solid" size="xsmall">텍스트</ContentBadge>
        <ContentBadge variant="solid" size="xsmall" leadingIcon="check">텍스트</ContentBadge>
        <ContentBadge variant="solid" size="xsmall" trailingIcon="check">텍스트</ContentBadge>
        <ContentBadge variant="solid" size="xsmall" leadingIcon="check" trailingIcon="check">텍스트</ContentBadge>
      </Section>

      <Section title="Size" background="var(--color-fill-alternative)" gap="var(--spacing-24)" wrap={false}>
        <ContentBadge variant="solid" size="xsmall" leadingIcon="check" trailingIcon="check">텍스트</ContentBadge>
        <ContentBadge variant="solid" size="small"  leadingIcon="check" trailingIcon="check">텍스트</ContentBadge>
        <ContentBadge variant="solid" size="medium" leadingIcon="check" trailingIcon="check">텍스트</ContentBadge>
      </Section>

      <Section title="Color" column background="var(--color-fill-alternative)" gap="var(--spacing-24)">
        <div style={{ display: 'flex', gap: 'var(--spacing-16)', alignItems: 'center' }}>
          <ContentBadge variant="solid">텍스트</ContentBadge>
          <ContentBadge variant="solid" color="var(--color-accent-fg-cyan)">텍스트</ContentBadge>
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-16)', alignItems: 'center' }}>
          <ContentBadge variant="outlined">텍스트</ContentBadge>
          <ContentBadge variant="outlined" color="var(--color-accent-fg-cyan)">텍스트</ContentBadge>
        </div>
      </Section>
    </div>
  )
}

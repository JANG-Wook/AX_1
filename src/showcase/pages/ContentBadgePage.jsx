import ContentBadge from '../../design-system/components/ContentBadge/ContentBadge'
import Icon from '../../design-system/components/Icon/Icon'
import Section, { Case } from '../Section'

const SIZES    = ['xsmall', 'small', 'medium']
const COLORS   = [
  { value: 'neutral',                     label: 'neutral'       },
  { value: 'var(--color-primary-normal)', label: 'primary'       },
  { value: 'var(--color-status-positive)', label: 'positive'     },
  { value: 'var(--color-status-negative)', label: 'negative'     },
  { value: 'var(--color-accent-bg-violet)', label: 'accent-violet'},
]

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

      <Section title="Variant" gap="var(--spacing-16)">
        <Case label='variant="solid"'>
          <ContentBadge variant="solid">레이블</ContentBadge>
        </Case>
        <Case label='variant="outlined"'>
          <ContentBadge variant="outlined">레이블</ContentBadge>
        </Case>
      </Section>

      <Section title="Size" gap="var(--spacing-16)">
        {SIZES.map(size => (
          <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
            <Case label={`size="${size}" · solid`}>
              <ContentBadge variant="solid" size={size}>레이블</ContentBadge>
            </Case>
            <Case label={`size="${size}" · outlined`}>
              <ContentBadge variant="outlined" size={size}>레이블</ContentBadge>
            </Case>
          </div>
        ))}
      </Section>

      <Section title="Color" gap="var(--spacing-16)" wrap>
        {COLORS.map(({ value, label }) => (
          <Case key={label} label={label}>
            <ContentBadge variant="solid" color={value}>{label}</ContentBadge>
          </Case>
        ))}
      </Section>

      <Section title="Outlined Color" gap="var(--spacing-16)" wrap>
        {COLORS.map(({ value, label }) => (
          <Case key={label} label={label}>
            <ContentBadge variant="outlined" color={value}>{label}</ContentBadge>
          </Case>
        ))}
      </Section>

      <Section title="With Icons" gap="var(--spacing-16)">
        <Case label="leading icon">
          <ContentBadge
            variant="solid"
            size="medium"
            leadingIcon={<Icon name="check" size={14} color="currentColor" />}
          >
            완료
          </ContentBadge>
        </Case>
        <Case label="trailing icon">
          <ContentBadge
            variant="solid"
            size="medium"
            trailingIcon={<Icon name="chevronRight" size={14} color="currentColor" />}
          >
            더 보기
          </ContentBadge>
        </Case>
        <Case label="leading + trailing">
          <ContentBadge
            variant="outlined"
            size="medium"
            leadingIcon={<Icon name="bell" size={14} color="currentColor" />}
            trailingIcon={<Icon name="xSmall" size={14} color="currentColor" />}
          >
            알림
          </ContentBadge>
        </Case>
      </Section>
    </div>
  )
}

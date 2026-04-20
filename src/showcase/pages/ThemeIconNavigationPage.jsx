import Icon from '../../design-system/components/Icon/Icon'
import Section from '../Section'

const NAV_ICONS = [
  'navigationCareer',
  'navigationRecruit',
  'navigationSocial',
  'navigationMypage',
  'navigationMenu',
]

const BORDER     = '1.5px dashed var(--color-accent-fg-violet)'
const RADIUS     = 'var(--spacing-12)'
const ICON_COLOR = 'var(--color-label-normal)'

function NavIconCard({ name }) {
  const label = name.replace('navigation', '')
  return (
    <div style={{
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      gap:            'var(--spacing-8)',
    }}>
      <div style={{
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        border:          BORDER,
        borderRadius:    RADIUS,
        padding:         'var(--spacing-16)',
        backgroundColor: 'var(--color-bg-elevated)',
      }}>
        <Icon name={name} size={24} color={ICON_COLOR} />
      </div>
      <span style={{
        fontSize:      'var(--font-size-caption-2)',
        lineHeight:    'var(--line-height-caption-2)',
        letterSpacing: 'var(--letter-spacing-caption-2)',
        fontWeight:    'var(--font-weight-regular)',
        color:         'var(--color-label-assistive)',
      }}>{label}</span>
    </div>
  )
}

export default function ThemeIconNavigationPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Navigation</h2>

      <Section
        title="Navigation Icons"
        description="Normal Solid 타입과 마찬가지로 대비가 충분한 색상을 선택할 수 있습니다."
      >
        {NAV_ICONS.map(name => (
          <NavIconCard key={name} name={name} />
        ))}
      </Section>
    </div>
  )
}

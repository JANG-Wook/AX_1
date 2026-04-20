import Icon from '../../design-system/components/Icon/Icon'
import Section from '../Section'

const NAV_ICONS = [
  'navigationCareer',
  'navigationRecruit',
  'navigationSocial',
  'navigationMypage',
  'navigationMenu',
]

/* ── 아이콘 목록 수집 (build time) ──────────────────────────── */
const modules = import.meta.glob(
  '../../design-system/icons/normal/*.svg',
  { eager: false }
)

const ALL_ICONS = Object.keys(modules)
  .map(p => p.split('/').pop().replace('.svg', ''))
  .sort()

const iconSet = new Set(ALL_ICONS)

// base + baseFill 페어 그룹화
const paired  = []
const singles = []
const consumed = new Set()

for (const name of ALL_ICONS) {
  if (consumed.has(name)) continue
  if (name.endsWith('Fill')) {
    const base = name.slice(0, -4)
    if (!iconSet.has(base)) {
      singles.push(name)
      consumed.add(name)
    }
    // base가 있으면 base 순서 처리 때 페어로 등록됨
  } else {
    const fill = name + 'Fill'
    if (iconSet.has(fill)) {
      paired.push([name, fill])
      consumed.add(name)
      consumed.add(fill)
    } else {
      singles.push(name)
      consumed.add(name)
    }
  }
}

/* ── 카드 스타일 ─────────────────────────────────────────────── */
const BORDER = '1.5px dashed var(--color-accent-fg-violet)'
const RADIUS = 'var(--spacing-12)'
const ICON_COLOR = 'var(--color-label-normal)'

function PairedCard({ base, fill }) {
  return (
    <div style={{
      display:         'flex',
      alignItems:      'center',
      justifyContent:  'center',
      gap:             'var(--spacing-16)',
      border:          BORDER,
      borderRadius:    RADIUS,
      padding:         'var(--spacing-16) var(--spacing-20)',
      backgroundColor: 'var(--color-bg-elevated)',
      flexShrink:      0,
    }}>
      <Icon name={base} size={24} color={ICON_COLOR} />
      <Icon name={fill} size={24} color={ICON_COLOR} />
    </div>
  )
}

function SingleCard({ name }) {
  return (
    <div style={{
      display:         'flex',
      alignItems:      'center',
      justifyContent:  'center',
      border:          BORDER,
      borderRadius:    RADIUS,
      padding:         'var(--spacing-16)',
      backgroundColor: 'var(--color-bg-elevated)',
      flexShrink:      0,
    }}>
      <Icon name={name} size={24} color={ICON_COLOR} />
    </div>
  )
}

/* ── 페이지 ──────────────────────────────────────────────────── */
export default function ThemeIconNormalPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Normal</h2>

      <Section title="Paired">
        <div style={{
          display:   'flex',
          flexWrap:  'wrap',
          gap:       'var(--spacing-8)',
        }}>
          {paired.map(([base, fill]) => (
            <PairedCard key={base} base={base} fill={fill} />
          ))}
        </div>
      </Section>

      <Section title="Single">
        <div style={{
          display:  'flex',
          flexWrap: 'wrap',
          gap:      'var(--spacing-8)',
        }}>
          {singles.map(name => (
            <SingleCard key={name} name={name} />
          ))}
        </div>
      </Section>

      <Section title="Navigation">
        <div style={{
          display:  'flex',
          flexWrap: 'wrap',
          gap:      'var(--spacing-8)',
        }}>
          {NAV_ICONS.map(name => (
            <SingleCard key={name} name={name} />
          ))}
        </div>
      </Section>
    </div>
  )
}

import Section from '../Section'

/* ─── Solid ─────────────────────────────────────────────────────── */
const SOLID_DIRECTIONS = [
  { key: 'top',    token: '--gradient-solid-top',    label: 'Top'    },
  { key: 'right',  token: '--gradient-solid-right',  label: 'Right'  },
  { key: 'bottom', token: '--gradient-solid-bottom', label: 'Bottom' },
  { key: 'left',   token: '--gradient-solid-left',   label: 'Left'   },
]

function SolidDirectionCard({ token, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
      <div style={{
        width:        '180px',
        height:       '120px',
        borderRadius: 'var(--spacing-8)',
        overflow:     'hidden',
        flexShrink:   0,
        position:     'relative',
      }}>
        <div style={{
          position:        'absolute',
          inset:           0,
          backgroundColor: 'var(--color-primary-normal)',
          WebkitMaskImage: `var(${token})`,
          maskImage:       `var(${token})`,
          color:           'var(--color-label-normal)',
        }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <span style={{
          fontSize:   'var(--font-size-label-2)',
          lineHeight: 'var(--line-height-label-2)',
          fontWeight: 'var(--font-weight-semibold)',
          color:      'var(--color-label-normal)',
        }}>{label}</span>
        <span style={{
          fontSize:   'var(--font-size-caption-2)',
          lineHeight: 'var(--line-height-caption-2)',
          fontWeight: 'var(--font-weight-regular)',
          color:      'var(--color-label-assistive)',
        }}>var({token})</span>
      </div>
    </div>
  )
}

/* ─── Multiple ───────────────────────────────────────────────────── */
const MULTIPLE_DIRECTIONS = [
  { key: 'top',    token: '--gradient-multiple-top',    label: 'Top'    },
  { key: 'right',  token: '--gradient-multiple-right',  label: 'Right'  },
  { key: 'bottom', token: '--gradient-multiple-bottom', label: 'Bottom' },
  { key: 'left',   token: '--gradient-multiple-left',   label: 'Left'   },
]

function BlendBox({ token, width = '180px', height = '120px' }) {
  return (
    <div style={{
      position:     'relative',
      width,
      height,
      borderRadius: 'var(--spacing-8)',
      overflow:     'hidden',
      flexShrink:   0,
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--color-primary-normal)' }} />
      <div style={{
        position:        'absolute',
        inset:           0,
        backgroundColor: 'var(--color-label-strong)',
        WebkitMaskImage: `var(${token})`,
        maskImage:       `var(${token})`,
        color:           'var(--color-label-normal)',
      }} />
    </div>
  )
}

function MultipleDirectionCard({ token, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
      <BlendBox token={token} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <span style={{
          fontSize:   'var(--font-size-label-2)',
          lineHeight: 'var(--line-height-label-2)',
          fontWeight: 'var(--font-weight-semibold)',
          color:      'var(--color-label-normal)',
        }}>{label}</span>
        <span style={{
          fontSize:   'var(--font-size-caption-2)',
          lineHeight: 'var(--line-height-caption-2)',
          fontWeight: 'var(--font-weight-regular)',
          color:      'var(--color-label-assistive)',
        }}>var({token})</span>
      </div>
    </div>
  )
}

/* ─── Mask ───────────────────────────────────────────────────────── */
const SIZES = [
  { key: 'xsmall', token: '--gradient-mask-size-xsmall', px: 24,  label: 'XSmall' },
  { key: 'small',  token: '--gradient-mask-size-small',  px: 32,  label: 'Small'  },
  { key: 'medium', token: '--gradient-mask-size-medium', px: 40,  label: 'Medium' },
  { key: 'xlarge', token: '--gradient-mask-size-xlarge', px: 56,  label: 'XLarge' },
  { key: 'large',  token: '--gradient-mask-size-large',  px: 64,  label: 'Large'  },
]

function SizeCard({ token, label, px }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--spacing-8)' }}>
      <div style={{
        width:        `var(${token})`,
        height:       `var(${token})`,
        background:   `linear-gradient(to right, transparent, var(--color-label-strong))`,
        borderRadius: 'var(--spacing-4)',
        flexShrink:   0,
      }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
        <span style={{
          fontSize:   'var(--font-size-label-2)',
          lineHeight: 'var(--line-height-label-2)',
          fontWeight: 'var(--font-weight-semibold)',
          color:      'var(--color-label-normal)',
        }}>{label}</span>
        <span style={{
          fontSize:   'var(--font-size-caption-2)',
          lineHeight: 'var(--line-height-caption-2)',
          fontWeight: 'var(--font-weight-regular)',
          color:      'var(--color-label-assistive)',
        }}>{px}px</span>
      </div>
    </div>
  )
}

/* ─── 페이지 ─────────────────────────────────────────────────────── */
const CARD_STYLE = {
  width:           '100%',
  backgroundColor: 'var(--color-fill-normal)',
  borderRadius:    'var(--spacing-12)',
  padding:         'var(--spacing-32)',
  boxSizing:       'border-box',
}

export default function DecorateGradientPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Decorate_Gradient</h2>

      <Section title="Solid">
        <div style={CARD_STYLE}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-32)' }}>
            {SOLID_DIRECTIONS.map(d => (
              <SolidDirectionCard key={d.key} token={d.token} label={d.label} />
            ))}
          </div>
        </div>
      </Section>

      <Section title="Multiple">
        <div style={CARD_STYLE}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-32)' }}>
            {MULTIPLE_DIRECTIONS.map(d => (
              <MultipleDirectionCard key={d.key} token={d.token} label={d.label} />
            ))}
          </div>
        </div>
      </Section>

      <Section title="Mask">
        <div style={CARD_STYLE}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', alignItems: 'flex-end' }}>
            {SIZES.map(s => (
              <SizeCard key={s.key} token={s.token} label={s.label} px={s.px} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}

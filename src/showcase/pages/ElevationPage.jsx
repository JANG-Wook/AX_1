import { useEffect, useState } from 'react'
import Section, { Case } from '../Section'

const SHADOW_NORMAL = [
  { id: 'xsmall', token: '--shadow-normal-xsmall', label: 'Normal / Xsmall' },
  { id: 'small',  token: '--shadow-normal-small',  label: 'Normal / Small'  },
  { id: 'medium', token: '--shadow-normal-medium', label: 'Normal / Medium' },
  { id: 'large',  token: '--shadow-normal-large',  label: 'Normal / Large'  },
  { id: 'xlarge', token: '--shadow-normal-xlarge', label: 'Normal / Xlarge' },
]

const SHADOW_SPREAD = [
  { id: 'small',  token: '--shadow-spread-small',  label: 'Spread / Small'  },
  { id: 'medium', token: '--shadow-spread-medium', label: 'Spread / Medium' },
]

const SHADOW_COMPONENT = [
  { id: 'knob',          token: '--shadow-segment-knob',         label: 'Component / Segment Knob'         },
  { id: 'textOverlay',   token: '--shadow-text-overlay',         label: 'Component / Text Overlay'         },
  { id: 'pageIndicator', token: '--shadow-page-indicator-text',  label: 'Component / Page Indicator Text'  },
]

function useCssVar(name) {
  const [value, setValue] = useState('')
  useEffect(() => {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
    setValue(v)
  }, [name])
  return value
}

function ShadowCard({ token, label }) {
  const value = useCssVar(token)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
      <div style={{
        width:           '160px',
        height:          '100px',
        borderRadius:    'var(--spacing-12)',
        backgroundColor: 'var(--color-bg-elevated)',
        boxShadow:       `var(${token})`,
        flexShrink:      0,
      }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', width: '160px' }}>
        <p style={{
          fontSize:      'var(--font-size-label-2)',
          lineHeight:    'var(--line-height-label-2)',
          letterSpacing: 'var(--letter-spacing-label-2)',
          fontWeight:    'var(--font-weight-semibold)',
          color:         'var(--color-label-normal)',
        }}>{label}</p>
        <p style={{
          fontSize:      'var(--font-size-caption-1)',
          lineHeight:    'var(--line-height-caption-1)',
          letterSpacing: 'var(--letter-spacing-caption-1)',
          fontWeight:    'var(--font-weight-regular)',
          color:         'var(--color-label-assistive)',
          wordBreak:     'break-all',
        }}>{token}</p>
        <p style={{
          fontSize:           'var(--font-size-caption-2)',
          lineHeight:         'var(--line-height-caption-2)',
          letterSpacing:      'var(--letter-spacing-caption-2)',
          fontWeight:         'var(--font-weight-regular)',
          color:              'var(--color-label-disable)',
          wordBreak:          'break-all',
          fontVariantNumeric: 'tabular-nums',
        }}>{value || '—'}</p>
      </div>
    </div>
  )
}

export default function ElevationPage() {
  return (
    <div>
      <h2 style={{
        fontSize:      'var(--font-size-title-3)',
        lineHeight:    'var(--line-height-title-3)',
        letterSpacing: 'var(--letter-spacing-title-3)',
        fontWeight:    'var(--font-weight-bold)',
        color:         'var(--color-label-normal)',
        marginBottom:  'var(--spacing-32)',
      }}>Elevation</h2>

      <Section title="Shadow — Normal" gap="var(--spacing-32)">
        {SHADOW_NORMAL.map(({ id, token, label }) => (
          <ShadowCard key={id} token={token} label={label} />
        ))}
      </Section>

      <Section title="Shadow — Spread" gap="var(--spacing-32)">
        {SHADOW_SPREAD.map(({ id, token, label }) => (
          <ShadowCard key={id} token={token} label={label} />
        ))}
      </Section>

      <Section title="Shadow — Component" gap="var(--spacing-32)">
        {SHADOW_COMPONENT.map(({ id, token, label }) => (
          <ShadowCard key={id} token={token} label={label} />
        ))}
      </Section>
    </div>
  )
}

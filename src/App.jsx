import Typography from './design-system/components/Typography/Typography.jsx'

const variants = [
  { variant: 'display-1',      weight: 'bold',     label: 'Display 1 · Bold' },
  { variant: 'display-2',      weight: 'bold',     label: 'Display 2 · Bold' },
  { variant: 'display-3',      weight: 'bold',     label: 'Display 3 · Bold' },
  { variant: 'title-1',        weight: 'bold',     label: 'Title 1 · Bold' },
  { variant: 'title-2',        weight: 'bold',     label: 'Title 2 · Bold' },
  { variant: 'title-3',        weight: 'bold',     label: 'Title 3 · Bold' },
  { variant: 'heading-1',      weight: 'semibold', label: 'Heading 1 · SemiBold' },
  { variant: 'heading-2',      weight: 'semibold', label: 'Heading 2 · SemiBold' },
  { variant: 'headline-1',     weight: 'semibold', label: 'Headline 1 · SemiBold' },
  { variant: 'headline-2',     weight: 'semibold', label: 'Headline 2 · SemiBold' },
  { variant: 'body-1-normal',  weight: 'regular',  label: 'Body 1 Normal · Regular' },
  { variant: 'body-1-reading', weight: 'regular',  label: 'Body 1 Reading · Regular' },
  { variant: 'body-2-normal',  weight: 'regular',  label: 'Body 2 Normal · Regular' },
  { variant: 'body-2-reading', weight: 'regular',  label: 'Body 2 Reading · Regular' },
  { variant: 'label-1-normal', weight: 'semibold', label: 'Label 1 Normal · SemiBold' },
  { variant: 'label-1-reading',weight: 'semibold', label: 'Label 1 Reading · SemiBold' },
  { variant: 'label-2',        weight: 'semibold', label: 'Label 2 · SemiBold' },
  { variant: 'caption-1',      weight: 'semibold', label: 'Caption 1 · SemiBold' },
  { variant: 'caption-2',      weight: 'semibold', label: 'Caption 2 · SemiBold' },
]

const pageStyle = {
  padding: '48px',
  background: 'var(--color-bg-normal-alternative)',
  minHeight: '100vh',
}

const sectionStyle = {
  display: 'flex',
  alignItems: 'baseline',
  gap: '32px',
  padding: '16px 0',
  borderBottom: '1px solid var(--color-label-disable)',
}

const labelStyle = {
  width: '220px',
  flexShrink: 0,
  fontFamily: 'var(--font-family-base)',
  fontSize: 'var(--font-size-caption-1)',
  lineHeight: 'var(--line-height-caption-1)',
  letterSpacing: 'var(--letter-spacing-caption-1)',
  fontWeight: 'var(--font-weight-regular)',
  color: 'var(--color-label-alternative)',
}

export default function App() {
  return (
    <div style={pageStyle}>
      <Typography variant="title-2" weight="bold" as="h1" style={{ marginBottom: '40px' }}>
        Foundation · Typography
      </Typography>
      {variants.map(({ variant, weight, label }) => (
        <div key={`${variant}-${weight}`} style={sectionStyle}>
          <span style={labelStyle}>{label}</span>
          <Typography variant={variant} weight={weight}>
            Pretendard 프리텐다드 プリテンダード
          </Typography>
        </div>
      ))}
    </div>
  )
}

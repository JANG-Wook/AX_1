import Typography from '../../design-system/components/Typography/Typography'
import Section from '../Section'

const SCALE = [
  { variant: 'display-1',       weights: ['bold']                           },
  { variant: 'display-2',       weights: ['bold']                           },
  { variant: 'display-3',       weights: ['bold']                           },
  { variant: 'title-1',         weights: ['bold']                           },
  { variant: 'title-2',         weights: ['bold']                           },
  { variant: 'title-3',         weights: ['bold']                           },
  { variant: 'heading-1',       weights: ['semibold']                       },
  { variant: 'heading-2',       weights: ['semibold']                       },
  { variant: 'headline-1',      weights: ['semibold']                       },
  { variant: 'headline-2',      weights: ['semibold']                       },
  { variant: 'body-1-normal',   weights: ['bold', 'semibold', 'medium', 'regular'] },
  { variant: 'body-1-reading',  weights: ['regular']                        },
  { variant: 'body-2-normal',   weights: ['bold', 'semibold', 'medium', 'regular'] },
  { variant: 'body-2-reading',  weights: ['regular']                        },
  { variant: 'label-1-normal',  weights: ['bold', 'semibold', 'medium', 'regular'] },
  { variant: 'label-1-reading', weights: ['semibold']                       },
  { variant: 'label-2',         weights: ['bold', 'semibold', 'medium', 'regular'] },
  { variant: 'caption-1',       weights: ['bold', 'semibold', 'medium', 'regular'] },
  { variant: 'caption-2',       weights: ['bold', 'semibold', 'medium', 'regular'] },
]

export default function TypographyPage() {
  return (
    <div>
      <h2 style={{
        fontSize:      'var(--font-size-title-3)',
        lineHeight:    'var(--line-height-title-3)',
        letterSpacing: 'var(--letter-spacing-title-3)',
        fontWeight:    'var(--font-weight-bold)',
        color:         'var(--color-label-normal)',
        marginBottom:  'var(--spacing-32)',
      }}>Typography</h2>

      {SCALE.map(({ variant, weights }) => (
        <Section key={variant} title={variant} gap="var(--spacing-8)" column>
          {weights.map(weight => (
            <div key={weight} style={{
              display:     'flex',
              alignItems:  'baseline',
              gap:         'var(--spacing-24)',
              paddingTop:  'var(--spacing-4)',
              paddingBottom: 'var(--spacing-4)',
              width:       '100%',
            }}>
              <p style={{
                width:         '100px',
                flexShrink:    0,
                fontSize:      'var(--font-size-caption-1)',
                lineHeight:    'var(--line-height-caption-1)',
                letterSpacing: 'var(--letter-spacing-caption-1)',
                fontWeight:    'var(--font-weight-regular)',
                color:         'var(--color-label-assistive)',
              }}>{weight}</p>
              <Typography variant={variant} weight={weight}>
                Pretendard 프리텐다드 プリテンダード
              </Typography>
            </div>
          ))}
        </Section>
      ))}
    </div>
  )
}

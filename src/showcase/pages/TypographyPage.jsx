import { useEffect, useState } from 'react'
import Typography from '../../design-system/components/Typography/Typography'
import Section from '../Section'

/* variant → CSS 변수 키 매핑 (Typography.jsx의 VARIANT_MAP과 동일) */
const VARIANT_MAP = {
  'display-1':       { size: 'display-1',  lh: 'display-1',       ls: 'display-1'  },
  'display-2':       { size: 'display-2',  lh: 'display-2',       ls: 'display-2'  },
  'display-3':       { size: 'display-3',  lh: 'display-3',       ls: 'display-3'  },
  'title-1':         { size: 'title-1',    lh: 'title-1',         ls: 'title-1'    },
  'title-2':         { size: 'title-2',    lh: 'title-2',         ls: 'title-2'    },
  'title-3':         { size: 'title-3',    lh: 'title-3',         ls: 'title-3'    },
  'heading-1':       { size: 'heading-1',  lh: 'heading-1',       ls: 'heading-1'  },
  'heading-2':       { size: 'heading-2',  lh: 'heading-2',       ls: 'heading-2'  },
  'headline-1':      { size: 'headline-1', lh: 'headline-1',      ls: 'headline-1' },
  'headline-2':      { size: 'headline-2', lh: 'headline-2',      ls: 'headline-2' },
  'body-1-normal':   { size: 'body-1',     lh: 'body-1-normal',   ls: 'body-1'     },
  'body-1-reading':  { size: 'body-1',     lh: 'body-1-reading',  ls: 'body-1'     },
  'body-2-normal':   { size: 'body-2',     lh: 'body-2-normal',   ls: 'body-2'     },
  'body-2-reading':  { size: 'body-2',     lh: 'body-2-reading',  ls: 'body-2'     },
  'label-1-normal':  { size: 'label-1',    lh: 'label-1-normal',  ls: 'label-1'    },
  'label-1-reading': { size: 'label-1',    lh: 'label-1-reading', ls: 'label-1'    },
  'label-2':         { size: 'label-2',    lh: 'label-2',         ls: 'label-2'    },
  'caption-1':       { size: 'caption-1',  lh: 'caption-1',       ls: 'caption-1'  },
  'caption-2':       { size: 'caption-2',  lh: 'caption-2',       ls: 'caption-2'  },
}

function useTypoSpec(variant) {
  const [spec, setSpec] = useState({ size: '', lh: '', ls: '' })
  useEffect(() => {
    const map = VARIANT_MAP[variant]
    if (!map) return
    const cs = getComputedStyle(document.documentElement)
    setSpec({
      size: cs.getPropertyValue(`--font-size-${map.size}`).trim(),
      lh:   cs.getPropertyValue(`--line-height-${map.lh}`).trim(),
      ls:   cs.getPropertyValue(`--letter-spacing-${map.ls}`).trim(),
    })
  }, [variant])
  return spec
}

function TypoSpec({ variant }) {
  const { size, lh, ls } = useTypoSpec(variant)
  const metaStyle = {
    fontSize:           'var(--font-size-caption-1)',
    lineHeight:         'var(--line-height-caption-1)',
    letterSpacing:      'var(--letter-spacing-caption-1)',
    fontWeight:         'var(--font-weight-regular)',
    color:              'var(--color-label-assistive)',
    fontVariantNumeric: 'tabular-nums',
  }
  return (
    <p style={metaStyle}>
      {size || '—'} · {lh || '—'} · {ls || '—'}
    </p>
  )
}

const SCALE = [
  { variant: 'display-1',       weights: ['bold']                                   },
  { variant: 'display-2',       weights: ['bold']                                   },
  { variant: 'display-3',       weights: ['bold']                                   },
  { variant: 'title-1',         weights: ['bold']                                   },
  { variant: 'title-2',         weights: ['bold']                                   },
  { variant: 'title-3',         weights: ['bold']                                   },
  { variant: 'heading-1',       weights: ['semibold']                               },
  { variant: 'heading-2',       weights: ['semibold']                               },
  { variant: 'headline-1',      weights: ['semibold']                               },
  { variant: 'headline-2',      weights: ['semibold']                               },
  { variant: 'body-1-normal',   weights: ['bold', 'semibold', 'medium', 'regular']  },
  { variant: 'body-1-reading',  weights: ['regular']                                },
  { variant: 'body-2-normal',   weights: ['bold', 'semibold', 'medium', 'regular']  },
  { variant: 'body-2-reading',  weights: ['regular']                                },
  { variant: 'label-1-normal',  weights: ['bold', 'semibold', 'medium', 'regular']  },
  { variant: 'label-1-reading', weights: ['semibold']                               },
  { variant: 'label-2',         weights: ['bold', 'semibold', 'medium', 'regular']  },
  { variant: 'caption-1',       weights: ['bold', 'semibold', 'medium', 'regular']  },
  { variant: 'caption-2',       weights: ['bold', 'semibold', 'medium', 'regular']  },
]

const labelStyle = {
  width:         '100px',
  flexShrink:    0,
  fontSize:      'var(--font-size-caption-1)',
  lineHeight:    'var(--line-height-caption-1)',
  letterSpacing: 'var(--letter-spacing-caption-1)',
  fontWeight:    'var(--font-weight-regular)',
  color:         'var(--color-label-assistive)',
}

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
              display:       'flex',
              flexDirection: 'column',
              gap:           'var(--spacing-4)',
              paddingTop:    'var(--spacing-4)',
              paddingBottom: 'var(--spacing-12)',
              width:         '100%',
            }}>
              {/* 텍스트 예시 행 */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--spacing-24)' }}>
                <p style={labelStyle}>{weight}</p>
                <Typography variant={variant} weight={weight}>
                  Pretendard 프리텐다드 プリテンダード
                </Typography>
              </div>
              {/* 상세 스펙 행 */}
              <div style={{ display: 'flex', gap: 'var(--spacing-24)' }}>
                <div style={{ width: '100px', flexShrink: 0 }} />
                <TypoSpec variant={variant} />
              </div>
            </div>
          ))}
        </Section>
      ))}
    </div>
  )
}

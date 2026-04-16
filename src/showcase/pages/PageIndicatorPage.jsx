import PageIndicatorCounter from '../../design-system/components/PageIndicatorCounter/PageIndicatorCounter'
import Section, { Case } from '../Section'

export default function PageIndicatorPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>PageIndicatorCounter</h2>

      <Section title="Size" background="var(--color-bg-normal-alternative)" gap="var(--spacing-32)">
        <Case label='size="medium"' center>
          <PageIndicatorCounter current="3" total="12" size="medium" />
        </Case>
        <Case label='size="small"' center>
          <PageIndicatorCounter current="3" total="12" size="small" />
        </Case>
      </Section>

      <Section title="Alternative Style" gap="var(--spacing-32)">
        <Case label='alternative=false (글래스)' background="var(--color-bg-normal-alternative)">
          <div style={{ padding: 'var(--spacing-24)' }}>
            <PageIndicatorCounter current="5" total="20" alternative={false} />
          </div>
        </Case>
        <Case label='alternative=true (텍스트만)'>
          <PageIndicatorCounter current="5" total="20" alternative={true} />
        </Case>
      </Section>

      <Section title="Various Values" background="var(--color-bg-normal-alternative)" gap="var(--spacing-24)">
        {[
          { current: '1',  total: '10'  },
          { current: '5',  total: '20'  },
          { current: '10', total: '10'  },
          { current: '1',  total: '100' },
          { current: '99', total: '100' },
        ].map(({ current, total }) => (
          <Case key={`${current}/${total}`} label={`${current} / ${total}`} center>
            <PageIndicatorCounter current={current} total={total} />
          </Case>
        ))}
      </Section>
    </div>
  )
}

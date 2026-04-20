import Divider from '../../design-system/components/Divider/Divider'
import Section, { Case } from '../Section'

export default function DividerPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Divider</h2>

      <Section title="Variant (Horizontal)" gap="var(--spacing-24)" column background="var(--color-fill-normal)">
        <Case label='variant="normal" (1px)'>
          <div style={{ width: '400px' }}>
            <Divider variant="normal" />
          </div>
        </Case>
        <Case label='variant="thick" (12px)'>
          <div style={{ width: '400px' }}>
            <Divider variant="thick" />
          </div>
        </Case>
      </Section>

      <Section title="Vertical" gap="var(--spacing-24)" background="var(--color-fill-normal)">
        <Case label='vertical=true'>
          <div style={{ display: 'flex', alignItems: 'center', height: '64px', gap: 'var(--spacing-16)' }}>
            <span style={{ fontSize: 'var(--font-size-body-2)', color: 'var(--color-label-normal)' }}>항목 A</span>
            <Divider vertical />
            <span style={{ fontSize: 'var(--font-size-body-2)', color: 'var(--color-label-normal)' }}>항목 B</span>
            <Divider vertical />
            <span style={{ fontSize: 'var(--font-size-body-2)', color: 'var(--color-label-normal)' }}>항목 C</span>
          </div>
        </Case>
      </Section>

      <Section title="In Context" gap="var(--spacing-16)" column background="var(--color-fill-normal)">
        <Case label="리스트 항목 구분">
          <div style={{ width: '360px', backgroundColor: 'var(--color-bg-elevated)', borderRadius: 'var(--spacing-12)', overflow: 'hidden', border: '1px solid var(--color-line-neutral)' }}>
            {['첫 번째 항목', '두 번째 항목', '세 번째 항목'].map((item, i, arr) => (
              <div key={item}>
                <div style={{ padding: 'var(--spacing-16)', fontSize: 'var(--font-size-body-2)', color: 'var(--color-label-normal)' }}>{item}</div>
                {i < arr.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </Case>
      </Section>
    </div>
  )
}

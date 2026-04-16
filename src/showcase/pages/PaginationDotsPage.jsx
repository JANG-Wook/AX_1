import { useState } from 'react'
import PaginationDots from '../../design-system/components/PaginationDots/PaginationDots'
import Section, { Case } from '../Section'

export default function PaginationDotsPage() {
  const [page, setPage] = useState(2)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>PaginationDots</h2>

      <Section title="Variant" background="var(--color-bg-normal-alternative)" gap="var(--spacing-32)">
        <Case label='variant="normal"' center>
          <PaginationDots count={5} value={2} variant="normal" />
        </Case>
        <Case label='variant="overflow"' center>
          <PaginationDots count={10} value={4} variant="overflow" />
        </Case>
      </Section>

      <Section title="Size" background="var(--color-bg-normal-alternative)" gap="var(--spacing-32)">
        <Case label='size="medium"' center>
          <PaginationDots count={5} value={2} size="medium" />
        </Case>
        <Case label='size="small"' center>
          <PaginationDots count={5} value={2} size="small" />
        </Case>
      </Section>

      <Section title="Count Variations" background="var(--color-bg-normal-alternative)" gap="var(--spacing-24)">
        {[3, 5, 7, 10].map(count => (
          <Case key={count} label={`count={${count}}`} center>
            <PaginationDots count={count} value={Math.floor(count / 2)} />
          </Case>
        ))}
      </Section>

      <Section title="Position (value)" background="var(--color-bg-normal-alternative)" gap="var(--spacing-24)">
        {[0, 1, 2, 3, 4].map(v => (
          <Case key={v} label={`value={${v}}`} center>
            <PaginationDots count={5} value={v} />
          </Case>
        ))}
      </Section>

      <Section title="Dark Background" background="var(--color-inverse-background)" gap="var(--spacing-32)">
        <Case label="dark bg · normal" center>
          <PaginationDots count={5} value={2} />
        </Case>
        <Case label="dark bg · overflow" center>
          <PaginationDots count={10} value={4} variant="overflow" />
        </Case>
      </Section>
    </div>
  )
}

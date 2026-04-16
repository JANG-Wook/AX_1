import Tooltip from '../../design-system/components/Tooltip/Tooltip'
import Section, { Case } from '../Section'

const POSITIONS = ['bottom', 'top', 'right', 'left']
const ALIGNS   = ['start', 'center', 'end']
const SIZES    = ['medium', 'small']

export default function TooltipPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Tooltip</h2>

      <Section title="Size" gap="var(--spacing-24)">
        {SIZES.map(size => (
          <Case key={size} label={`size="${size}"`} center>
            <Tooltip size={size} label="저장" position="bottom" />
          </Case>
        ))}
      </Section>

      <Section title="Position" gap="var(--spacing-32)">
        {POSITIONS.map(pos => (
          <Case key={pos} label={`position="${pos}"`} center>
            <Tooltip position={pos} label="툴팁" align="center" />
          </Case>
        ))}
      </Section>

      <Section title="Align (position=bottom 기준)" gap="var(--spacing-24)">
        {ALIGNS.map(align => (
          <Case key={align} label={`align="${align}"`} center>
            <Tooltip position="bottom" align={align} label="정렬 예시" />
          </Case>
        ))}
      </Section>

      <Section title="Align (position=right 기준)" gap="var(--spacing-24)">
        {ALIGNS.map(align => (
          <Case key={align} label={`align="${align}"`} center>
            <Tooltip position="right" align={align} label="정렬 예시" />
          </Case>
        ))}
      </Section>

      <Section title="Shortcut" gap="var(--spacing-24)">
        <Case label="shortcut 없음" center>
          <Tooltip label="복사" position="bottom" />
        </Case>
        <Case label='shortcut shortcutText="⌘C"' center>
          <Tooltip label="복사" position="bottom" shortcut shortcutText="⌘C" />
        </Case>
        <Case label='shortcut shortcutText="⌘⇧Z"' center>
          <Tooltip label="다시 실행" position="bottom" shortcut shortcutText="⌘⇧Z" />
        </Case>
      </Section>

      <Section title="Size × Position Matrix" gap="var(--spacing-32)">
        {SIZES.map(size =>
          POSITIONS.map(pos => (
            <Case key={`${size}-${pos}`} label={`${size} · ${pos}`} center>
              <Tooltip size={size} position={pos} label="예시" align="center" />
            </Case>
          ))
        )}
      </Section>
    </div>
  )
}

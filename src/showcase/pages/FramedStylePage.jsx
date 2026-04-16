import FramedStyle from '../../design-system/components/FramedStyle/FramedStyle'
import Thumbnail from '../../design-system/components/Thumbnail/Thumbnail'
import Section, { Case } from '../Section'

const IMG = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'

function ThumbContent() {
  return (
    <div style={{ width: '100px' }}>
      <Thumbnail src={IMG} alt="예시" ratio="1/1" radius />
    </div>
  )
}

export default function FramedStylePage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>FramedStyle</h2>

      <Section title="Selected" gap="var(--spacing-24)">
        <Case label='selected=false (기본)'>
          <FramedStyle selected={false}>
            <ThumbContent />
          </FramedStyle>
        </Case>
        <Case label='selected=true'>
          <FramedStyle selected={true}>
            <ThumbContent />
          </FramedStyle>
        </Case>
      </Section>

      <Section title="Status" gap="var(--spacing-24)">
        <Case label='status="normal" + selected'>
          <FramedStyle selected status="normal">
            <ThumbContent />
          </FramedStyle>
        </Case>
        <Case label='status="negative" + selected'>
          <FramedStyle selected status="negative">
            <ThumbContent />
          </FramedStyle>
        </Case>
        <Case label='status="negative" (미선택)'>
          <FramedStyle selected={false} status="negative">
            <ThumbContent />
          </FramedStyle>
        </Case>
      </Section>

      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label='disabled=false'>
          <FramedStyle selected={true} disabled={false}>
            <ThumbContent />
          </FramedStyle>
        </Case>
        <Case label='disabled=true'>
          <FramedStyle selected={true} disabled={true}>
            <ThumbContent />
          </FramedStyle>
        </Case>
      </Section>

      <Section title="Clickable" gap="var(--spacing-24)">
        <Case label='onClick 제공 (커서: pointer)'>
          <FramedStyle selected={false} onClick={() => {}}>
            <ThumbContent />
          </FramedStyle>
        </Case>
      </Section>
    </div>
  )
}

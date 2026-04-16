import Thumbnail from '../../design-system/components/Thumbnail/Thumbnail'
import Section, { Case } from '../Section'

const RATIOS = ['1/1', '4/3', '16/9', '3/4', '9/16']
const IMG_SRC = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'

export default function ThumbnailPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Thumbnail</h2>

      <Section title="Ratio" gap="var(--spacing-24)">
        {RATIOS.map(ratio => (
          <Case key={ratio} label={`ratio="${ratio}"`}>
            <div style={{ width: '120px' }}>
              <Thumbnail src={IMG_SRC} alt="썸네일" ratio={ratio} />
            </div>
          </Case>
        ))}
      </Section>

      <Section title="Radius" gap="var(--spacing-24)">
        <Case label='radius=false (기본)'>
          <div style={{ width: '160px' }}>
            <Thumbnail src={IMG_SRC} alt="썸네일" ratio="16/9" radius={false} />
          </div>
        </Case>
        <Case label='radius=true (12px)'>
          <div style={{ width: '160px' }}>
            <Thumbnail src={IMG_SRC} alt="썸네일" ratio="16/9" radius />
          </div>
        </Case>
      </Section>

      <Section title="Border" gap="var(--spacing-24)">
        <Case label='border=false (기본)'>
          <div style={{ width: '160px' }}>
            <Thumbnail src={IMG_SRC} alt="썸네일" ratio="1/1" radius border={false} />
          </div>
        </Case>
        <Case label='border=true'>
          <div style={{ width: '160px' }}>
            <Thumbnail src={IMG_SRC} alt="썸네일" ratio="1/1" radius border />
          </div>
        </Case>
      </Section>

      <Section title="No Image (placeholder)" gap="var(--spacing-24)">
        {RATIOS.slice(0, 3).map(ratio => (
          <Case key={ratio} label={`ratio="${ratio}" · no src`}>
            <div style={{ width: '120px' }}>
              <Thumbnail src="" alt="" ratio={ratio} radius />
            </div>
          </Case>
        ))}
      </Section>

      <Section title="With Overlay" gap="var(--spacing-24)">
        <Case label="overlay ReactNode">
          <div style={{ width: '200px' }}>
            <Thumbnail
              src={IMG_SRC}
              alt="썸네일"
              ratio="16/9"
              radius
              overlay={
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.4)',
                }}>
                  <p style={{ color: 'var(--color-static-white)', fontSize: 'var(--font-size-label-1)', fontWeight: 'var(--font-weight-semibold)' }}>
                    재생
                  </p>
                </div>
              }
            />
          </div>
        </Case>
      </Section>
    </div>
  )
}

import Thumbnail from '../../design-system/components/Thumbnail/Thumbnail'
import Icon from '../../design-system/components/Icon/Icon'
import Section, { Case } from '../Section'

const IMG_SRC = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'

const LANDSCAPE_RATIOS = ['1/1', '5/4', '4/3', '3/2', '16/10', '1.618/1', '16/9', '2/1', '21/9']
const PORTRAIT_RATIOS  = ['4/5', '3/4', '2/3', '10/16', '1/1.618', '9/16', '1/2', '9/21']

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

      <Section title="Ratio" column background="var(--color-fill-alternative)" gap="var(--spacing-24)">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-16)', alignItems: 'flex-end' }}>
          {LANDSCAPE_RATIOS.map(ratio => (
            <Case key={ratio} label={ratio}>
              <div style={{ width: '100px' }}>
                <Thumbnail src={IMG_SRC} alt="썸네일" ratio={ratio} />
              </div>
            </Case>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-16)', alignItems: 'flex-start' }}>
          {PORTRAIT_RATIOS.map(ratio => (
            <Case key={ratio} label={ratio}>
              <div style={{ width: '100px' }}>
                <Thumbnail src={IMG_SRC} alt="썸네일" ratio={ratio} />
              </div>
            </Case>
          ))}
        </div>
      </Section>

      <Section title="Radius" background="var(--color-fill-alternative)" gap="var(--spacing-24)">
        <Case label="radius=false (기본)">
          <div style={{ width: '240px' }}>
            <Thumbnail src="" alt="" ratio="1/1" radius={false} />
          </div>
        </Case>
        <Case label="radius=true">
          <div style={{ width: '240px' }}>
            <Thumbnail src="" alt="" ratio="1/1" radius />
          </div>
        </Case>
      </Section>

      <Section title="Border" column background="var(--color-fill-alternative)" gap="var(--spacing-24)">
        <div style={{ display: 'flex', gap: 'var(--spacing-24)' }}>
          <Case label="radius=false · border=false">
            <div style={{ width: '240px' }}>
              <Thumbnail src="" alt="" ratio="1/1" radius={false} border={false} />
            </div>
          </Case>
          <Case label="radius=false · border=true">
            <div style={{ width: '240px' }}>
              <Thumbnail src="" alt="" ratio="1/1" radius={false} border />
            </div>
          </Case>
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)' }}>
          <Case label="radius=true · border=false">
            <div style={{ width: '240px' }}>
              <Thumbnail src="" alt="" ratio="1/1" radius border={false} />
            </div>
          </Case>
          <Case label="radius=true · border=true">
            <div style={{ width: '240px' }}>
              <Thumbnail src="" alt="" ratio="1/1" radius border />
            </div>
          </Case>
        </div>
      </Section>

      <Section title="Resource" background="var(--color-fill-alternative)" gap="var(--spacing-24)">
        <div style={{ width: '240px' }}>
          <Thumbnail
            src={IMG_SRC}
            alt="썸네일"
            ratio="1/1"
            radius
            overlay={
              <div style={{
                position:        'absolute',
                inset:           0,
                backgroundColor: 'var(--color-accent-bg-violet)',
                opacity:         0.08,
              }} />
            }
          />
        </div>
        <div style={{ width: '240px' }}>
          <Thumbnail
            src={IMG_SRC}
            alt="썸네일"
            ratio="1/1"
            radius
            overlay={
              <div style={{
                position:        'relative',
                width:           '60px',
                height:          '60px',
                borderRadius:    '50%',
                backdropFilter:  'blur(32px)',
                overflow:        'hidden',
                display:         'flex',
                alignItems:      'center',
                justifyContent:  'center',
              }}>
                <div style={{
                  position:        'absolute',
                  inset:           0,
                  backgroundColor: 'var(--color-label-normal)',
                  opacity:         0.28,
                }} />
                <Icon name="play" size={24} color="var(--color-static-white)" />
              </div>
            }
          />
        </div>
      </Section>
    </div>
  )
}

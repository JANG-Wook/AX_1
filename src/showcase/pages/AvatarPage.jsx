import Avatar from '../../design-system/components/Avatar/Avatar'
import Section, { Case } from '../Section'
import profileImg from '/T1_parksy/Profile.png'
import companyImg from '/T1_parksy/Company.jpg'

const SIZES    = ['xsmall', 'small', 'medium', 'large', 'xlarge']
const VARIANTS = ['person', 'company', 'academy']

function OnlineDot() {
  return (
    <div style={{
      width: '10px', height: '10px', borderRadius: '50%',
      backgroundColor: 'var(--color-status-positive)',
      border: '2px solid var(--color-bg-elevated)',
    }} />
  )
}

export default function AvatarPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Avatar</h2>

      <Section title="Variant (플레이스홀더)" gap="var(--spacing-24)">
        {VARIANTS.map(v => (
          <Case key={v} label={`variant="${v}"`} center>
            <Avatar variant={v} size="medium" />
          </Case>
        ))}
      </Section>

      <Section title="Size" gap="var(--spacing-24)">
        {SIZES.map(s => (
          <Case key={s} label={`size="${s}"`} center>
            <Avatar variant="person" size={s} />
          </Case>
        ))}
      </Section>

      <Section title="With Image (src)" gap="var(--spacing-24)">
        {SIZES.map(s => (
          <Case key={s} label={`size="${s}"`} center>
            <Avatar
              variant="person"
              size={s}
              src={profileImg}
              alt="박서준 프로필"
            />
          </Case>
        ))}
      </Section>

      <Section title="Company / Academy with Image" gap="var(--spacing-24)">
        <Case label='variant="company"' center>
          <Avatar variant="company" size="large" src={companyImg} alt="T1" />
        </Case>
        <Case label='variant="academy"' center>
          <Avatar variant="academy" size="large" src={companyImg} alt="T1" />
        </Case>
      </Section>

      <Section title="With Badge" gap="var(--spacing-32)">
        <Case label='badge 슬롯 (온라인 뱃지)' center>
          <Avatar variant="person" size="large" badge={<OnlineDot />} />
        </Case>
        <Case label='badge + image' center>
          <Avatar
            variant="person"
            size="large"
            src={profileImg}
            alt="박서준 프로필"
            badge={<OnlineDot />}
          />
        </Case>
        <Case label='xlarge + badge' center>
          <Avatar
            variant="person"
            size="xlarge"
            src={profileImg}
            alt="박서준 프로필"
            badge={<OnlineDot />}
          />
        </Case>
      </Section>
    </div>
  )
}

import Toast from '../../design-system/components/Toast/Toast'
import Icon from '../../design-system/components/Icon/Icon'
import Section, { Case } from '../Section'

const VARIANTS = ['normal', 'positive', 'cautionary', 'negative']

export default function ToastPage() {
  return (
    <div>
      <h2 style={{
        fontSize:      'var(--font-size-title-3)',
        lineHeight:    'var(--line-height-title-3)',
        fontWeight:    'var(--font-weight-bold)',
        color:         'var(--color-label-normal)',
        marginBottom:  'var(--spacing-32)',
      }}>Toast</h2>

      <Section title="Variant" background="var(--color-bg-normal-alternative)">
        {VARIANTS.map(v => (
          <Case key={v} label={`variant="${v}"`} center>
            <Toast variant={v} text="저장되었습니다" />
          </Case>
        ))}
      </Section>

      <Section title="Normal + Leading Icon" background="var(--color-bg-normal-alternative)">
        <Case label="leadingIcon 있음" center>
          <Toast
            variant="normal"
            text="알림이 도착했습니다"
            leadingIcon={<Icon name="bell" size={20} color="var(--color-static-white)" />}
          />
        </Case>
        <Case label="leadingIcon 없음" center>
          <Toast variant="normal" text="알림이 도착했습니다" />
        </Case>
      </Section>

      <Section title="Long Text" background="var(--color-bg-normal-alternative)">
        <Case label="짧은 텍스트" center>
          <Toast variant="positive" text="완료" />
        </Case>
        <Case label="긴 텍스트" center>
          <Toast variant="negative" text="일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." />
        </Case>
      </Section>
    </div>
  )
}

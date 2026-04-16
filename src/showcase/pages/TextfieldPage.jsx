import Textfield from '../../design-system/components/Textfield/Textfield'
import Icon from '../../design-system/components/Icon/Icon'
import Section, { Case } from '../Section'

export default function TextfieldPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Textfield</h2>

      <Section title="Status" gap="var(--spacing-24)">
        <Case label='status="normal"'>
          <div style={{ width: '280px' }}>
            <Textfield status="normal" placeholder="입력하세요" />
          </div>
        </Case>
        <Case label='status="positive"'>
          <div style={{ width: '280px' }}>
            <Textfield status="positive" placeholder="입력하세요" defaultValue="올바른 입력값" />
          </div>
        </Case>
        <Case label='status="negative"'>
          <div style={{ width: '280px' }}>
            <Textfield status="negative" placeholder="입력하세요" defaultValue="잘못된 입력값" />
          </div>
        </Case>
      </Section>

      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label="disabled (비어 있음)">
          <div style={{ width: '280px' }}>
            <Textfield disabled placeholder="비활성화 상태" />
          </div>
        </Case>
        <Case label="disabled (값 있음)">
          <div style={{ width: '280px' }}>
            <Textfield disabled defaultValue="변경 불가 값" />
          </div>
        </Case>
      </Section>

      <Section title="With Heading" gap="var(--spacing-24)" column>
        <Case label="heading만">
          <div style={{ width: '360px' }}>
            <Textfield heading="이름" placeholder="실명을 입력하세요" />
          </div>
        </Case>
        <Case label="heading + required">
          <div style={{ width: '360px' }}>
            <Textfield heading="이메일" required placeholder="example@email.com" />
          </div>
        </Case>
        <Case label="heading + required + description">
          <div style={{ width: '360px' }}>
            <Textfield
              heading="비밀번호"
              required
              description="영문, 숫자, 특수문자를 포함해 8자 이상 입력하세요"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
        </Case>
        <Case label="heading + status=negative + description">
          <div style={{ width: '360px' }}>
            <Textfield
              heading="이메일"
              status="negative"
              description="올바르지 않은 이메일 형식입니다"
              defaultValue="notanemail"
            />
          </div>
        </Case>
        <Case label="heading + status=positive + description">
          <div style={{ width: '360px' }}>
            <Textfield
              heading="사용자명"
              status="positive"
              description="사용 가능한 사용자명입니다"
              defaultValue="john_doe"
            />
          </div>
        </Case>
      </Section>

      <Section title="With Leading Icon" gap="var(--spacing-24)">
        <Case label='icon="search"'>
          <div style={{ width: '280px' }}>
            <Textfield icon="search" placeholder="검색어를 입력하세요" />
          </div>
        </Case>
        <Case label='icon="person"'>
          <div style={{ width: '280px' }}>
            <Textfield icon="person" placeholder="이름을 입력하세요" />
          </div>
        </Case>
        <Case label='icon="lock"'>
          <div style={{ width: '280px' }}>
            <Textfield icon="lock" placeholder="비밀번호를 입력하세요" />
          </div>
        </Case>
      </Section>

      <Section title="With Trailing Content" gap="var(--spacing-24)">
        <Case label="trailingContent: 버튼">
          <div style={{ width: '280px' }}>
            <Textfield
              placeholder="검색어를 입력하세요"
              trailingContent={
                <button style={{
                  background: 'none', border: 'none', cursor: 'pointer', padding: 'var(--spacing-4)',
                  display: 'flex', alignItems: 'center', color: 'var(--color-label-assistive)',
                }}>
                  <Icon name="xCircle" size={20} />
                </button>
              }
            />
          </div>
        </Case>
        <Case label="trailingContent: 텍스트 버튼">
          <div style={{ width: '280px' }}>
            <Textfield
              heading="인증번호"
              placeholder="6자리 입력"
              trailingContent={
                <button style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 'var(--font-size-label-2)', fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--color-primary-normal)', whiteSpace: 'nowrap', padding: '0 var(--spacing-4)',
                }}>재발송</button>
              }
            />
          </div>
        </Case>
        <Case label="icon + trailing">
          <div style={{ width: '280px' }}>
            <Textfield
              icon="search"
              placeholder="검색어를 입력하세요"
              trailingContent={
                <button style={{
                  background: 'none', border: 'none', cursor: 'pointer', padding: 'var(--spacing-4)',
                  display: 'flex', alignItems: 'center', color: 'var(--color-label-assistive)',
                }}>
                  <Icon name="xCircle" size={20} />
                </button>
              }
            />
          </div>
        </Case>
      </Section>
    </div>
  )
}

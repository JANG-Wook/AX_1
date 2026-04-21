import { useState } from 'react'
import ListCell from '../../design-system/components/ListCell/ListCell'
import Avatar from '../../design-system/components/Avatar/Avatar'
import Switch from '../../design-system/components/Switch/Switch'
import Icon from '../../design-system/components/Icon/Icon'
import Section, { Case } from '../Section'

export default function ListCellPage() {
  const [lastClicked, setLastClicked] = useState(null)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>ListCell</h2>

      <Section title="인터랙션 데모" gap="var(--spacing-8)" column>
        <Case label="셀을 클릭하거나 마우스를 올려보세요">
          <div style={{ width: '400px', display: 'flex', flexDirection: 'column' }}>
            {['알림 설정', '개인정보 보호', '언어 설정'].map((label, i, arr) => (
              <ListCell
                key={label}
                label={label}
                chevron
                divider={i < arr.length - 1}
                onClick={() => setLastClicked(label)}
              />
            ))}
            <div style={{
              marginTop: 'var(--spacing-12)',
              padding: 'var(--spacing-12)',
              borderRadius: 'var(--spacing-8)',
              backgroundColor: 'var(--color-fill-normal)',
              fontSize: 'var(--font-size-body-2)',
              color: 'var(--color-label-alternative)',
            }}>
              {lastClicked
                ? <><strong style={{ color: 'var(--color-label-normal)' }}>"{lastClicked}"</strong> 클릭됨</>
                : '항목을 클릭해보세요'
              }
            </div>
          </div>
        </Case>
      </Section>

      <Section title="Basic" gap="var(--spacing-8)" column>
        <div style={{ width: '400px' }}>
          <Case label="label만">
            <ListCell label="기본 셀" />
          </Case>
          <Case label="label + description">
            <ListCell label="이름" description="홍길동" />
          </Case>
        </div>
      </Section>

      <Section title="Vertical Padding" gap="var(--spacing-8)" column>
        <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <Case label='verticalPadding="small"'>
            <ListCell label="Small padding" description="보조 텍스트" verticalPadding="small" />
          </Case>
          <Case label='verticalPadding="medium"'>
            <ListCell label="Medium padding" description="보조 텍스트" verticalPadding="medium" />
          </Case>
          <Case label='verticalPadding="large"'>
            <ListCell label="Large padding" description="보조 텍스트" verticalPadding="large" />
          </Case>
        </div>
      </Section>

      <Section title="States" gap="var(--spacing-8)" column>
        <div style={{ width: '400px' }}>
          <Case label="기본">
            <ListCell label="기본 상태" description="보조 텍스트" />
          </Case>
          <Case label="selected">
            <ListCell label="선택된 상태" description="보조 텍스트" selected />
          </Case>
          <Case label="disabled">
            <ListCell label="비활성 상태" description="보조 텍스트" disabled />
          </Case>
        </div>
      </Section>

      <Section title="Divider" gap="var(--spacing-0)" column>
        <div style={{ width: '400px' }}>
          {['첫 번째', '두 번째', '세 번째'].map((label, i, arr) => (
            <ListCell
              key={label}
              label={label}
              description="보조 텍스트"
              divider={i < arr.length - 1}
            />
          ))}
        </div>
      </Section>

      <Section title="Chevron" gap="var(--spacing-8)" column>
        <div style={{ width: '400px' }}>
          <Case label="chevron=true">
            <ListCell label="다음 페이지" chevron onClick={() => {}} />
          </Case>
          <Case label="chevron + description">
            <ListCell label="알림 설정" description="모든 알림 켜짐" chevron onClick={() => {}} />
          </Case>
        </div>
      </Section>

      <Section title="Leading Content" gap="var(--spacing-8)" column>
        <div style={{ width: '400px' }}>
          <Case label="leadingContent: Avatar">
            <ListCell
              label="홍길동"
              description="디자이너"
              leadingContent={<Avatar variant="person" size="medium" />}
            />
          </Case>
          <Case label="leadingContent: Icon">
            <ListCell
              label="알림 설정"
              leadingContent={<Icon name="bell" size={24} color="var(--color-label-normal)" />}
              chevron
              onClick={() => {}}
            />
          </Case>
        </div>
      </Section>

      <Section title="Trailing Content" gap="var(--spacing-8)" column>
        <div style={{ width: '400px' }}>
          <Case label="trailingContent: Switch">
            <ListCell
              label="다크 모드"
              trailingContent={<Switch active={false} size="small" />}
            />
          </Case>
          <Case label="trailingContent: 텍스트">
            <ListCell
              label="언어"
              trailingContent={
                <span style={{ fontSize: 'var(--font-size-body-2)', color: 'var(--color-label-alternative)' }}>한국어</span>
              }
              chevron
              onClick={() => {}}
            />
          </Case>
        </div>
      </Section>

      <Section title="Text Ellipsis" gap="var(--spacing-8)" column>
        <div style={{ width: '300px' }}>
          <Case label="textEllipsis=false (줄바꿈)">
            <ListCell label="매우 긴 제목이 있을 때 어떻게 처리되는지 확인하는 셀입니다" textEllipsis={false} />
          </Case>
          <Case label="textEllipsis=true (말줄임)">
            <ListCell label="매우 긴 제목이 있을 때 어떻게 처리되는지 확인하는 셀입니다" textEllipsis={true} />
          </Case>
        </div>
      </Section>
    </div>
  )
}

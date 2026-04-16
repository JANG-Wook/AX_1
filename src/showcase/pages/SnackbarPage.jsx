import Snackbar from '../../design-system/components/Snackbar/Snackbar'
import Icon from '../../design-system/components/Icon/Icon'
import Section, { Case } from '../Section'

export default function SnackbarPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Snackbar</h2>

      <Section title="Message Only" background="var(--color-bg-normal-alternative)">
        <Case label="기본" center>
          <Snackbar message="저장되었습니다" />
        </Case>
      </Section>

      <Section title="With Description" background="var(--color-bg-normal-alternative)">
        <Case label="description 있음" center>
          <Snackbar message="저장되었습니다" description="변경 사항이 자동 저장되었어요" />
        </Case>
      </Section>

      <Section title="With Action" background="var(--color-bg-normal-alternative)">
        <Case label="actionLabel 있음" center>
          <Snackbar message="삭제되었습니다" actionLabel="실행 취소" onAction={() => {}} />
        </Case>
        <Case label="action + description" center>
          <Snackbar message="파일이 삭제되었습니다" description="휴지통에서 복원 가능해요" actionLabel="복원" onAction={() => {}} />
        </Case>
      </Section>

      <Section title="With Close Button" background="var(--color-bg-normal-alternative)">
        <Case label="닫기 버튼 있음" center>
          <Snackbar message="알림을 받았습니다" onClose={() => {}} />
        </Case>
      </Section>

      <Section title="Full Combination" background="var(--color-bg-normal-alternative)">
        <Case label="message + action + close" center>
          <Snackbar
            message="작업이 완료되었습니다"
            actionLabel="확인"
            onAction={() => {}}
            onClose={() => {}}
          />
        </Case>
        <Case label="message + description + action + close" center>
          <Snackbar
            message="업데이트가 완료되었습니다"
            description="새 버전 1.2.3이 적용되었어요"
            actionLabel="릴리즈 노트"
            onAction={() => {}}
            onClose={() => {}}
          />
        </Case>
      </Section>

      <Section title="With Leading Icon" background="var(--color-bg-normal-alternative)">
        <Case label="icon + message" center>
          <Snackbar
            message="알림이 도착했습니다"
            icon={<Icon name="bell" size={20} color="var(--color-static-white)" />}
          />
        </Case>
        <Case label="icon + message + action" center>
          <Snackbar
            message="다운로드가 완료되었습니다"
            icon={<Icon name="arrowDown" size={20} color="var(--color-static-white)" />}
            actionLabel="열기"
            onAction={() => {}}
          />
        </Case>
      </Section>
    </div>
  )
}

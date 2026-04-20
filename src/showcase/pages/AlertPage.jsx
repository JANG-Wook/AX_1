import Alert from '../../design-system/components/Alert/Alert'
import Section, { Case } from '../Section'

function AlertBox({ children }) {
  return (
    <div style={{ width: '400px', height: '340px', position: 'relative', overflow: 'hidden', borderRadius: 'var(--spacing-12)', flexShrink: 0 }}>
      {children}
    </div>
  )
}

export default function AlertPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Alert</h2>

      <Section title="Platform = web" gap="var(--spacing-20)" wrap>
        <Case label="title + body + primary">
          <AlertBox>
            <Alert
              platform="web"
              title="삭제하시겠습니까?"
              body="삭제된 데이터는 복구할 수 없습니다."
              primaryAction={{ label: '삭제', variant: 'negative', onClick: () => {} }}
            />
          </AlertBox>
        </Case>
        <Case label="title + body + primary + secondary">
          <AlertBox>
            <Alert
              platform="web"
              title="변경 사항을 저장할까요?"
              body="저장하지 않으면 변경 사항이 사라집니다."
              primaryAction={{ label: '저장', onClick: () => {} }}
              secondaryAction={{ label: '취소', onClick: () => {} }}
            />
          </AlertBox>
        </Case>
        <Case label="body only (title 없음)">
          <AlertBox>
            <Alert
              platform="web"
              body="계속하시겠습니까?"
              primaryAction={{ label: '확인', onClick: () => {} }}
              secondaryAction={{ label: '취소', onClick: () => {} }}
            />
          </AlertBox>
        </Case>
      </Section>

      <Section title="Platform = android" gap="var(--spacing-20)" wrap>
        <Case label="title + body + primary + secondary">
          <AlertBox>
            <Alert
              platform="android"
              title="계정을 삭제할까요?"
              body="삭제하면 모든 데이터가 영구적으로 사라집니다."
              primaryAction={{ label: '삭제', variant: 'negative', onClick: () => {} }}
              secondaryAction={{ label: '취소', onClick: () => {} }}
            />
          </AlertBox>
        </Case>
        <Case label="primary only">
          <AlertBox>
            <Alert
              platform="android"
              title="알림"
              body="작업이 완료되었습니다."
              primaryAction={{ label: '확인', onClick: () => {} }}
            />
          </AlertBox>
        </Case>
      </Section>

      <Section title="Platform = ios" gap="var(--spacing-20)" wrap>
        <Case label="title + body + primary + secondary">
          <AlertBox>
            <Alert
              platform="ios"
              title="'사진'에 접근하도록 허용하시겠습니까?"
              body="사진 보관함에 접근하여 사진을 업로드할 수 있습니다."
              primaryAction={{ label: '허용', onClick: () => {} }}
              secondaryAction={{ label: '거부', onClick: () => {} }}
            />
          </AlertBox>
        </Case>
        <Case label="primary only">
          <AlertBox>
            <Alert
              platform="ios"
              title="저장되었습니다"
              body="변경 사항이 성공적으로 저장되었습니다."
              primaryAction={{ label: '확인', onClick: () => {} }}
            />
          </AlertBox>
        </Case>
      </Section>

      <Section title="Primary Action Variant" gap="var(--spacing-20)" wrap>
        <Case label='variant="normal"'>
          <AlertBox>
            <Alert
              platform="web"
              title="저장하시겠습니까?"
              body="현재 작업이 저장됩니다."
              primaryAction={{ label: '저장', variant: 'normal', onClick: () => {} }}
              secondaryAction={{ label: '취소', onClick: () => {} }}
            />
          </AlertBox>
        </Case>
        <Case label='variant="negative"'>
          <AlertBox>
            <Alert
              platform="web"
              title="삭제하시겠습니까?"
              body="이 작업은 되돌릴 수 없습니다."
              primaryAction={{ label: '삭제', variant: 'negative', onClick: () => {} }}
              secondaryAction={{ label: '취소', onClick: () => {} }}
            />
          </AlertBox>
        </Case>
      </Section>
    </div>
  )
}

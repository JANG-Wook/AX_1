import ListCard from '../../design-system/components/ListCard/ListCard'
import Avatar from '../../design-system/components/Avatar/Avatar'
import ContentBadge from '../../design-system/components/ContentBadge/ContentBadge'
import Switch from '../../design-system/components/Switch/Switch'
import Section, { Case } from '../Section'

const IMG = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'

export default function ListCardPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>ListCard</h2>

      <Section title="Platform" gap="var(--spacing-16)" column>
        <Case label='platform="desktop"'>
          <div style={{ width: '480px' }}>
            <ListCard
              platform="desktop"
              src={IMG}
              alt="썸네일"
              title="산속의 고요한 아침 — 자연 사진 모음"
              caption="자연 · 사진"
              extraCaption="1.2만 회 조회"
            />
          </div>
        </Case>
        <Case label='platform="mobile"'>
          <div style={{ width: '360px' }}>
            <ListCard
              platform="mobile"
              src={IMG}
              alt="썸네일"
              title="산속의 고요한 아침"
              caption="자연 · 사진"
            />
          </div>
        </Case>
      </Section>

      <Section title="Content Slots" gap="var(--spacing-16)" column>
        <Case label="leadingContent: Avatar">
          <div style={{ width: '480px' }}>
            <ListCard
              title="홍길동"
              caption="디자이너 · UX"
              leadingContent={<Avatar variant="person" size="medium" />}
            />
          </div>
        </Case>
        <Case label="trailingContent: Switch">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="알림 설정"
              caption="모든 알림 수신"
              trailingContent={<Switch active={true} size="small" />}
            />
          </div>
        </Case>
        <Case label="topContent + bottomContent">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="새로운 기능이 출시되었습니다"
              caption="업데이트 · 2024"
              topContent={<ContentBadge variant="solid" color="var(--color-primary-normal)" size="xsmall">NEW</ContentBadge>}
              bottomContent={
                <div style={{ display: 'flex', gap: 'var(--spacing-8)', alignItems: 'center' }}>
                  <Avatar size="xsmall" />
                  <span style={{ fontSize: 'var(--font-size-caption-1)', color: 'var(--color-label-alternative)' }}>작성자</span>
                </div>
              }
            />
          </div>
        </Case>
      </Section>

      <Section title="Skeleton" gap="var(--spacing-16)" column>
        <Case label='skeleton=true (desktop)'>
          <div style={{ width: '480px' }}>
            <ListCard skeleton platform="desktop" />
          </div>
        </Case>
        <Case label='skeleton=true (mobile)'>
          <div style={{ width: '360px' }}>
            <ListCard skeleton platform="mobile" />
          </div>
        </Case>
      </Section>

      <Section title="No Image" gap="var(--spacing-16)" column>
        <Case label="src 없음 (플레이스홀더)">
          <div style={{ width: '480px' }}>
            <ListCard
              src=""
              alt=""
              title="이미지 없는 리스트 카드"
              caption="캡션 텍스트"
              extraCaption="추가 캡션"
            />
          </div>
        </Case>
      </Section>
    </div>
  )
}

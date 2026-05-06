import ListCard from '../../design-system/components/ListCard/ListCard'
import Avatar from '../../design-system/components/Avatar/Avatar'
import ContentBadge from '../../design-system/components/ContentBadge/ContentBadge'
import Icon from '../../design-system/components/Icon/Icon'
import Switch from '../../design-system/components/Switch/Switch'
import Section, { Case } from '../Section'

const IMG = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'

const skeletonSlot = (
  <div style={{
    height:          'var(--spacing-20)',
    width:           'var(--spacing-48)',
    backgroundColor: 'var(--color-fill-alternative)',
    borderRadius:    'var(--spacing-4)',
  }} />
)

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

      {/* ── platform = ── */}
      <Section title="platform =" gap="var(--spacing-24)" column>
        <Case label='platform="desktop"  default'>
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
          <div style={{ width: '335px' }}>
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

      {/* ── extraCaption = ── */}
      <Section title="extraCaption =" gap="var(--spacing-24)" column>
        <Case label='extraCaption 없음  default'>
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
            />
          </div>
        </Case>
        <Case label='extraCaption="추가 캡션"'>
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              extraCaption="추가 캡션"
            />
          </div>
        </Case>
      </Section>

      {/* ── caption = ── */}
      <Section title="caption =" gap="var(--spacing-24)" column>
        <Case label='caption 있음  default'>
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
            />
          </div>
        </Case>
        <Case label='caption 없음'>
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
            />
          </div>
        </Case>
      </Section>

      {/* ── topContent ── */}
      <Section title="topContent" gap="var(--spacing-24)" column>
        <Case label="topContent 없음  default">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
            />
          </div>
        </Case>
        <Case label="topContent: ContentBadge">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              topContent={<ContentBadge size="xsmall">텍스트</ContentBadge>}
            />
          </div>
        </Case>
        <Case label="topContent: ContentBadge × 3">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              topContent={
                <div style={{ display: 'flex', gap: 'var(--spacing-6)', flexWrap: 'wrap' }}>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                </div>
              }
            />
          </div>
        </Case>
      </Section>

      {/* ── bottomContent ── */}
      <Section title="bottomContent" gap="var(--spacing-24)" column>
        <Case label="bottomContent 없음  default">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
            />
          </div>
        </Case>
        <Case label="bottomContent: Avatar + 텍스트">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              bottomContent={
                <div style={{ display: 'flex', gap: 'var(--spacing-8)', alignItems: 'center' }}>
                  <Avatar size="xsmall" />
                  <span style={{ fontSize: 'var(--font-size-caption-1)', color: 'var(--color-label-alternative)' }}>홍길동</span>
                </div>
              }
            />
          </div>
        </Case>
        <Case label="bottomContent: ContentBadge × 3">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              bottomContent={
                <div style={{ display: 'flex', gap: 'var(--spacing-6)', flexWrap: 'wrap' }}>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                </div>
              }
            />
          </div>
        </Case>
      </Section>

      {/* ── leadingContent ── */}
      <Section title="leadingContent" gap="var(--spacing-24)" column>
        <Case label="leadingContent 없음  default">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
            />
          </div>
        </Case>
        <Case label="leadingContent: Avatar">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              leadingContent={<Avatar variant="person" size="small" />}
            />
          </div>
        </Case>
        <Case label="leadingContent: Icon">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              leadingContent={<Icon name="bookmark" size={24} color="var(--color-label-alternative)" />}
            />
          </div>
        </Case>
      </Section>

      {/* ── trailingContent ── */}
      <Section title="trailingContent" gap="var(--spacing-24)" column>
        <Case label="trailingContent 없음  default">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
            />
          </div>
        </Case>
        <Case label="trailingContent: Switch">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              trailingContent={<Switch active={true} size="small" />}
            />
          </div>
        </Case>
        <Case label="trailingContent: Toggle Icon">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              trailingContent={<Icon name="bookmark" size={24} color="var(--color-label-alternative)" />}
            />
          </div>
        </Case>
        <Case label="trailingContent: Chevron Right">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              trailingContent={<Icon name="chevronRight" size={24} color="var(--color-label-alternative)" />}
            />
          </div>
        </Case>
      </Section>

      {/* ── skeleton ── */}
      <Section title="skeleton" gap="var(--spacing-24)" column>
        <Case label='platform="desktop"  기본'>
          <div style={{ width: '480px' }}>
            <ListCard skeleton />
          </div>
        </Case>
        <Case label='platform="desktop"  topContent + bottomContent'>
          <div style={{ width: '480px' }}>
            <ListCard skeleton topContent={skeletonSlot} bottomContent={skeletonSlot} />
          </div>
        </Case>
        <Case label='platform="mobile"  기본'>
          <div style={{ width: '335px' }}>
            <ListCard skeleton platform="mobile" />
          </div>
        </Case>
        <Case label='platform="mobile"  topContent + bottomContent'>
          <div style={{ width: '335px' }}>
            <ListCard skeleton platform="mobile" topContent={skeletonSlot} bottomContent={skeletonSlot} />
          </div>
        </Case>
      </Section>
    </div>
  )
}

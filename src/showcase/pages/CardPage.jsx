import { useState } from 'react'
import Card from '../../design-system/components/Card/Card'
import Avatar from '../../design-system/components/Avatar/Avatar'
import ContentBadge from '../../design-system/components/ContentBadge/ContentBadge'
import Section, { Case } from '../Section'

const IMG = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'

export default function CardPage() {
  const [demoSaved, setDemoSaved] = useState(false)
  const [demoClicked, setDemoClicked] = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Card</h2>

      <Section title="인터랙션 데모" gap="var(--spacing-24)">
        <Case label="카드에 마우스를 올리거나 클릭해보세요">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
            <div style={{ width: '240px' }}>
              <Card
                src={IMG}
                alt="카드"
                title="산속의 고요한 아침"
                caption="자연 · 사진"
                saved={demoSaved}
                onToggleSave={() => setDemoSaved(s => !s)}
                onClick={() => setDemoClicked(c => c + 1)}
              />
            </div>
            <div style={{
              padding: 'var(--spacing-12)',
              borderRadius: 'var(--spacing-8)',
              backgroundColor: 'var(--color-fill-normal)',
              fontSize: 'var(--font-size-body-2)',
              color: 'var(--color-label-alternative)',
              display: 'flex',
              gap: 'var(--spacing-16)',
            }}>
              <span>클릭: <strong style={{ color: 'var(--color-label-normal)' }}>{demoClicked}회</strong></span>
              <span>북마크: <strong style={{ color: demoSaved ? 'var(--color-primary-normal)' : 'var(--color-label-normal)' }}>{demoSaved ? '저장됨' : '미저장'}</strong></span>
            </div>
          </div>
        </Case>
      </Section>

      <Section title="Platform" gap="var(--spacing-24)">
        <Case label='platform="desktop"'>
          <div style={{ width: '240px' }}>
            <Card
              platform="desktop"
              src={IMG}
              alt="카드 이미지"
              title="산속의 고요한 아침"
              caption="자연 · 사진"
            />
          </div>
        </Case>
        <Case label='platform="mobile"'>
          <div style={{ width: '200px' }}>
            <Card
              platform="mobile"
              src={IMG}
              alt="카드 이미지"
              title="산속의 고요한 아침"
              caption="자연 · 사진"
            />
          </div>
        </Case>
      </Section>

      <Section title="Saved State" gap="var(--spacing-24)">
        <Case label='saved=false'>
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              saved={false}
              onToggleSave={() => {}}
            />
          </div>
        </Case>
        <Case label='saved=true'>
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              saved={true}
              onToggleSave={() => {}}
            />
          </div>
        </Case>
      </Section>

      <Section title="Thumbnail Overlay" gap="var(--spacing-24)">
        <Case label='thumbnailOverlay=true (기본)'>
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="오버레이 있음"
              caption="사진 · 자연"
              overlayCaption="1.2만 회"
              thumbnailOverlay
            />
          </div>
        </Case>
        <Case label='thumbnailOverlay=false'>
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="오버레이 없음"
              caption="사진 · 자연"
              thumbnailOverlay={false}
            />
          </div>
        </Case>
      </Section>

      <Section title="Top / Bottom Content Slots" gap="var(--spacing-24)">
        <Case label="topContent: Badge">
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              topContent={<ContentBadge variant="solid" color="var(--color-status-positive)" size="xsmall">NEW</ContentBadge>}
            />
          </div>
        </Case>
        <Case label="bottomContent: Avatar + 텍스트">
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
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
      </Section>

      <Section title="Skeleton" gap="var(--spacing-24)">
        <Case label='skeleton=true'>
          <div style={{ width: '240px' }}>
            <Card skeleton />
          </div>
        </Case>
        <Case label='skeleton=true (mobile)'>
          <div style={{ width: '200px' }}>
            <Card skeleton platform="mobile" />
          </div>
        </Case>
      </Section>

      <Section title="No Image" gap="var(--spacing-24)">
        <Case label="src 없음 (placeholder)">
          <div style={{ width: '240px' }}>
            <Card src="" alt="" title="이미지 없는 카드" caption="캡션" />
          </div>
        </Case>
      </Section>
    </div>
  )
}

import { useState } from 'react'
import IconButtonSolid from '../../design-system/components/IconButton/IconButtonSolid'
import Icon from '../../design-system/components/Icon/Icon'
import Section, { Case } from '../Section'

export default function IconButtonSolidPage() {
  const [clicked, setClicked] = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Icon Button_Solid</h2>

      <Section title="인터랙션 데모" gap="var(--spacing-24)">
        <Case label="마우스를 올리거나 클릭해보세요">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)', width: 'fit-content' }}>
            <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
              <IconButtonSolid
                icon={<Icon name="search" size={20} color="var(--color-static-white)" />}
                size="medium"
                aria-label="검색"
                onClick={() => setClicked(c => c + 1)}
              />
              <IconButtonSolid
                icon={<Icon name="bell" size={16} color="var(--color-static-white)" />}
                size="small"
                aria-label="알림"
                onClick={() => setClicked(c => c + 1)}
              />
              <IconButtonSolid
                icon={<Icon name="heart" size={20} color="var(--color-static-white)" />}
                backgroundColor="var(--color-status-negative)"
                aria-label="좋아요"
                onClick={() => setClicked(c => c + 1)}
              />
            </div>
            <div style={{ fontSize: 'var(--font-size-body-2)', color: 'var(--color-label-alternative)' }}>
              클릭 횟수: <strong style={{ color: 'var(--color-label-normal)' }}>{clicked}회</strong>
            </div>
          </div>
        </Case>
      </Section>

      <Section title="Size" gap="var(--spacing-24)">
        <Case label='size="medium" (40px, 기본)'>
          <IconButtonSolid
            icon={<Icon name="search" size={20} color="var(--color-static-white)" />}
            size="medium"
            aria-label="검색"
            onClick={() => {}}
          />
        </Case>
        <Case label='size="small" (32px)'>
          <IconButtonSolid
            icon={<Icon name="search" size={16} color="var(--color-static-white)" />}
            size="small"
            aria-label="검색"
            onClick={() => {}}
          />
        </Case>
        <Case label='size="custom" customSize={48}'>
          <IconButtonSolid
            icon={<Icon name="search" size={24} color="var(--color-static-white)" />}
            size="custom"
            customSize={48}
            aria-label="검색"
            onClick={() => {}}
          />
        </Case>
      </Section>

      <Section title="Background Color" gap="var(--spacing-24)">
        <Case label="primary-normal (기본)">
          <IconButtonSolid
            icon={<Icon name="search" size={20} color="var(--color-static-white)" />}
            aria-label="검색"
            onClick={() => {}}
          />
        </Case>
        <Case label="status-negative">
          <IconButtonSolid
            icon={<Icon name="heart" size={20} color="var(--color-static-white)" />}
            backgroundColor="var(--color-status-negative)"
            aria-label="좋아요"
            onClick={() => {}}
          />
        </Case>
        <Case label="label-strong">
          <IconButtonSolid
            icon={<Icon name="bookmark" size={20} color="var(--color-static-white)" />}
            backgroundColor="var(--color-label-strong)"
            aria-label="북마크"
            onClick={() => {}}
          />
        </Case>
      </Section>

      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label="disabled=false">
          <IconButtonSolid
            icon={<Icon name="search" size={20} color="var(--color-static-white)" />}
            aria-label="검색"
            onClick={() => {}}
          />
        </Case>
        <Case label="disabled=true">
          <IconButtonSolid
            icon={<Icon name="search" size={20} color="var(--color-static-white)" />}
            disabled
            aria-label="검색 (비활성)"
          />
        </Case>
      </Section>
    </div>
  )
}

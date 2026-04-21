import { useState } from 'react'
import IconButtonOutlined from '../../design-system/components/IconButton/IconButtonOutlined'
import Icon from '../../design-system/components/Icon/Icon'
import Section, { Case } from '../Section'

export default function IconButtonOutlinedPage() {
  const [clicked, setClicked] = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Icon Button_Outlined</h2>

      <Section title="인터랙션 데모" gap="var(--spacing-24)">
        <Case label="마우스를 올리거나 클릭해보세요">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)', width: 'fit-content' }}>
            <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
              <IconButtonOutlined
                icon={<Icon name="search" size={20} color="var(--color-label-normal)" />}
                size="medium"
                aria-label="검색"
                onClick={() => setClicked(c => c + 1)}
              />
              <IconButtonOutlined
                icon={<Icon name="bell" size={16} color="var(--color-label-normal)" />}
                size="small"
                aria-label="알림"
                onClick={() => setClicked(c => c + 1)}
              />
              <IconButtonOutlined
                icon={<Icon name="bookmark" size={20} color="var(--color-primary-normal)" />}
                color="var(--color-primary-normal)"
                aria-label="북마크"
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
          <IconButtonOutlined
            icon={<Icon name="search" size={20} color="var(--color-label-normal)" />}
            size="medium"
            aria-label="검색"
            onClick={() => {}}
          />
        </Case>
        <Case label='size="small" (32px)'>
          <IconButtonOutlined
            icon={<Icon name="search" size={16} color="var(--color-label-normal)" />}
            size="small"
            aria-label="검색"
            onClick={() => {}}
          />
        </Case>
        <Case label='size="custom" customSize={48}'>
          <IconButtonOutlined
            icon={<Icon name="search" size={24} color="var(--color-label-normal)" />}
            size="custom"
            customSize={48}
            aria-label="검색"
            onClick={() => {}}
          />
        </Case>
      </Section>

      <Section title="Color" gap="var(--spacing-24)">
        <Case label="label-normal (기본)">
          <IconButtonOutlined
            icon={<Icon name="bell" size={20} color="var(--color-label-normal)" />}
            aria-label="알림"
            onClick={() => {}}
          />
        </Case>
        <Case label="primary">
          <IconButtonOutlined
            icon={<Icon name="bell" size={20} color="var(--color-primary-normal)" />}
            color="var(--color-primary-normal)"
            aria-label="알림"
            onClick={() => {}}
          />
        </Case>
        <Case label="status-negative">
          <IconButtonOutlined
            icon={<Icon name="bell" size={20} color="var(--color-status-negative)" />}
            color="var(--color-status-negative)"
            aria-label="알림"
            onClick={() => {}}
          />
        </Case>
      </Section>

      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label="disabled=false">
          <IconButtonOutlined
            icon={<Icon name="search" size={20} color="var(--color-label-normal)" />}
            aria-label="검색"
            onClick={() => {}}
          />
        </Case>
        <Case label="disabled=true">
          <IconButtonOutlined
            icon={<Icon name="search" size={20} color="var(--color-label-disable)" />}
            color="var(--color-label-disable)"
            disabled
            aria-label="검색 (비활성)"
          />
        </Case>
      </Section>
    </div>
  )
}

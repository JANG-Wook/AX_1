import FramedStyle from '../../design-system/components/FramedStyle/FramedStyle'
import Section, { Case } from '../Section'

function SlotPlaceholder() {
  return (
    <div style={{ height: '64px', minWidth: '200px', position: 'relative' }}>
      <div style={{
        position:        'absolute',
        inset:           0,
        backgroundColor: 'var(--color-accent-bg-violet)',
        opacity:         0.08,
      }} />
    </div>
  )
}

function FrameLabel({ children }) {
  return (
    <div style={{
      fontSize:        'var(--font-size-caption-1)',
      lineHeight:      'var(--line-height-caption-1)',
      color:           'var(--color-label-normal)',
      backgroundColor: 'var(--color-fill-strong)',
      borderRadius:    'var(--spacing-4)',
      paddingTop:      'var(--spacing-2)',
      paddingBottom:   'var(--spacing-2)',
      paddingLeft:     'var(--spacing-6)',
      paddingRight:    'var(--spacing-6)',
      fontFamily:      "'SF Mono', 'Consolas', monospace",
    }}>
      {children}
    </div>
  )
}

export default function FramedStylePage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>FramedStyle</h2>

      {/* ── Selected ── */}
      <Section title="Selected =" gap="var(--spacing-16)">
        <Case label="false (default)">
          <FramedStyle selected={false}><SlotPlaceholder /></FramedStyle>
        </Case>
        <Case label="true">
          <FramedStyle selected={true}><SlotPlaceholder /></FramedStyle>
        </Case>
      </Section>

      {/* ── disable ── */}
      <Section title="disable =" gap="var(--spacing-16)">
        <Case label="false (default)">
          <FramedStyle selected={false} disabled={false}><SlotPlaceholder /></FramedStyle>
        </Case>
        <Case label="true">
          <FramedStyle selected={false} disabled={true}><SlotPlaceholder /></FramedStyle>
        </Case>
      </Section>

      {/* ── Status ── */}
      <Section title="Status =" gap="var(--spacing-16)">
        <Case label="normal (default)">
          <FramedStyle selected={false} status="normal"><SlotPlaceholder /></FramedStyle>
        </Case>
        <Case label="negative">
          <FramedStyle selected={false} status="negative"><SlotPlaceholder /></FramedStyle>
        </Case>
      </Section>

      {/* ── interaction ── */}
      <Section title="interaction =" column gap="var(--spacing-24)">
        {/* selected=false 행 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
            <FrameLabel>normal</FrameLabel>
            <FrameLabel>hovered</FrameLabel>
            <FrameLabel>focused</FrameLabel>
          </div>
          <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
            <FramedStyle selected={false} onClick={() => {}}><SlotPlaceholder /></FramedStyle>
            <FramedStyle selected={false} onClick={() => {}} forceHovered><SlotPlaceholder /></FramedStyle>
            <FramedStyle selected={false} onClick={() => {}} forceFocused><SlotPlaceholder /></FramedStyle>
          </div>
        </div>

        {/* selected=true 행 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
            <FrameLabel>normal</FrameLabel>
            <FrameLabel>hovered</FrameLabel>
            <FrameLabel>focused</FrameLabel>
          </div>
          <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
            <FramedStyle selected={true} onClick={() => {}}><SlotPlaceholder /></FramedStyle>
            <FramedStyle selected={true} onClick={() => {}} forceHovered><SlotPlaceholder /></FramedStyle>
            <FramedStyle selected={true} onClick={() => {}} forceFocused><SlotPlaceholder /></FramedStyle>
          </div>
        </div>

        {/* status=negative 행 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
            <FrameLabel>normal</FrameLabel>
            <FrameLabel>hovered</FrameLabel>
            <FrameLabel>focused</FrameLabel>
          </div>
          <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
            <FramedStyle selected={false} status="negative" onClick={() => {}}><SlotPlaceholder /></FramedStyle>
            <FramedStyle selected={false} status="negative" onClick={() => {}} forceHovered><SlotPlaceholder /></FramedStyle>
            <FramedStyle selected={false} status="negative" onClick={() => {}} forceFocused><SlotPlaceholder /></FramedStyle>
          </div>
        </div>

        {/* disabled */}
        <Case label="disabled">
          <FramedStyle selected={false} disabled><SlotPlaceholder /></FramedStyle>
        </Case>
      </Section>

      {/* ── customize = radius / padding ── */}
      <Section title="customize = radius / padding" gap="var(--spacing-16)">
        <p style={{
          fontSize:   'var(--font-size-body-1)',
          lineHeight: 'var(--line-height-body-1-normal)',
          color:      'var(--color-label-neutral)',
          margin:     0,
        }}>
          Variables에 등록된 Frame 모드로 Radius, Padding을 변경할 수 있습니다.
        </p>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap' }}>
          {['medium', 'small', 'large', 'xlarge'].map(f => (
            <div key={f} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
              <FrameLabel>{f}</FrameLabel>
              <FramedStyle frame={f}><SlotPlaceholder /></FramedStyle>
            </div>
          ))}
        </div>
      </Section>

      {/* ── customize = shadow ── */}
      <Section title="customize = shadow" gap="var(--spacing-16)">
        <p style={{
          fontSize:   'var(--font-size-body-1)',
          lineHeight: 'var(--line-height-body-1-normal)',
          color:      'var(--color-label-neutral)',
          margin:     0,
        }}>
          3 color - semantic에 등록된 Shadow styles를 사용해 shadow를 변경할 수 있습니다.
        </p>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap' }}>
          {['xsmall', 'small', 'medium', 'large', 'xlarge'].map(s => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
              <FrameLabel>{s}</FrameLabel>
              <FramedStyle shadow={s}><SlotPlaceholder /></FramedStyle>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

import Divider from '../../design-system/components/Divider/Divider'

const SECTION_HEADING = {
  fontSize:      'var(--font-size-label-1)',
  lineHeight:    'var(--line-height-label-1-normal)',
  letterSpacing: 'var(--letter-spacing-label-1)',
  fontWeight:    'var(--font-weight-semibold)',
  color:         'var(--color-label-strong)',
  whiteSpace:    'nowrap',
}

const BADGE = {
  display:         'inline-flex',
  alignItems:      'center',
  justifyContent:  'center',
  padding:         'var(--spacing-2) var(--spacing-6)',
  borderRadius:    'var(--spacing-4)',
  backgroundColor: 'var(--color-fill-strong)',
  fontSize:        'var(--font-size-caption-1)',
  lineHeight:      'var(--line-height-caption-1)',
  fontWeight:      'var(--font-weight-medium)',
  color:           'var(--color-label-normal)',
  fontFamily:      'monospace',
  whiteSpace:      'nowrap',
}

const CONTENT_BOX = {
  padding:         'var(--spacing-24)',
  borderRadius:    'var(--spacing-16)',
  backgroundColor: 'var(--color-fill-alternative)',
}

export default function DividerPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-8)',
      }}>Divider</h2>
      <p style={{
        fontSize:     'var(--font-size-body-2)',
        lineHeight:   'var(--line-height-body-2-normal)',
        fontWeight:   'var(--font-weight-regular)',
        color:        'var(--color-label-alternative)',
        marginBottom: 'var(--spacing-32)',
      }}>디자인 요소와 정보를 구분하는 데 사용합니다. 이를 통해 각 요소의 디자인 가독성이 향상됩니다.</p>

      <div style={{
        display:         'flex',
        flexDirection:   'column',
        gap:             'var(--spacing-24)',
        backgroundColor: 'var(--color-bg-normal)',
        borderRadius:    'var(--spacing-16)',
        padding:         'var(--spacing-24)',
        overflow:        'hidden',
      }}>

        {/* variant = */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-6)', alignItems: 'center' }}>
            <span style={SECTION_HEADING}>variant =</span>
            <span style={BADGE}>normal</span>
            <span style={BADGE}>thick</span>
          </div>
          <div style={{ ...CONTENT_BOX, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <Divider variant="normal" />
            <Divider variant="thick" />
          </div>
        </div>

        {/* vertical = */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-6)', alignItems: 'center' }}>
            <span style={SECTION_HEADING}>vertical =</span>
            <span style={BADGE}>false</span>
            <span style={BADGE}>true</span>
          </div>
          <div style={{ ...CONTENT_BOX, display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
            <div style={{ width: 'var(--spacing-32)' }}>
              <Divider />
            </div>
            <div style={{ height: 'var(--spacing-32)', display: 'flex' }}>
              <Divider vertical />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

const NAV = [
  {
    group: 'Foundation',
    items: [
      { id: 'colors',     label: 'Colors'     },
      { id: 'typography', label: 'Typography' },
    ],
  },
  {
    group: 'Components',
    items: [
      { id: 'alert',            label: 'Alert'            },
      { id: 'avatar',           label: 'Avatar'           },
      { id: 'card',             label: 'Card'             },
      { id: 'category',         label: 'Category'         },
      { id: 'checkbox',         label: 'Checkbox'         },
      { id: 'contentBadge',     label: 'ContentBadge'     },
      { id: 'divider',          label: 'Divider'          },
      { id: 'framedStyle',      label: 'FramedStyle'      },
      { id: 'icon',             label: 'Icon'             },
      { id: 'listCard',         label: 'ListCard'         },
      { id: 'listCell',         label: 'ListCell'         },
      { id: 'menu',             label: 'Menu'             },
      { id: 'pageIndicator',    label: 'PageIndicator'    },
      { id: 'paginationDots',   label: 'PaginationDots'   },
      { id: 'paginationNav',    label: 'PaginationNav'    },
      { id: 'radio',            label: 'Radio'            },
      { id: 'segmentedControl', label: 'SegmentedControl' },
      { id: 'select',           label: 'Select'           },
      { id: 'skeleton',         label: 'Skeleton'         },
      { id: 'snackbar',         label: 'Snackbar'         },
      { id: 'spinner',          label: 'Spinner'          },
      { id: 'switch',           label: 'Switch'           },
      { id: 'tab',              label: 'Tab'              },
      { id: 'textfield',        label: 'Textfield'        },
      { id: 'thumbnail',        label: 'Thumbnail'        },
      { id: 'toast',            label: 'Toast'            },
      { id: 'tooltip',          label: 'Tooltip'          },
    ],
  },
]

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <nav style={{
      width:           '220px',
      flexShrink:      0,
      height:          '100vh',
      overflowY:       'auto',
      backgroundColor: 'var(--color-bg-elevated)',
      borderRight:     '1px solid var(--color-line-solid-neutral)',
      paddingTop:      'var(--spacing-20)',
      paddingBottom:   'var(--spacing-20)',
      position:        'sticky',
      top:             0,
      boxSizing:       'border-box',
    }}>
      {NAV.map(({ group, items }) => (
        <div key={group} style={{ marginBottom: 'var(--spacing-8)' }}>
          <p style={{
            fontSize:      'var(--font-size-caption-2)',
            lineHeight:    'var(--line-height-caption-2)',
            letterSpacing: 'var(--letter-spacing-caption-2)',
            fontWeight:    'var(--font-weight-semibold)',
            color:         'var(--color-label-assistive)',
            padding:       'var(--spacing-8) var(--spacing-16) var(--spacing-4)',
            textTransform: 'uppercase',
          }}>{group}</p>

          {items.map(({ id, label }) => {
            const isActive = activePage === id
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                style={{
                  display:       'block',
                  textAlign:     'left',
                  padding:       'var(--spacing-8) var(--spacing-12)',
                  margin:        '1px var(--spacing-8)',
                  width:         'calc(100% - 16px)',
                  background:    isActive ? 'var(--color-primary-normal)' : 'none',
                  border:        'none',
                  borderRadius:  'var(--spacing-8)',
                  cursor:        'pointer',
                  fontSize:      'var(--font-size-body-2)',
                  lineHeight:    'var(--line-height-body-2-normal)',
                  letterSpacing: 'var(--letter-spacing-body-2)',
                  fontWeight:    isActive ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
                  color:         isActive ? 'var(--color-static-white)' : 'var(--color-label-normal)',
                  boxSizing:     'border-box',
                }}
              >
                {label}
              </button>
            )
          })}
        </div>
      ))}
    </nav>
  )
}

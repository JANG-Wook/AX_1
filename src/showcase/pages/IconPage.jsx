import Icon from '../../design-system/components/Icon/Icon'
import Section, { Case } from '../Section'

const ICON_NAMES = [
  'agent','aiReview','alignCenter','alignJustify','alignLeft','alignRight',
  'android','apps','arrowDown','arrowDownThick','arrowLeft','arrowLeftThick',
  'arrowRight','arrowRightThick','arrowUp','arrowUpRight','arrowUpThick',
  'attachment','bell','bellFill','bellPlus','bold','book','bookFill',
  'bookmark','bookmarkFill','bubble','bubbleFill','bubblePlus','bulb',
  'businessBag','businessBagFill','calendar','calendarPerson','camera','cameraFill',
  'caretDown','caretUp','certificate','change','chat','check','checkThick',
  'chevronDoubleLeft','chevronDown','chevronLeft','chevronRight','chevronUp',
  'circle','circleFill','clock','clockFill','close','code','copy',
  'creditCard','crop','delete','document','documentFill','download',
  'edit','emoji','eye','eyeOff','faceSmile','faceSad','filter',
  'flag','flagFill','folder','folderFill','gear','globe','grid',
  'heart','heartFill','help','helpCircle','home','homeFill',
  'image','info','infoCircle','italic','key','layers','link',
  'list','location','locationFill','lock','lockOpen','logout',
  'map','maximize','menu','message','mic','minimize','minus',
  'moon','more','moreHorizontal','move','notification',
  'pause','person','personFill','personPlus','phone','phoneFill',
  'play','playFill','plus','plusCircle','plusSquare',
  'print','questionCircle','refresh','reply','rotate',
  'search','send','sendFill','share','shield','shieldFill',
  'sidebar','slash','slider','sort','sparkle','star','starFill',
  'sun','switch','tag','tagFill','thumbDown','thumbUp',
  'trash','trashFill','trending','underline','unlock',
  'upload','video','videoFill','wallet','warning','warningFill',
  'wifi','wifiFill','xCircle','xSmall','xSmallThick','zoom',
]

const SIZES = [16, 20, 24, 28, 32]

export default function IconPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Icon</h2>

      <Section title="Size" gap="var(--spacing-24)">
        {SIZES.map(size => (
          <Case key={size} label={`size={${size}}`} center>
            <Icon name="bell" size={size} color="var(--color-label-normal)" />
          </Case>
        ))}
      </Section>

      <Section title="Color" gap="var(--spacing-24)">
        {[
          { color: 'var(--color-label-normal)',      label: 'label-normal'      },
          { color: 'var(--color-primary-normal)',    label: 'primary-normal'    },
          { color: 'var(--color-status-positive)',   label: 'status-positive'   },
          { color: 'var(--color-status-negative)',   label: 'status-negative'   },
          { color: 'var(--color-label-assistive)',   label: 'label-assistive'   },
        ].map(({ color, label }) => (
          <Case key={label} label={label} center>
            <Icon name="heart" size={24} color={color} />
          </Case>
        ))}
      </Section>

      <Section title="Icon Library (선택)" gap="var(--spacing-16)" wrap>
        {ICON_NAMES.map(name => (
          <Case key={name} label={name} center>
            <Icon name={name} size={24} color="var(--color-label-normal)" />
          </Case>
        ))}
      </Section>
    </div>
  )
}

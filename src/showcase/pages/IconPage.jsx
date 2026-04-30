import Icon from '../../design-system/components/Icon/Icon'
import Section, { Case } from '../Section'

const ICON_NAMES = [
  // agent / ai
  'agent', 'aiReview', 'aiReview-1',
  // align
  'alignCenter', 'alignJustify', 'alignLeft', 'alignRight',
  // android / apps
  'android', 'apps',
  // arrow
  'arrowDown', 'arrowDownThick', 'arrowLeft', 'arrowLeftThick',
  'arrowRight', 'arrowRightThick', 'arrowTurnDownLeft', 'arrowTurnDownRight',
  'arrowUp', 'arrowUpRight', 'arrowUpRightThick', 'arrowUpThick',
  // attachment / bell / bold
  'attachment', 'bell', 'bellFill', 'bellPlus', 'bold',
  // book / bookmark
  'book', 'bookFill', 'bookmark', 'bookmarkFill',
  // bubble
  'bubble', 'bubbleFill', 'bubblePlus', 'bubblePlusFill',
  // bulb / businessBag
  'bulb', 'businessBag', 'businessBagFill',
  // calendar / camera / caret / certificate / change / chat / check
  'calendar', 'calendarPerson',
  'camera', 'cameraFill',
  'caretDown', 'caretUp', 'certificate', 'change', 'chat', 'check', 'checkThick',
  // chevron
  'chevronDoubleLeft', 'chevronDoubleLeftSmall', 'chevronDoubleLeftThick', 'chevronDoubleLeftThickSmall',
  'chevronDoubleRight', 'chevronDoubleRightSmall', 'chevronDoubleRightThick', 'chevronDoubleRightThickSmall',
  'chevronDown', 'chevronDownSmall', 'chevronDownThick', 'chevronDownThickSmall',
  'chevronLeft', 'chevronLeftSmall', 'chevronLeftThick', 'chevronLeftThickSmall',
  'chevronLeftTight', 'chevronLeftTightSmall', 'chevronLeftTightThick', 'chevronLeftTightThickSmall',
  'chevronRight', 'chevronRightSmall', 'chevronRightThick', 'chevronRightThickSmall',
  'chevronRightTight', 'chevronRightTightSmall', 'chevronRightTightThick', 'chevronRightTightThickSmall',
  'chevronUp', 'chevronUpSmall', 'chevronUpThick', 'chevronUpThickSmall',
  // circle
  'circle', 'circleBlock', 'circleCheck', 'circleCheckFill',
  'circleClose', 'circleCloseFill', 'circleDot',
  'circleExclamation', 'circleExclamationFill', 'circleFill',
  'circleInfo', 'circleInfoFill', 'circlePlus', 'circlePlusFill',
  'circlePoint', 'circleQuestion', 'circleQuestionFill',
  'circleUpRight', 'circleUpRightFill',
  // clock / close / code / coffee / coins / column / company / compass / component / copy / crown
  'clock', 'clockFill', 'close', 'closeThick', 'code',
  'coffee', 'coffeeFill', 'coins', 'coinsFill', 'column',
  'company', 'companyCheck', 'companyCheckFill', 'companyFill', 'companyPlus', 'companyPlusFill',
  'compass', 'compassFill', 'component', 'componentFill',
  'copy', 'crown', 'crownFill',
  // deep / desktop / diamond / dislike / document / dot / download
  'deepSearch', 'desktop', 'desktopFill', 'diamond', 'diamondFill',
  'dislike', 'dislikeFill',
  'document', 'documentFill', 'documentPerson', 'documentPersonFill',
  'documentSearch', 'documentText', 'documentTextFill',
  'dot', 'download',
  // exclamation / externalLink / eye / face / filter / fire / flag / folder / full
  'exclamation', 'externalLink',
  'eye', 'eyeFill', 'eyeSlash', 'eyeSlashFill',
  'faceSmile', 'faceSmileFill',
  'filter', 'filterFill', 'fire', 'fireFill',
  'flag', 'flagFill', 'flipBackward',
  'folder', 'folderFill', 'folderJob', 'folderJobFill', 'folderStar', 'folderStarFill',
  'full',
  // globe / graduation / handle / heart / history / home / hourglass
  'globe', 'globeFill', 'graduation', 'graduationFill',
  'handle', 'handleDesktop',
  'heart', 'heartFill', 'heartInHeart', 'heartInHeartFill',
  'history', 'home', 'homeFill', 'hourglass',
  // image / inbox / instance / keyboard / leftSide
  'image', 'inbox', 'instance', 'keyboard', 'leftSide',
  // like / line / link / list / location / lock / login / logo / logout
  'like', 'likeFill',
  'lineHorizontal', 'lineHorizontalThick',
  'link', 'list', 'listCategory', 'listOrdered',
  'location', 'locationFill',
  'lock', 'lockFill', 'lockOpen', 'lockOpenFill',
  'login',
  'logoApple', 'logoBrunch', 'logoFacebook', 'logoGooglePlay',
  'logoInstagram', 'logoKakao', 'logoLinkedIn', 'logoMicrosoft',
  'logoNaverBlog', 'logoX', 'logoYoutube',
  'logout',
  // magicWand / mail / medal / megaphone / menu / message / microphone / minus / mobile / moon / more
  'magicWand', 'mail', 'mailOpen',
  'medal', 'megaphone', 'megaphoneFill',
  'menu', 'menuThick',
  'message', 'messageFill',
  'microphone', 'microphoneFill', 'microphoneSlash', 'microphoneSlashFill',
  'minus', 'minusThick',
  'mobile', 'mobileFill', 'moon',
  'moreHorizontal', 'moreVertical', 'moreVerticalTight',
  'musicMicrophone',
  // palette / passport / pause / pencil / person / phone / pin / play / plus / presentation / printer
  'palette', 'paletteFill', 'passport', 'passportFill',
  'pause', 'pencil', 'pencilFill',
  'person', 'personFill', 'personPlus', 'personPlusFill', 'persons', 'personsFill',
  'phone', 'phoneFill', 'pin', 'pinFill',
  'play', 'plus', 'plusThick', 'presentation', 'printer',
  // question / quote / refresh / regex / replace / reset
  'question', 'quote',
  'refresh', 'regex', 'replace', 'replaceAll', 'reset',
  // search / send / setting / share / sparkle / square / star / storage / strikethrough / sun
  'search', 'searchThick', 'send', 'sendFill', 'setting', 'share', 'shareIos',
  'sparkle', 'sparkleAlt', 'sparkleFill',
  'square', 'squareCaret', 'squareCheck', 'squareFill',
  'squareHan', 'squareHangul', 'squareKana',
  'squareLatin', 'squareLatinFill', 'squareMore', 'squarePlay',
  'squarePlus', 'squarePlusFill',
  'star', 'starFill', 'storage', 'strikethrough', 'sun',
  // tag / telescope / template / text
  'tag', 'tagFill', 'telescope', 'template', 'templateFill', 'textFormat', 'textVariable',
  // thumbnail / thunder / ticket / trash / triangle / trophy / tune
  'thumbnail', 'thunder', 'thunderFill', 'ticket', 'ticketFill',
  'trash', 'triangle', 'triangleExclamation', 'triangleExclamationFill', 'triangleFill',
  'trophy', 'trophyFill', 'tune',
  // umbrella / underline / upload / utility / verified / video
  'umbrella', 'umbrellaFill', 'underline', 'upload',
  'utility', 'utilityFill',
  'verifiedCheck', 'verifiedCheckFill', 'verifiedStar', 'verifiedStarFill',
  'video',
  // webinar / wholeWord / write / zep
  'webinar', 'wholeWord', 'write',
  'zepFast', 'zepFastFill',
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

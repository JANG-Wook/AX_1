/**
 * Icon 컴포넌트
 *
 * Props:
 *  name      — 아이콘 이름 (camelCase). 예: 'arrowDown', 'chevronLeft', 'navigationCareer'
 *  size      — 아이콘 크기(px). 기본: 24 (--icon-size)
 *  color     — 색상. 기본: currentColor (부모 색상 상속)
 *  className — 추가 클래스
 *
 * 사용 예:
 *  <Icon name="arrowDown" />
 *  <Icon name="arrowDownThick" size={20} color="var(--color-primary-normal)" />
 *  <Icon name="navigationCareer" />
 */

const normalModules = import.meta.glob(
  '../../icons/normal/*.svg',
  { eager: true, query: '?react', import: 'default' }
)
const navigationModules = import.meta.glob(
  '../../icons/navigation/*.svg',
  { eager: true, query: '?react', import: 'default' }
)

function buildMap(modules, prefix) {
  const map = {}
  for (const [path, Component] of Object.entries(modules)) {
    const filename = path.split('/').pop().replace('.svg', '')
    map[prefix ? prefix + filename.charAt(0).toUpperCase() + filename.slice(1) : filename] = Component
    // navigation 아이콘은 'navigationCareer' 형태로 이미 prefix 포함
    map[filename] = Component
  }
  return map
}

const iconMap = {
  ...buildMap(normalModules, ''),
  ...buildMap(navigationModules, ''),
}

export default function Icon({
  name,
  size = 24,
  color = 'currentColor',
  className = '',
  ...props
}) {
  const SvgComponent = iconMap[name]

  if (!SvgComponent) {
    if (import.meta.env.DEV) {
      console.warn(`[Icon] 아이콘을 찾을 수 없습니다: "${name}"`)
    }
    return null
  }

  return (
    <SvgComponent
      width={size}
      height={size}
      fill={color}
      className={className}
      aria-hidden="true"
      {...props}
    />
  )
}

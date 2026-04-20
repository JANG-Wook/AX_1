import { useState } from 'react'
import Sidebar from './showcase/Sidebar'

import ColorsPage         from './showcase/pages/ColorsPage'
import TypographyPage     from './showcase/pages/TypographyPage'
import ElevationPage      from './showcase/pages/ElevationPage'
import ArtboardPage       from './showcase/pages/ArtboardPage'
import BreakpointPage     from './showcase/pages/BreakpointPage'
import SpacingPage        from './showcase/pages/SpacingPage'
import LayoutGridColumnPage from './showcase/pages/LayoutGridColumnPage'
import LayoutMaxWidthPage    from './showcase/pages/LayoutMaxWidthPage'
import ThemeIconNormalPage      from './showcase/pages/ThemeIconNormalPage'
import ThemeIconNavigationPage  from './showcase/pages/ThemeIconNavigationPage'
import AlertPage          from './showcase/pages/AlertPage'
import AvatarPage         from './showcase/pages/AvatarPage'
import CardPage           from './showcase/pages/CardPage'
import CategoryPage       from './showcase/pages/CategoryPage'
import CheckboxPage       from './showcase/pages/CheckboxPage'
import ContentBadgePage   from './showcase/pages/ContentBadgePage'
import DividerPage        from './showcase/pages/DividerPage'
import FramedStylePage    from './showcase/pages/FramedStylePage'
import IconPage           from './showcase/pages/IconPage'
import ListCardPage       from './showcase/pages/ListCardPage'
import ListCellPage       from './showcase/pages/ListCellPage'
import MenuPage           from './showcase/pages/MenuPage'
import PageIndicatorPage  from './showcase/pages/PageIndicatorPage'
import PaginationDotsPage from './showcase/pages/PaginationDotsPage'
import PaginationNavPage  from './showcase/pages/PaginationNavPage'
import RadioPage          from './showcase/pages/RadioPage'
import SegmentedControlPage from './showcase/pages/SegmentedControlPage'
import SelectPage         from './showcase/pages/SelectPage'
import SkeletonPage       from './showcase/pages/SkeletonPage'
import SnackbarPage       from './showcase/pages/SnackbarPage'
import SpinnerPage        from './showcase/pages/SpinnerPage'
import SwitchPage         from './showcase/pages/SwitchPage'
import TabPage            from './showcase/pages/TabPage'
import TextfieldPage      from './showcase/pages/TextfieldPage'
import ThumbnailPage      from './showcase/pages/ThumbnailPage'
import ToastPage          from './showcase/pages/ToastPage'
import TooltipPage        from './showcase/pages/TooltipPage'
import ElementRatioVerticalPage    from './showcase/pages/ElementRatioVerticalPage'
import ElementRatioHorizontalPage  from './showcase/pages/ElementRatioHorizontalPage'
import ElementSafeAreaPage           from './showcase/pages/ElementSafeAreaPage'
import DecorateGradientPage        from './showcase/pages/DecorateGradientPage'
import EssentialPage              from './showcase/pages/EssentialPage'
import DecorateInteractionPage    from './showcase/pages/DecorateInteractionPage'
import ActionBottomPage           from './showcase/pages/ActionBottomPage'

const PAGE_MAP = {
  colors:           ColorsPage,
  typography:       TypographyPage,
  elevation:        ElevationPage,
  artboard:         ArtboardPage,
  breakpoint:       BreakpointPage,
  spacing:          SpacingPage,
  layoutGridColumn: LayoutGridColumnPage,
  layoutMaxWidth:   LayoutMaxWidthPage,
  iconNormal:       ThemeIconNormalPage,
  iconNavigation:   ThemeIconNavigationPage,
  alert:            AlertPage,
  avatar:           AvatarPage,
  card:             CardPage,
  category:         CategoryPage,
  checkbox:         CheckboxPage,
  contentBadge:     ContentBadgePage,
  divider:          DividerPage,
  framedStyle:      FramedStylePage,
  icon:             IconPage,
  listCard:         ListCardPage,
  listCell:         ListCellPage,
  menu:             MenuPage,
  pageIndicator:    PageIndicatorPage,
  paginationDots:   PaginationDotsPage,
  paginationNav:    PaginationNavPage,
  radio:            RadioPage,
  segmentedControl: SegmentedControlPage,
  select:           SelectPage,
  skeleton:         SkeletonPage,
  snackbar:         SnackbarPage,
  spinner:          SpinnerPage,
  switch:           SwitchPage,
  tab:              TabPage,
  textfield:        TextfieldPage,
  thumbnail:        ThumbnailPage,
  toast:            ToastPage,
  tooltip:              TooltipPage,
  elementRatioVertical:   ElementRatioVerticalPage,
  elementRatioHorizontal: ElementRatioHorizontalPage,
  elementSafeArea:        ElementSafeAreaPage,
  decorateGradient:         DecorateGradientPage,
  essential:                EssentialPage,
  decorateInteraction:      DecorateInteractionPage,
  actionBottom:             ActionBottomPage,
}

export default function App() {
  const [activePage, setActivePage] = useState('colors')
  const PageComponent = PAGE_MAP[activePage] ?? ColorsPage

  return (
    <div style={{
      display:         'flex',
      minHeight:       '100vh',
      backgroundColor: 'var(--color-bg-normal-alternative)',
      fontFamily:      'var(--font-family-base)',
    }}>
      <Sidebar activePage={activePage} onNavigate={setActivePage} />

      <main style={{
        flex:       1,
        overflowY:  'auto',
        minHeight:  '100vh',
        padding:    'var(--spacing-48)',
        boxSizing:  'border-box',
        maxWidth:   'calc(100vw - 220px)',
      }}>
        <PageComponent />
      </main>
    </div>
  )
}

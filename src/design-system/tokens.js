/**
 * AX_1 Design System — tokens.js
 * Figma: Foundation_Typography (node: 156:54083)
 *         Foundation_Token_Color  (node: 156:46510)
 * ⚠️ 이 파일을 수정하면 tokens.css도 반드시 동기화할 것
 */

export const fontFamily = {
  base: "'Pretendard JP Variable', 'Pretendard JP', sans-serif",
}

export const fontWeight = {
  bold:      700,
  semibold:  600,
  medium:    500,
  regular:   400,
}

export const fontSize = {
  'display-1':  '56px',
  'display-2':  '40px',
  'display-3':  '36px',
  'title-1':    '32px',
  'title-2':    '28px',
  'title-3':    '24px',
  'heading-1':  '22px',
  'heading-2':  '20px',
  'headline-1': '18px',
  'headline-2': '17px',
  'body-1':     '16px',
  'body-2':     '15px',
  'label-1':    '14px',
  'label-2':    '13px',
  'caption-1':  '12px',
  'caption-2':  '11px',
}

export const lineHeight = {
  'display-1':       1.286,
  'display-2':       1.3,
  'display-3':       1.334,
  'title-1':         1.375,
  'title-2':         1.358,
  'title-3':         1.334,
  'heading-1':       1.364,
  'heading-2':       1.4,
  'headline-1':      1.445,
  'headline-2':      1.412,
  'body-1-normal':   1.5,
  'body-1-reading':  1.625,
  'body-2-normal':   1.467,
  'body-2-reading':  1.6,
  'label-1-normal':  1.429,
  'label-1-reading': 1.571,
  'label-2':         1.385,
  'caption-1':       1.334,
  'caption-2':       1.273,
}

export const letterSpacing = {
  'display-1':  '-0.0319em',
  'display-2':  '-0.0282em',
  'display-3':  '-0.027em',
  'title-1':    '-0.0253em',
  'title-2':    '-0.0236em',
  'title-3':    '-0.023em',
  'heading-1':  '-0.0194em',
  'heading-2':  '-0.012em',
  'headline-1': '-0.002em',
  'headline-2':  '0em',
  'body-1':      '0.0057em',
  'body-2':      '0.0096em',
  'label-1':     '0.0145em',
  'label-2':     '0.0194em',
  'caption-1':   '0.0252em',
  'caption-2':   '0.0311em',
}

export const color = {
  label: {
    strong:      '#000000',
    normal:      '#171719',
    neutral:     'rgba(46, 47, 51, 0.88)',
    alternative: 'rgba(55, 56, 60, 0.61)',
    assistive:   'rgba(55, 56, 60, 0.28)',
    disable:     'rgba(55, 56, 60, 0.16)',
  },
  background: {
    normal:                 '#FFFFFF',
    normalAlternative:      '#F7F7F8',
    elevated:               '#FFFFFF',
    elevatedAlternative:    '#F7F7F8',
    transparent:            'rgba(255, 255, 255, 0.08)',
    transparentAlternative: 'rgba(255, 255, 255, 0.28)',
  },
  line: {
    normal:          'rgba(112, 115, 124, 0.22)',
    strong:          'rgba(112, 115, 124, 0.52)',
    neutral:         'rgba(112, 115, 124, 0.16)',
    alternative:     'rgba(112, 115, 124, 0.08)',
    solidNormal:     '#E1E2E4',
    solidNeutral:    '#EAEBEC',
    solidAlternative: '#F4F4F5',
  },
  fill: {
    normal:      'rgba(112, 115, 124, 0.08)',
    alternative: 'rgba(112, 115, 124, 0.05)',
    strong:      'rgba(112, 115, 124, 0.16)',
  },
  interaction: {
    inactive: '#989BA2',
    disable:  '#F4F4F5',
  },
  primary: {
    normal: '#0066FF',
    strong: '#005EEB',
    heavy:  '#0054D1',
  },
  status: {
    positive:   '#00BF40',
    cautionary: '#FF9200',
    negative:   '#FF4242',
  },
  accentBackground: {
    redOrange: '#FF5E00',
    lime:      '#58CF04',
    cyan:      '#00BDDE',
    lightBlue: '#00AEFF',
    violet:    '#6541F2',
    purple:    '#CB59FF',
    pink:      '#F553DA',
  },
  accentForeground: {
    red:       '#E52222',
    redOrange: '#F55A00',
    orange:    '#D17600',
    lime:      '#429E00',
    green:     '#009632',
    cyan:      '#0098B2',
    lightBlue: '#008DCF',
    blue:      '#005EEB',
    violet:    '#5B37ED',
    purple:    '#AD36E3',
    pink:      '#E846CD',
  },
  inverse: {
    primary:    '#3385FF',
    background: '#1B1C1E',
    label:      '#F7F7F8',
  },
  static: {
    white: '#FFFFFF',
    black: '#000000',
  },
  material: {
    dimmer: 'rgba(23, 25, 25, 0.52)',
  },
}

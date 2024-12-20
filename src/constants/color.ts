export const brandColor = '#E62F71';

export const colorToken = {
  white: '#FFFFFF',
  black: '#000000',
  gray050: '#FBFBFB',
  gray100: '#F4F4F4',
  gray150: '#F0F0F0',
  gray200: '#E9E9E9',
  gray300: '#E1E1E1',
  gray400: '#D3D3D3',
  gray500: '#B5B5B5',
  gray600: '#919191',
  gray650: '#5E666E',
  gray700: '#6D6D6D',
  gray800: '#484848',
  gray900: '#242424',
  gray950: '#121212',
  gray1000: '#3A3E46',
  pink030: '#FFF7FA',
  pink050: '#FFEDF3',
  pink100: '#FFDEEA',
  pink150: '#FFCBDE',
  pink200: '#FFB8D2',
  pink300: '#FF92BA',
  pink400: '#FF6AA0',
  pink500: '#FF347D',
  pink600: '#E62F71',
  pink700: '#CF2A66',
  pink800: '#A72253',
  pink900: '#871C43',
  blue050: '#F2F4FF',
  blue100: '#E1E5FF',
  blue150: '#C7D0FF',
  blue200: '#B2BDFF',
  blue300: '#8C9EFF',
  blue400: '#536DFE',
  blue500: '#536DFE',
  blue550: '#4864FF',
  blue600: '#445CD1',
  blue700: '#384BA4',
  blue800: '#2D3A7A',
  blue900: '#232A52',
  red050: '#fff5f6',
  red100: '#ffebed',
  red150: '#ffdbdf',
  red200: '#ffc7cd',
  red300: '#ffa8b2',
  red400: '#ff6a7c',
  red500: '#f03e3e',
  red600: '#c2393b',
  red700: '#953436',
  red800: '#692d2e',
  green100:'#5ac366',
  green200: '#6E827F',
  yellow300:'#fff97a', // light_yellow
  yellow500: '#FEE700',
  yellow600: '#FEC600', // yellowReview
  orange500: '#FFA93B',
  orange600: '#f25e5e',
};

 export type Color = keyof typeof colorToken;

export const semanticColor = {
  safeGreen: {light: colorToken.green100, dark: ''},
  warningRed: {light: colorToken.red500, dark: ''},
  grayMain: { light: 'rgba(255, 255, 255, 0.88)', dark: '' },
  grayPrimary: { light: colorToken.gray800, dark: '' },
  graySecondary: { light: colorToken.gray700, dark: '' },
  grayTertiary: { light: colorToken.gray500, dark: '' },
  grayActive: { light: colorToken.gray900, dark: '' },
  grayInactive: { light: colorToken.gray600, dark: '' },
  grayDisabled: { light: colorToken.gray300, dark: '' },
  grayInactiveFilled: { light: colorToken.gray300, dark: '' },
  customGray: { light: colorToken.gray1000, dark: '' },
  border1: { light: colorToken.gray400, dark: '' },
  border2: { light: colorToken.gray300, dark: '' },
  border3: { light: colorToken.gray200, dark: '' },
  border4: { light: colorToken.gray100, dark: '' },
  bgPrimary: { light: colorToken.gray050, dark: '' },
  bgSecondary: { light: colorToken.gray100, dark: '' },
  pinkPrimary: { light: colorToken.pink600, dark: '' },
  pinkInactive: { light: colorToken.pink200, dark: '' },
  pinkDisabled: { light: colorToken.pink150, dark: '' },
  blogPrimary: { light: 'rgba(255, 255, 255, 0.88)', dark: '' },
}



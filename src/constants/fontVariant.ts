import { StyleSheet } from 'react-native';

export const typographyMap = StyleSheet.create({
  title1Bold: {
    fontSize: 24,
    lineHeight: 31.2,
    fontWeight: '600',
  },
  title1Medium: {
    fontSize: 24,
    lineHeight: 31.2,
    fontWeight: '500',
  },
  title2Bold: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '600',
  },
  title2Medium: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '500',
  },
  title3Bold: {
    fontSize: 18,
    lineHeight: 25.2,
    fontWeight: '600',
  },
  title3Medium: {
    fontSize: 18,
    lineHeight: 25.2,
    fontWeight: '500',
  },
  title4Bold: {
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '600',
  },
  title4Medium: {
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '500',
  },
  title5Bold: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '600',
  },
  title5Medium: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '500',
  },
  title6Bold: {
    fontSize: 14,
    lineHeight: 19.6,
    fontWeight: '600',
  },
  title6Medium: {
    fontSize: 14,
    lineHeight: 19.6,
    fontWeight: '500',
  },
  body1: {
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '400',
  },
  body2: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '400',
  },
  body3: {
    fontSize: 14,
    lineHeight: 19.6,
    fontWeight: '400',
  },
  body4Bold: {
    fontSize: 13,
    lineHeight: 18.2,
    fontWeight: '600',
  },
  body4Medium: {
    fontSize: 13,
    lineHeight: 18.2,
    fontWeight: '500',
  },
  body4Regular: {
    fontSize: 13,
    lineHeight: 18.2,
    fontWeight: '400',
  },
  small1Bold: {
    fontSize: 12,
    lineHeight: 16.8,
    fontWeight: '600',
  },
  small1Medium: {
    fontSize: 12,
    lineHeight: 16.8,
    fontWeight: '500',
  },
  small1Regular: {
    fontSize: 12,
    lineHeight: 16.8,
    fontWeight: '400',
  },
  small2Bold: {
    fontSize: 11,
    lineHeight: 15.4,
    fontWeight: '600',
  },
  small2Medium: {
    fontSize: 11,
    lineHeight: 15.4,
    fontWeight: '500',
  },
  small2Regular: {
    fontSize: 11,
    lineHeight: 15.4,
    fontWeight: '400',
  },
  small3Bold: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '600',
  },
  small3Medium: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '500',
  },
  small3Regular: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '400',
  },
  small4Bold: {
    fontWeight: '600',
    fontSize: 9,
    lineHeight: 12.6,
  },
  small4Medium: {
    fontWeight: '500',
    fontSize: 9,
    lineHeight: 12.6,
  },
  small4Regular: {
    fontWeight: '400',
    fontSize: 9,
    lineHeight: 12.6,
  },
});

export type TypographyKey = keyof typeof typographyMap;

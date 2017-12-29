import { StyleSheet, Platform } from 'react-native';
import { COLORS, FONTS } from '../../../assets/style/index';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
      android: {
        paddingTop: 0,
      },
    }),
  },
  content: {
    flex: 1,
  },
  titleRow: {
    paddingVertical: 15,
    paddingHorizontal: 16,
  },
  marginB: {
    paddingBottom: 0,
  },
  title: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.MullerMedium,
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  customStyleDate: {
    borderColor: COLORS.border,
  },
  titleBtn: {
    fontSize: 18,
    color: '#909192',
    fontFamily: FONTS.MullerRegular,
  },
  activeTitle: {
    color: COLORS.black,
  },
  customMargin: {
    paddingBottom: 8,
  },
  customStyleBtn: {
    marginTop: 25,
    borderRadius: 0,
    backgroundColor: '#F73315',
  },
  styleSelectBtn: {
    paddingVertical: 14,
  },
});
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
  styleStatusBar: {
    marginBottom: 12,
  },
  customStyleBtn: {
    marginTop: 40,
    marginBottom: 15,
    borderRadius: 0,
  },
  wrapTitle: {
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: COLORS.borderColor,
  },
  title: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.MullerMedium,
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: COLORS.borderColor,
  },
  infoLeft: {
    flex: 1,
  },
  infoText: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.MullerRegular,
  },
  marginB: {
    marginBottom: 10,
  },
  infoTextNumber: {
    fontSize: 18,
    color: COLORS.black,
    marginLeft: 5,
    fontFamily: FONTS.MullerRegular,
  },
  styleFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoTextMedium: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.MullerMedium,
  },
  titleCountry: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.MullerBold,
    marginBottom: 8,
  },
  footerBtn: {
    alignItems: 'center',
    marginBottom: 15,
  },
  footerBtnText: {
    fontSize: 16,
    color: '#F74E34',
    textDecorationLine: 'underline',
    fontFamily: FONTS.MullerMedium,
  },
  input: {
    fontSize: 18,
  },
  wrapInputs: {
    marginBottom: 42,
  },
});
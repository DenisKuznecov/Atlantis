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
    marginBottom: 15,
    borderRadius: 0,
  },
  wrapTitle: {
    paddingHorizontal: 16,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.MullerMedium,
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
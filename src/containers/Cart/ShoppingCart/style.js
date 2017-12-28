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
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingRight: 16,
    borderTopWidth: 1,
    borderColor: COLORS.borderColor,
  },
  filterPrice: {
    color: COLORS.black,
    fontSize: 18,
  },
  filterTitle: {
    color: COLORS.black,
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 16,
    fontFamily: FONTS.MullerMedium,
  },
  styleItemCart: {
    marginBottom: 25,
  },
  customStyleBtn: {
    marginBottom: 15,
    borderRadius: 0,
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
});
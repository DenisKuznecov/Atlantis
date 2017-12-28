import { StyleSheet, Platform } from 'react-native';
import { COLORS, FONTS } from '../../assets/style/index';

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  customStyleBtn: {
    flex: 0,
    borderRadius: 0,
  },
  title: {
    fontSize: 27,
    marginBottom: 15,
    color: COLORS.black,
    fontFamily: FONTS.MullerMedium,
  },
  subTitle: {
    color: '#8E9094',
    fontSize: 18,
    marginBottom: 50,
    fontFamily: FONTS.MullerRegular,
  },
});
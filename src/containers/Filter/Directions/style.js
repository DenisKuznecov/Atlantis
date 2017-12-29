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
  btnRow: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  name: {
    flex: 1,
    fontSize: 18,
    fontFamily: FONTS.MullerRegular,
  },
});
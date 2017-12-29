import { StyleSheet } from 'react-native';
import { COLORS, FONTS, } from '../../assets/style';

export default StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  title: {
    fontSize: 18,
    color: '#909192',
    fontFamily: FONTS.MullerRegular,
  },
  activeTitle: {
    color: COLORS.black,
  },
});
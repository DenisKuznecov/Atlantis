import { StyleSheet, Platform } from 'react-native';
import { COLORS, FONTS } from '../../assets/style';

export default StyleSheet.create({
  wrap: {
    borderBottomWidth: 1,
    borderColor: COLORS.borderColor,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  placeholder: {
    fontSize: 18,
    flex: 1,
    color: COLORS.placeholder,
  },
  styleIcon: {
  },
  selectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectTitle: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.MullerMedium,
    marginBottom: 10,
  },
});
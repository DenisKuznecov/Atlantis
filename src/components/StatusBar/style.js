import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../assets/style';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  wrap: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scroll: {
    paddingVertical: 12,
  },
  statusItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 34,
    height: 34,
    borderRadius: 20,
    backgroundColor: COLORS.statusGray,
  },
  itemText: {
    color: COLORS.blue,
    fontSize: 14,
    fontFamily: FONTS.MullerRegular,
  },
  activeText: {
    color: COLORS.white,
  },
  line: {
    flex: 1,
    height: 7,
    backgroundColor: COLORS.statusGray,
  },
  activeItem: {
    backgroundColor: COLORS.blue,
  },
  activeLine: {
    backgroundColor: COLORS.blue,
  },
});
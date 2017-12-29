import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../assets/style';
const { width } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.opacityBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    borderRadius: 8,
    width: width - 15,
    backgroundColor: COLORS.white,
    paddingTop: 27,
    paddingBottom: 16,
  },
  modalTitle: {
    color: COLORS.black,
    fontSize: 16,
    marginBottom: 10,
    fontFamily: FONTS.MullerMedium,
    marginHorizontal: 16,
  },
  wrapInputs: {
    marginBottom: 30,
  },
  wrapBtn: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  btnClose: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  iconCloseBtn: {
    color: COLORS.colorClose,
    fontSize: 23,
  }
});
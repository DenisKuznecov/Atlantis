import { StyleSheet, Dimensions, } from 'react-native';
import { COLORS, FONTS } from '../../assets/style';
const { width } = Dimensions.get('window');
export default StyleSheet.create({
  wrap: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: COLORS.borderColor,
  },
  leftCol: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightCol: {
    flex: width === 320 ? 1.2 : 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  wrapInput: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 3,
  },
  title: {
    flex: 1,
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.MullerRegular,
  },
  icon: {
    marginRight: 10,
  },
  styleInput: {
    flex: 1,
    height: 29,
    paddingHorizontal: 3,
    textAlign: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.blue,
  },
  btnMin: {
    height: 29,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnMax: {
    height: 29,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    color: '#909192',
    fontSize: 18,
    marginRight: 10,
  },
});
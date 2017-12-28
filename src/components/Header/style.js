import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../assets/style';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  leftCol: {
    width: 30,
  },
  rightCol: {
    width: 30,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 18,
    color: COLORS.black,
    flex: 1,
    textAlign: 'center',
    fontFamily: FONTS.MullerRegular,
  },
  customWidth: {
    width: 45,
  },
  btnText: {
    fontSize: 18,
    color: COLORS.blue,
  },
});
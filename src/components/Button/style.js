import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../assets/style';

export default StyleSheet.create({
  btn: {
    height: 48,
    borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  orange: {
    backgroundColor: COLORS.orange,
  },
  blue: {
    backgroundColor: COLORS.blue,
  },
  btnText: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.MullerMedium,
  },
});
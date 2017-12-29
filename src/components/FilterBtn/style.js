import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../assets/style';


export default StyleSheet.create({
  wrap: {
    position: 'absolute',
    right: 23,
    bottom: 16,
    width: 60,
    height: 60,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 0,

    },
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  text: {
    fontSize: 9,
    color: COLORS.blueBtn,
  },
  iconFilter: {
    marginBottom: 3,
  }

});